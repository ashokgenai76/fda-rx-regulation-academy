/**
 * FDA Rx Regulation Academy — Audio Guide Engine
 * Uses the Web Speech API (browser-native TTS) — no external API required.
 *
 * Features:
 *  - Play / Pause / Stop narration
 *  - Auto-read on slide change
 *  - Speed control (0.75× → 2×)
 *  - English voice selector
 *  - Chrome long-utterance bug workaround (chunked playback)
 *  - Visual waveform animation while speaking
 */

const AudioGuide = (() => {

  // ── Guard: unsupported browsers ─────────────────────────
  if (!('speechSynthesis' in window)) {
    console.warn('AudioGuide: SpeechSynthesis not supported in this browser.');
    return {
      init: () => { hideAudioBar(); },
      onSlideChange: () => {},
      stop: () => {},
      toggle: () => {},
      setRate: () => {},
      setVoice: () => {},
      toggleAutoPlay: () => {},
      toggleSettings: () => {}
    };
  }

  // ── State ────────────────────────────────────────────────
  const synth = window.speechSynthesis;
  let voices     = [];
  let voice      = null;
  let rate       = 1.0;
  let autoPlay   = false;
  let playing    = false;
  let slideIdx   = 0;
  let chunkTimer = null;

  // ── Voice Loading ─────────────────────────────────────────
  function loadVoices() {
    voices = synth.getVoices().filter(v => v.lang.startsWith('en'));
    if (!voices.length) voices = synth.getVoices();

    // Prefer high-quality local English voices
    voice = voices.find(v => v.name === 'Samantha')                        // macOS/iOS
         || voices.find(v => v.name === 'Karen')                           // macOS AU
         || voices.find(v => v.name === 'Daniel')                          // macOS UK
         || voices.find(v => v.name.includes('Microsoft Aria'))            // Windows
         || voices.find(v => v.lang === 'en-US' && v.localService)
         || voices.find(v => v.lang === 'en-US')
         || voices.find(v => v.lang.startsWith('en'))
         || voices[0];

    const sel = document.getElementById('voice-select');
    if (!sel) return;
    sel.innerHTML = voices.map(v =>
      `<option value="${v.name}">${v.name.replace(/\s*\(.*\)/, '')}</option>`
    ).join('');
    if (voice) sel.value = voice.name;
  }

  // ── Text Extraction ───────────────────────────────────────
  function extractSlideText(index) {
    const el = document.querySelector(`.slide[data-index="${index}"]`);
    if (!el) return '';

    const clone = el.cloneNode(true);

    // Strip non-speech elements
    const skipSelectors = [
      '.cfr-badge', '.info-card-icon', '.hero-icon', '.hero-tags',
      '.hero-tag', '.status-dot', '.module-card-accent', 'style', 'script',
      'svg', 'button'
    ];
    clone.querySelectorAll(skipSelectors.join(',')).forEach(n => n.remove());

    // Replace rule-number bullets with nothing (they read oddly)
    clone.querySelectorAll('.rule-num').forEach(n => n.remove());

    // Ensure headings end with a period for natural pausing
    clone.querySelectorAll('h1,h2,h3,h4').forEach(h => {
      const t = h.textContent.trim();
      if (t && !/[.!?]$/.test(t)) h.textContent = t + '.';
    });

    // Add pause after each card/list-item
    clone.querySelectorAll('.info-card, li, .timeline-item').forEach(el => {
      el.insertAdjacentText('afterend', ' ');
    });

    // Add separator between table cells
    clone.querySelectorAll('td, th').forEach(cell => {
      const t = cell.textContent.trim();
      if (t && !/[.!?:]$/.test(t)) cell.textContent = t + '. ';
    });

    // Get raw text
    const raw = clone.textContent || '';

    return raw
      .replace(/[^\S\n]+/g, ' ')          // collapse horizontal whitespace
      .replace(/\n{2,}/g, '... ')         // paragraph breaks → pause
      .replace(/\n/g, ' ')               // single newlines → space
      .replace(/\.{2,}/g, '.')           // remove double periods
      .replace(/[\u{1F300}-\u{1FFFF}]/gu, '') // strip emojis (broad unicode)
      .replace(/[✓✗⚠️🔊👁️📊🎵📌📋📅]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  // ── Chunked Playback (Chrome long-utterance workaround) ───
  // Chrome silently drops utterances longer than ~250 words.
  function chunkText(text, maxWords = 180) {
    const sentences = text.split(/(?<=[.!?])\s+/); // split on sentence ends
    const chunks = [];
    let current = '';
    for (const s of sentences) {
      const combined = current ? current + ' ' + s : s;
      if (combined.split(' ').length > maxWords && current) {
        chunks.push(current);
        current = s;
      } else {
        current = combined;
      }
    }
    if (current) chunks.push(current);
    return chunks.length ? chunks : [text];
  }

  function speakChunks(chunks, i) {
    if (i >= chunks.length) {
      setPlayState(false);
      return;
    }

    const u = new SpeechSynthesisUtterance(chunks[i]);
    u.voice  = voice;
    u.rate   = rate;
    u.pitch  = 1.0;
    u.volume = 1.0;

    if (i === 0) u.onstart = () => setPlayState(true);
    u.onend   = () => speakChunks(chunks, i + 1);
    u.onerror = (e) => {
      if (e.error !== 'interrupted') setPlayState(false);
    };

    synth.speak(u);
  }

  // Chrome has a bug where synth.speaking can get stuck.
  // This keepAlive ping prevents it from silently dying on long texts.
  function startKeepAlive() {
    stopKeepAlive();
    chunkTimer = setInterval(() => {
      if (!synth.speaking) { stopKeepAlive(); return; }
      if (synth.paused) return;
      // Chrome workaround: pause + resume to keep synthesis alive
      synth.pause();
      synth.resume();
    }, 12000);
  }

  function stopKeepAlive() {
    if (chunkTimer) { clearInterval(chunkTimer); chunkTimer = null; }
  }

  // ── Public: Playback Controls ─────────────────────────────
  function readCurrentSlide() {
    const text = extractSlideText(slideIdx);
    if (!text) return;

    synth.cancel();
    stopKeepAlive();

    const chunks = chunkText(text);
    speakChunks(chunks, 0);
    startKeepAlive();
  }

  function toggle() {
    if (synth.speaking && !synth.paused) {
      synth.pause();
      setPlayState(false);
    } else if (synth.paused) {
      synth.resume();
      setPlayState(true);
    } else {
      readCurrentSlide();
    }
  }

  function stop() {
    synth.cancel();
    stopKeepAlive();
    setPlayState(false);
  }

  // ── Public: Settings ──────────────────────────────────────
  function setRate(r) {
    rate = parseFloat(r);
    const label = document.getElementById('rate-label');
    if (label) label.textContent = rate === 1 ? '1×' : rate + '×';

    // Update active button
    document.querySelectorAll('.rate-btn').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.rate) === rate);
    });

    if (synth.speaking) { stop(); setTimeout(readCurrentSlide, 100); }
  }

  function setVoice(name) {
    voice = voices.find(v => v.name === name) || voice;
    if (synth.speaking) { stop(); setTimeout(readCurrentSlide, 100); }
  }

  function toggleAutoPlay() {
    autoPlay = !autoPlay;
    const btn = document.getElementById('auto-play-btn');
    if (!btn) return;
    btn.classList.toggle('active', autoPlay);
    btn.querySelector('.ap-label').textContent = autoPlay ? 'Auto ON' : 'Auto';
    btn.title = autoPlay ? 'Auto-read enabled — click to disable' : 'Enable auto-read on each slide';

    // Show toast
    showToast(autoPlay ? 'Auto-read enabled' : 'Auto-read off');
  }

  function toggleSettings() {
    const panel = document.getElementById('audio-settings-panel');
    if (!panel) return;
    const open = panel.classList.toggle('open');
    const btn = document.getElementById('audio-settings-btn');
    if (btn) btn.classList.toggle('active', open);
  }

  // ── Integration Hooks ─────────────────────────────────────
  function onSlideChange(index) {
    slideIdx = index;
    stop();
    if (autoPlay) {
      setTimeout(readCurrentSlide, 350); // wait for slide transition
    }
  }

  // ── UI Helpers ────────────────────────────────────────────
  function setPlayState(isPlaying) {
    playing = isPlaying;
    const btn       = document.getElementById('audio-play-btn');
    const waveform  = document.getElementById('audio-waveform');
    const statusTxt = document.getElementById('audio-status-text');

    if (!btn) return;

    if (isPlaying) {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>`;
      btn.title = 'Pause narration';
      if (waveform)  waveform.classList.add('playing');
      if (statusTxt) statusTxt.textContent = 'Narrating…';
    } else {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21"/>
        </svg>`;
      btn.title = 'Play narration';
      if (waveform)  waveform.classList.remove('playing');
      if (statusTxt) statusTxt.textContent = 'Audio Guide';
    }
  }

  function showToast(msg) {
    const t = document.getElementById('audio-toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  }

  function hideAudioBar() {
    const bar = document.getElementById('audio-bar');
    if (bar) bar.style.display = 'none';
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
    setPlayState(false);
  }

  return {
    init,
    toggle,
    stop,
    setRate,
    setVoice,
    toggleAutoPlay,
    toggleSettings,
    onSlideChange,
    readCurrentSlide
  };

})();
