/**
 * FDA Rx Regulation Academy — Audio Guide Engine v3
 *
 * Providers (in order of quality):
 *   1. Hugging Face (Kokoro-82M) — human-quality, completely FREE, unlimited
 *   2. ElevenLabs  — human-quality AI voices, free tier 10K chars/mo
 *   3. OpenAI TTS  — very natural AI voices, pay-as-you-go
 *   4. Browser TTS — built-in Web Speech API (fallback, no key needed)
 *
 * API keys are stored per-provider in localStorage and never leave the browser.
 * Generated audio is cached in memory so each slide is only fetched once per session.
 */

const AudioGuide = (() => {

  // ── Provider config ─────────────────────────────────────
  const PROVIDERS = {
    huggingface: {
      name: 'Hugging Face — Kokoro (FREE)',
      voices: [
        { id: 'af_heart',    label: 'Heart — American Female (warm)' },
        { id: 'af_bella',    label: 'Bella — American Female (bright)' },
        { id: 'af_nicole',   label: 'Nicole — American Female (smooth)' },
        { id: 'af_sky',      label: 'Sky — American Female (airy)' },
        { id: 'af_aoede',    label: 'Aoede — American Female (expressive)' },
        { id: 'am_adam',     label: 'Adam — American Male (clear)' },
        { id: 'am_michael',  label: 'Michael — American Male (deep)' },
        { id: 'bf_emma',     label: 'Emma — British Female (elegant)' },
        { id: 'bf_isabella', label: 'Isabella — British Female (refined)' },
        { id: 'bm_george',   label: 'George — British Male (authoritative)' },
        { id: 'bm_lewis',    label: 'Lewis — British Male (warm)' },
      ],
      defaultVoice: 'af_heart',
      model: 'hexgrad/Kokoro-82M',
    },
    elevenlabs: {
      name: 'ElevenLabs',
      voices: [
        { id: 'EXAVITQu4vr4xnSDxMaL', label: 'Sarah (warm, clear)' },
        { id: '21haVlAjigA0e75Yck5b', label: 'Rachel (calm, professional)' },
        { id: 'AZnzlk1XvdvUeBnXmlld', label: 'Domi (confident)' },
        { id: 'MF3mGyEYCl7XYWbV9V6O', label: 'Elli (upbeat)' },
        { id: 'TxGEqnHWrfWFTfGW9XjX', label: 'Josh (authoritative)' },
        { id: 'VR6AewLTigWG4xSOukaG', label: 'Arnold (strong)' },
        { id: 'pNInz6obpgDQGcFmaJgB', label: 'Adam (deep, steady)' },
      ],
      defaultVoice: 'EXAVITQu4vr4xnSDxMaL',
      model: 'eleven_turbo_v2_5',
    },
    openai: {
      name: 'OpenAI TTS',
      voices: [
        { id: 'nova',    label: 'Nova (warm, natural)' },
        { id: 'shimmer', label: 'Shimmer (clear, bright)' },
        { id: 'alloy',   label: 'Alloy (neutral, balanced)' },
        { id: 'echo',    label: 'Echo (smooth)' },
        { id: 'fable',   label: 'Fable (expressive)' },
        { id: 'onyx',    label: 'Onyx (deep, authoritative)' },
      ],
      defaultVoice: 'nova',
      model: 'tts-1-hd',
    },
    browser: {
      name: 'Browser (built-in)',
      voices: [],
      defaultVoice: '',
      model: '',
    },
  };

  // ── State ────────────────────────────────────────────────
  let provider    = localStorage.getItem('fda_tts_provider') || 'browser';
  let selectedVoiceId = localStorage.getItem('fda_tts_voice') || PROVIDERS[provider]?.defaultVoice || '';
  let rate        = parseFloat(localStorage.getItem('fda_tts_rate') || '1.0');

  // Per-provider key helpers (keys stored separately so switching providers doesn't lose them)
  function getKey(p)        { return localStorage.getItem(`fda_tts_key_${p}`) || ''; }
  function setKey(p, val)   { localStorage.setItem(`fda_tts_key_${p}`, val.trim()); }
  let apiKey = getKey(provider);
  let autoPlay    = false;
  let playing     = false;
  let slideIdx    = 0;

  // Audio cache: "provider:voiceId:slideIdx" -> ObjectURL
  const audioCache = new Map();
  let currentAudio = null;   // HTMLAudioElement (AI providers)
  let chunkTimer   = null;   // Browser TTS keep-alive

  // Browser TTS voices
  const synth    = window.speechSynthesis || null;
  let browserVoices = [];
  let browserVoice  = null;

  // ── Init ─────────────────────────────────────────────────
  function init() {
    if (synth) {
      loadBrowserVoices();
      synth.onvoiceschanged = loadBrowserVoices;
    }
    renderProviderSelect();
    renderVoiceSelect();
    updateRateButtons();
    setPlayState(false);

    // Restore saved rate display
    const label = document.getElementById('rate-label');
    if (label) label.textContent = rate === 1 ? '1×' : rate + '×';
  }

  function loadBrowserVoices() {
    if (!synth) return;
    browserVoices = synth.getVoices().filter(v => v.lang.startsWith('en'));
    browserVoice = browserVoices.find(v => v.name === 'Samantha')
                || browserVoices.find(v => v.lang === 'en-US' && v.localService)
                || browserVoices.find(v => v.lang === 'en-US')
                || browserVoices[0];

    if (provider === 'browser') renderVoiceSelect();
  }

  // ── Text Extraction ───────────────────────────────────────
  function extractSlideText(index) {
    const el = document.querySelector(`.slide[data-index="${index}"]`);
    if (!el) return '';
    const clone = el.cloneNode(true);

    clone.querySelectorAll(
      '.cfr-badge,.info-card-icon,.hero-icon,.hero-tags,.hero-tag,' +
      '.status-dot,.module-card-accent,style,script,svg,button,.rule-num'
    ).forEach(n => n.remove());

    clone.querySelectorAll('h1,h2,h3,h4').forEach(h => {
      const t = h.textContent.trim();
      if (t && !/[.!?]$/.test(t)) h.textContent = t + '.';
    });

    clone.querySelectorAll('.info-card,li,.timeline-item').forEach(el => {
      el.insertAdjacentText('afterend', ' ');
    });

    clone.querySelectorAll('td,th').forEach(cell => {
      const t = cell.textContent.trim();
      if (t && !/[.!?:]$/.test(t)) cell.textContent = t + '. ';
    });

    return (clone.textContent || '')
      .replace(/[^\S\n]+/g, ' ')
      .replace(/\n{2,}/g, '... ')
      .replace(/\n/g, ' ')
      .replace(/\.{2,}/g, '.')
      .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
      .replace(/[✓✗⚠️🔊👁️📊🎵📌📋📅🏢🔍📨👥🚀🔬💰💡🆕🚨⚔️]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  // ── Playback dispatcher ───────────────────────────────────
  function readCurrentSlide() {
    const text = extractSlideText(slideIdx);
    if (!text) return;

    if (provider === 'huggingface' && apiKey) {
      playWithHuggingFace(text);
    } else if (provider === 'elevenlabs' && apiKey) {
      playWithElevenLabs(text);
    } else if (provider === 'openai' && apiKey) {
      playWithOpenAI(text);
    } else {
      playWithBrowser(text);
    }
  }

  // ── Hugging Face (Kokoro-82M) — FREE ─────────────────────
  async function playWithHuggingFace(text) {
    const cacheKey = `hf:${selectedVoiceId}:${slideIdx}`;
    if (audioCache.has(cacheKey)) {
      playAudioURL(audioCache.get(cacheKey));
      return;
    }

    setLoadingState(true);
    try {
      const voice = selectedVoiceId || PROVIDERS.huggingface.defaultVoice;
      const model = PROVIDERS.huggingface.model;

      const res = await fetch(
        `https://router.huggingface.co/hf-inference/models/${model}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: text,
          parameters: { voice }
        })
      });

      if (res.status === 503) {
        // Model warming up — retry once after 8 seconds
        showToast('Model loading… retrying in 8 s');
        await new Promise(r => setTimeout(r, 8000));
        return playWithHuggingFace(text);
      }

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Hugging Face error ${res.status}`);
      }

      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      audioCache.set(cacheKey, url);
      setLoadingState(false);
      playAudioURL(url);

    } catch (e) {
      setLoadingState(false);
      showToast('Hugging Face error — check your token');
      console.error('HuggingFace TTS:', e);
      playWithBrowser(text);
    }
  }

  // ── ElevenLabs ────────────────────────────────────────────
  async function playWithElevenLabs(text) {
    const cacheKey = `el:${selectedVoiceId}:${slideIdx}`;
    if (audioCache.has(cacheKey)) {
      playAudioURL(audioCache.get(cacheKey));
      return;
    }

    setLoadingState(true);
    try {
      const voiceId = selectedVoiceId || PROVIDERS.elevenlabs.defaultVoice;
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text: text,
          model_id: PROVIDERS.elevenlabs.model,
          voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true }
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.detail?.message || `ElevenLabs error ${res.status}`);
      }

      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      audioCache.set(cacheKey, url);
      setLoadingState(false);
      playAudioURL(url);

    } catch (e) {
      setLoadingState(false);
      showToast('ElevenLabs error — check your API key');
      console.error('ElevenLabs TTS:', e);
      // Fallback to browser
      playWithBrowser(text);
    }
  }

  // ── OpenAI TTS ────────────────────────────────────────────
  async function playWithOpenAI(text) {
    const cacheKey = `oai:${selectedVoiceId}:${slideIdx}`;
    if (audioCache.has(cacheKey)) {
      playAudioURL(audioCache.get(cacheKey));
      return;
    }

    setLoadingState(true);
    try {
      const res = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: PROVIDERS.openai.model,
          input: text,
          voice: selectedVoiceId || PROVIDERS.openai.defaultVoice,
          speed: rate,
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `OpenAI error ${res.status}`);
      }

      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      audioCache.set(cacheKey, url);
      setLoadingState(false);
      playAudioURL(url);

    } catch (e) {
      setLoadingState(false);
      showToast('OpenAI error — check your API key');
      console.error('OpenAI TTS:', e);
      playWithBrowser(text);
    }
  }

  // ── HTMLAudioElement playback (ElevenLabs / OpenAI) ───────
  function playAudioURL(url) {
    stopAudio();
    currentAudio = new Audio(url);
    currentAudio.playbackRate = (provider === 'openai') ? 1.0 : rate; // OpenAI bakes rate in
    currentAudio.onplay   = () => setPlayState(true);
    currentAudio.onended  = () => setPlayState(false);
    currentAudio.onerror  = () => setPlayState(false);
    currentAudio.play().catch(() => setPlayState(false));
  }

  function stopAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }
  }

  // ── Browser TTS (fallback) ────────────────────────────────
  function playWithBrowser(text) {
    if (!synth) return;
    synth.cancel();
    stopKeepAlive();

    const chunks = chunkText(text, 180);
    speakChunks(chunks, 0);
    startKeepAlive();
  }

  function chunkText(text, maxWords) {
    const sentences = text.split(/(?<=[.!?…])\s+/);
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
    if (!synth || i >= chunks.length) { setPlayState(false); return; }

    const u = new SpeechSynthesisUtterance(chunks[i]);
    u.voice  = browserVoice;
    u.rate   = rate;
    u.pitch  = 1.0;
    u.volume = 1.0;

    if (i === 0) u.onstart = () => setPlayState(true);
    u.onend   = () => speakChunks(chunks, i + 1);
    u.onerror = (e) => { if (e.error !== 'interrupted') setPlayState(false); };

    synth.speak(u);
  }

  function startKeepAlive() {
    stopKeepAlive();
    chunkTimer = setInterval(() => {
      if (!synth || !synth.speaking) { stopKeepAlive(); return; }
      if (!synth.paused) { synth.pause(); synth.resume(); }
    }, 12000);
  }
  function stopKeepAlive() {
    if (chunkTimer) { clearInterval(chunkTimer); chunkTimer = null; }
  }

  // ── Public controls ───────────────────────────────────────
  function toggle() {
    if (provider !== 'browser') {
      // AI audio via HTMLAudioElement
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        setPlayState(false);
      } else if (currentAudio && currentAudio.paused && currentAudio.src) {
        currentAudio.play();
        setPlayState(true);
      } else {
        readCurrentSlide();
      }
    } else {
      // Browser TTS
      if (synth && synth.speaking && !synth.paused) {
        synth.pause(); setPlayState(false);
      } else if (synth && synth.paused) {
        synth.resume(); setPlayState(true);
      } else {
        readCurrentSlide();
      }
    }
  }

  function stop() {
    stopAudio();
    if (synth) { synth.cancel(); stopKeepAlive(); }
    setPlayState(false);
  }

  function setRate(r) {
    rate = parseFloat(r);
    localStorage.setItem('fda_tts_rate', rate);
    updateRateButtons();
    if (provider !== 'browser' && currentAudio) {
      currentAudio.playbackRate = rate;
    }
  }

  function toggleAutoPlay() {
    autoPlay = !autoPlay;
    const btn = document.getElementById('auto-play-btn');
    if (!btn) return;
    btn.classList.toggle('active', autoPlay);
    btn.querySelector('.ap-label').textContent = autoPlay ? 'Auto ON' : 'Auto';
    btn.title = autoPlay ? 'Auto-read enabled' : 'Enable auto-read';
    showToast(autoPlay ? 'Auto-read enabled' : 'Auto-read off');
  }

  function toggleSettings() {
    const panel = document.getElementById('audio-settings-panel');
    if (!panel) return;
    const open = panel.classList.toggle('open');
    document.getElementById('audio-settings-btn')?.classList.toggle('active', open);
  }

  // ── Integration hook ──────────────────────────────────────
  function onSlideChange(index) {
    slideIdx = index;
    stop();
    if (autoPlay) setTimeout(readCurrentSlide, 350);
  }

  // ── Settings UI ───────────────────────────────────────────
  function setProvider(p) {
    provider = p;
    localStorage.setItem('fda_tts_provider', p);
    apiKey = getKey(p);                              // load this provider's saved key
    selectedVoiceId = PROVIDERS[p]?.defaultVoice || '';
    localStorage.setItem('fda_tts_voice', selectedVoiceId);
    renderVoiceSelect();
    updateKeyHint();
    stop();
    audioCache.clear();
  }

  function saveApiKey() {
    const input = document.getElementById('api-key-input');
    const val   = input ? input.value.trim() : '';
    if (!val || val.startsWith('•')) return;         // ignore masked placeholder
    apiKey = val;
    setKey(provider, apiKey);
    audioCache.clear();
    showToast('Key saved ✓');
    updateKeyHint();
  }

  function setVoice(id) {
    selectedVoiceId = id;
    localStorage.setItem('fda_tts_voice', id);
    // Update browser voice separately
    if (provider === 'browser') {
      browserVoice = browserVoices.find(v => v.name === id) || browserVoice;
    }
    audioCache.clear();
  }

  function renderProviderSelect() {
    const sel = document.getElementById('provider-select');
    if (!sel) return;
    sel.value = provider;
    updateKeyHint();
  }

  function renderVoiceSelect() {
    const sel = document.getElementById('voice-select');
    if (!sel) return;

    if (provider === 'browser') {
      sel.innerHTML = browserVoices.map(v =>
        `<option value="${v.name}" ${browserVoice && v.name === browserVoice.name ? 'selected' : ''}>${v.name}</option>`
      ).join('') || '<option>Loading…</option>';
    } else {
      const voices = PROVIDERS[provider]?.voices || [];
      sel.innerHTML = voices.map(v =>
        `<option value="${v.id}" ${v.id === selectedVoiceId ? 'selected' : ''}>${v.label}</option>`
      ).join('');
    }
  }

  function updateKeyHint() {
    const row  = document.getElementById('api-key-row');
    const hint = document.getElementById('provider-hint');
    if (!row || !hint) return;

    const hints = {
      huggingface: {
        show: true,
        html: '🆓 Completely free &amp; unlimited. Sign up at <strong>huggingface.co</strong> → Settings → Access Tokens → New token (read scope). Kokoro-82M sounds very natural.',
      },
      elevenlabs: {
        show: true,
        html: 'Free tier: 10,000 chars/month, no credit card. Get your key at <strong>elevenlabs.io</strong> → Profile → API Key.',
      },
      openai: {
        show: true,
        html: 'Pay-as-you-go (~$0.03/1K chars). Get your key at <strong>platform.openai.com</strong> → API Keys.',
      },
      browser: {
        show: false,
        html: 'Using your browser\'s built-in voice. Choose Hugging Face above for free human-quality narration.',
      },
    };

    const cfg = hints[provider] || hints.browser;
    row.style.display  = cfg.show ? 'flex' : 'none';
    hint.style.display = 'block';
    hint.innerHTML     = cfg.html;

    // Show masked placeholder if a key is already saved, otherwise clear
    const input = document.getElementById('api-key-input');
    if (input) input.value = apiKey ? '••••••••••••••••' : '';
  }

  function updateRateButtons() {
    document.querySelectorAll('.rate-btn, .rate-btn-lg').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.rate) === rate);
    });
    const label = document.getElementById('rate-label');
    if (label) label.textContent = rate === 1 ? '1×' : rate + '×';
  }

  // ── UI state helpers ──────────────────────────────────────
  function setPlayState(isPlaying) {
    playing = isPlaying;
    const btn      = document.getElementById('audio-play-btn');
    const waveform = document.getElementById('audio-waveform');
    const statusTx = document.getElementById('audio-status-text');
    if (!btn) return;

    if (isPlaying) {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`;
      btn.title = 'Pause narration';
      waveform?.classList.add('playing');
      if (statusTx) statusTx.textContent = 'Narrating…';
    } else {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
      btn.title = 'Play narration';
      waveform?.classList.remove('playing');
      if (statusTx) statusTx.textContent = getProviderLabel();
    }
  }

  function setLoadingState(loading) {
    const btn = document.getElementById('audio-play-btn');
    const statusTx = document.getElementById('audio-status-text');
    if (!btn) return;
    if (loading) {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
      if (statusTx) statusTx.textContent = 'Generating…';
    }
  }

  function getProviderLabel() {
    if (provider === 'huggingface') return 'Kokoro AI';
    if (provider === 'elevenlabs')  return 'ElevenLabs AI';
    if (provider === 'openai')      return 'OpenAI TTS';
    return 'Audio Guide';
  }

  function showToast(msg) {
    const t = document.getElementById('audio-toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  return {
    init, toggle, stop,
    setRate, setVoice, setProvider, saveApiKey,
    toggleAutoPlay, toggleSettings,
    onSlideChange, readCurrentSlide
  };

})();
