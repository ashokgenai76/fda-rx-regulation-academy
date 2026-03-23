/**
 * FDA Rx Regulation Academy — Quiz Engine
 */

const Quiz = (() => {
  let currentModule = null;
  let questions = [];
  let currentQ = 0;
  let score = 0;
  let answered = false;

  function startQuiz(moduleId) {
    currentModule = COURSE_MODULES.find(m => m.id === moduleId);
    if (!currentModule || !currentModule.quiz || currentModule.quiz.length === 0) return;

    questions = currentModule.quiz;
    currentQ = 0;
    score = 0;
    answered = false;

    document.getElementById('quiz-module-label').textContent = `Module ${currentModule.id}: ${currentModule.title}`;
    updateScoreBadge();
    App.showScreen('screen-quiz');
    renderQuestion();
  }

  function renderQuestion() {
    if (currentQ >= questions.length) {
      renderResults();
      return;
    }

    answered = false;
    const q = questions[currentQ];
    const letters = ['A', 'B', 'C', 'D'];

    const html = `
      <div class="question-card">
        <div class="question-num">Question ${currentQ + 1} of ${questions.length}</div>
        <div class="question-text">${q.q}</div>
        <div class="answer-options">
          ${q.options.map((opt, i) => `
            <div class="answer-option" onclick="Quiz.selectAnswer(${i})" id="opt-${i}">
              <div class="answer-letter">${letters[i]}</div>
              <div class="answer-text">${opt}</div>
            </div>
          `).join('')}
        </div>
        <div id="feedback-container"></div>
        <div class="quiz-footer" id="quiz-footer" style="display:none;">
          <button class="btn-quiz-next" onclick="Quiz.nextQuestion()">
            ${currentQ + 1 < questions.length ? 'Next Question' : 'See Results'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;

    document.getElementById('quiz-body').innerHTML = html;
  }

  function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const q = questions[currentQ];
    const isCorrect = index === q.correct;
    if (isCorrect) score++;

    updateScoreBadge();

    // Style all options
    const options = document.querySelectorAll('.answer-option');
    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) {
        opt.classList.add('correct');
      } else if (i === index && !isCorrect) {
        opt.classList.add('wrong');
      }
    });

    // Show feedback
    const feedback = document.getElementById('feedback-container');
    feedback.innerHTML = `
      <div class="feedback-box ${isCorrect ? 'correct-fb' : 'wrong-fb'}">
        <strong>${isCorrect ? '✓ Correct!' : '✗ Not Quite'}</strong>
        <p>${q.explanation}</p>
        ${q.ref ? `<div class="cfr-ref">📌 ${q.ref}</div>` : ''}
      </div>
    `;

    document.getElementById('quiz-footer').style.display = 'flex';
  }

  function nextQuestion() {
    currentQ++;
    renderQuestion();
  }

  function renderResults() {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 70;

    const html = `
      <div class="quiz-results">
        <div class="results-score">
          <div class="score-num">${pct}%</div>
          <div class="score-label">Score</div>
        </div>
        <h2>${passed ? '🎉 Great Job!' : '📚 Keep Studying'}</h2>
        <p>You answered ${score} out of ${questions.length} questions correctly.</p>
        <div class="results-actions">
          <button class="btn-start" onclick="Quiz.completeModule()">
            ${passed ? 'Complete Module ✓' : 'Continue Anyway →'}
          </button>
          <button class="btn-outline" onclick="Quiz.startQuiz(${currentModule.id})">
            Retry Quiz
          </button>
        </div>
      </div>
    `;

    document.getElementById('quiz-body').innerHTML = html;
  }

  function completeModule() {
    App.markModuleComplete(currentModule.id);
    App.showCourseMap();
  }

  function exitQuiz() {
    App.showCourseMap();
  }

  function updateScoreBadge() {
    const badge = document.getElementById('quiz-score-badge');
    if (badge) badge.textContent = `${score} / ${questions.length}`;
  }

  return { startQuiz, selectAnswer, nextQuestion, completeModule, exitQuiz };
})();
