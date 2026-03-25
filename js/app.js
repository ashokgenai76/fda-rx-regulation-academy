/**
 * FDA Rx Regulation Academy — Core App Engine
 * Handles navigation, lesson player, progress tracking, and slide rendering.
 */

const App = (() => {
  // ─── State ──────────────────────────────────────────────
  let completedModules = new Set(JSON.parse(localStorage.getItem('fda_completed') || '[]'));
  let currentModuleId = null;
  let currentSlide = 0;

  // ─── Screen Navigation ──────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  function showHome() {
    showScreen('screen-home');
  }

  function showCourseMap() {
    if (typeof AudioGuide !== 'undefined') AudioGuide.stop();
    renderModulesGrid();
    updateGlobalProgress();
    showScreen('screen-map');

    // Check if all modules are complete
    if (completedModules.size === COURSE_MODULES.length) {
      setTimeout(showCompletionScreen, 400);
    }
  }

  function showCompletionScreen() {
    document.getElementById('cert-modules').textContent =
      `${COURSE_MODULES.length} Modules Completed · ${COURSE_MODULES.reduce((acc, m) => acc + m.quiz.length, 0)} Quiz Questions`;
    document.getElementById('cert-date').textContent =
      `Completed: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    showScreen('screen-complete');
  }

  // ─── Module Grid ────────────────────────────────────────
  function renderModulesGrid() {
    const grid = document.getElementById('modules-grid');
    grid.innerHTML = COURSE_MODULES.map((mod, index) => {
      const done = completedModules.has(mod.id);
      const locked = false; // All modules unlocked in this version

      return `
        <div class="module-card ${done ? 'completed' : ''} ${locked ? 'locked' : ''}"
             onclick="${locked ? '' : `App.openModule(${mod.id})`}"
             style="animation-delay: ${index * 60}ms;">
          <div class="module-card-accent" style="background: linear-gradient(90deg, ${mod.color}, ${lightenColor(mod.color)});"></div>
          <div class="module-number" style="color:${mod.color}">MODULE ${mod.id}</div>
          <div class="module-icon" style="background:${hexToRgba(mod.color, 0.12)}; color:${mod.color};">
            ${mod.icon}
          </div>
          <h3>${mod.title}</h3>
          <p>${mod.description}</p>
          <div class="module-meta">
            <span class="module-slides-count">${mod.slides.length} slides · ${mod.quiz.length} questions</span>
            <div class="module-status ${done ? 'done' : locked ? 'locked-badge' : 'ready'}">
              <div class="status-dot"></div>
              ${done ? 'Completed' : locked ? 'Locked' : 'Start'}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ─── Module / Lesson Player ─────────────────────────────
  function openModule(moduleId) {
    const mod = COURSE_MODULES.find(m => m.id === moduleId);
    if (!mod) return;

    currentModuleId = moduleId;
    currentSlide = 0;

    document.getElementById('lesson-module-label').textContent = `Module ${mod.id}`;
    document.getElementById('lesson-title').textContent = mod.title;

    renderSlides(mod);
    renderDots(mod.slides.length);
    updateSlideUI(mod.slides.length);
    showScreen('screen-lesson');
  }

  function renderSlides(mod) {
    const container = document.getElementById('slide-container');
    container.innerHTML = mod.slides.map((slide, i) => buildSlideHTML(slide, i)).join('');
  }

  function buildSlideHTML(slide, index) {
    if (slide.type === 'hero') {
      return `
        <div class="slide slide-hero" data-index="${index}">
          <div class="hero-icon">${slide.icon}</div>
          <div class="module-num">${slide.moduleNum}</div>
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
          <div class="hero-tags">
            ${slide.tags.map(t => `<span class="hero-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="slide slide-content" data-index="${index}">
        <div class="slide-label">${slide.label || ''}</div>
        <h2>${slide.title}</h2>
        ${slide.body || ''}
      </div>
    `;
  }

  function renderDots(count) {
    const dotsEl = document.getElementById('slide-dots');
    dotsEl.innerHTML = Array.from({ length: count }, (_, i) =>
      `<div class="dot ${i === 0 ? 'active' : ''}" onclick="App.goToSlide(${i})"></div>`
    ).join('');
  }

  function updateSlideUI(totalSlides) {
    // Move slide container
    const container = document.getElementById('slide-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Reset scroll to top for the new slide
    const wrapper = document.getElementById('slide-wrapper');
    if (wrapper) wrapper.scrollTop = 0;

    // Update counters
    document.getElementById('slide-current').textContent = currentSlide + 1;
    document.getElementById('slide-total').textContent = totalSlides;

    // Progress bar
    const pct = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 100;
    document.getElementById('lesson-progress-fill').style.width = `${pct}%`;

    // Dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
      dot.classList.toggle('visited', i < currentSlide);
    });

    // Buttons
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    prevBtn.disabled = currentSlide === 0;

    const isLast = currentSlide === totalSlides - 1;
    if (isLast) {
      nextBtn.innerHTML = `Take Quiz <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
      nextBtn.style.background = 'linear-gradient(90deg, #10b981, #059669)';
    } else {
      nextBtn.innerHTML = `Next <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      nextBtn.style.background = 'linear-gradient(90deg, var(--primary), var(--accent))';
    }

    // ── Notify AudioGuide of slide change ──
    if (typeof AudioGuide !== 'undefined') {
      AudioGuide.onSlideChange(currentSlide);
    }
  }

  function nextSlide() {
    const mod = COURSE_MODULES.find(m => m.id === currentModuleId);
    if (!mod) return;

    if (currentSlide === mod.slides.length - 1) {
      // Last slide — go to quiz
      Quiz.startQuiz(currentModuleId);
      return;
    }

    currentSlide++;
    updateSlideUI(mod.slides.length);
  }

  function prevSlide() {
    if (currentSlide === 0) return;
    currentSlide--;
    const mod = COURSE_MODULES.find(m => m.id === currentModuleId);
    if (mod) updateSlideUI(mod.slides.length);
  }

  function goToSlide(index) {
    const mod = COURSE_MODULES.find(m => m.id === currentModuleId);
    if (!mod) return;
    currentSlide = index;
    updateSlideUI(mod.slides.length);
  }

  // ─── Progress ───────────────────────────────────────────
  function markModuleComplete(moduleId) {
    completedModules.add(moduleId);
    localStorage.setItem('fda_completed', JSON.stringify([...completedModules]));
    updateGlobalProgress();
  }

  function updateGlobalProgress() {
    const total = COURSE_MODULES.length;
    const done = completedModules.size;
    const pct = Math.round((done / total) * 100);

    const progressText = document.getElementById('global-progress-text');
    const progressBar = document.getElementById('global-progress-bar');
    if (progressText) progressText.textContent = `${pct}% Complete`;
    if (progressBar) progressBar.style.width = `${pct}%`;
  }

  // ─── Color Utilities ────────────────────────────────────
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function lightenColor(hex) {
    const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + 40);
    const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + 40);
    const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + 40);
    return `rgb(${r},${g},${b})`;
  }

  // ─── Init ───────────────────────────────────────────────
  function init() {
    updateGlobalProgress();
    if (typeof AudioGuide !== 'undefined') AudioGuide.init();
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    showHome,
    showCourseMap,
    showScreen,
    openModule,
    nextSlide,
    prevSlide,
    goToSlide,
    markModuleComplete
  };
})();
