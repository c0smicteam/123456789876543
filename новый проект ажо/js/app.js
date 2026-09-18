/* ============================================================
   HALLO DEUTSCH 2.0 — Main App
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Init theme
  ThemeManager.init();

  // Init router
  Router.init('app');
  Router.register('/', Pages.renderLessons);
  Router.register('/dashboard', Pages.renderDashboard);
  Router.register('/lessons', Pages.renderLessons);
  Router.register('/lesson/:id', Pages.renderLesson);
  Router.register('/practice', Pages.renderPractice);
  Router.register('/profile', Pages.renderProfile);
  Router.register('/onboarding', Pages.renderOnboarding);
  Router.resolve();

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ── Burger menu ──
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  if (burger && mobileMenu) {
    const toggleMenu = () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      overlay?.classList.toggle('active');
    };
    burger.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu));
  }

  // ── Theme toggle ──
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => ThemeManager.toggle());
  });

  // ── Update nav stats ──
  function updateNavStats() {
    const s = Store.get();
    document.querySelectorAll('.nav-xp-value').forEach(el => el.textContent = s.xp);
    document.querySelectorAll('.nav-streak-value').forEach(el => el.textContent = s.streak);
    document.querySelectorAll('.nav-gems-value').forEach(el => el.textContent = s.gems);
  }
  updateNavStats();
  Store.on('*', updateNavStats);

  // ── Page rendered handler ──
  window.addEventListener('hd:page-rendered', (e) => {
    Speech.initButtons();
    initOnboarding();
    initPracticeExercises();
    initCompleteLessonBtn();
    // Animate in elements
    document.querySelectorAll('.animate-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 60 + i * 60);
    });
  });
});

// ── Onboarding Flow ──
function initOnboarding() {
  const card = document.getElementById('onboardingCard');
  if (!card) return;

  let step = 0;
  const steps = [
    // Step 0: Welcome
    { render: () => `
      <div class="onboarding-icon">🇩🇪</div>
      <h2 class="onboarding-title">Willkommen!</h2>
      <p class="onboarding-subtitle">Добро пожаловать в Hallo Deutsch — платформу для изучения немецкого языка</p>
      <div class="onboarding-nav"><button class="btn btn-primary btn-block" id="obNext">Начать 🚀</button></div>`
    },
    // Step 1: Name
    { render: () => `
      <div class="onboarding-icon">👤</div>
      <h2 class="onboarding-title">Как тебя зовут?</h2>
      <p class="onboarding-subtitle">Мы будем обращаться к тебе по имени</p>
      <div class="input-group"><input class="input-field" id="obName" placeholder="Твоё имя" value="${Store.get('userName')||''}" autofocus></div>
      <div class="onboarding-nav"><button class="btn btn-ghost" id="obBack">← Назад</button><button class="btn btn-primary" id="obNext">Далее →</button></div>`
    },
    // Step 2: Goal
    { render: () => `
      <div class="onboarding-icon">🎯</div>
      <h2 class="onboarding-title">Зачем ты учишь немецкий?</h2>
      <div class="onboarding-options" id="goalOptions">
        ${[['✈️','Для путешествий','Общение в поездках'],['💼','Для работы','Карьера в Германии'],['🏠','Для переезда','Жизнь в Германии'],['📝','Для экзамена','Goethe/TestDaF'],['💡','Для себя','Саморазвитие']].map(([icon,text,desc]) =>
          `<div class="onboarding-option" data-value="${text}"><span class="onboarding-option__icon">${icon}</span><div><div class="onboarding-option__text">${text}</div><div class="onboarding-option__desc">${desc}</div></div></div>`
        ).join('')}
      </div>
      <div class="onboarding-nav"><button class="btn btn-ghost" id="obBack">← Назад</button><button class="btn btn-primary" id="obNext" disabled>Далее →</button></div>`
    },
    // Step 3: Pace
    { render: () => `
      <div class="onboarding-icon">⏱️</div>
      <h2 class="onboarding-title">Сколько времени в день?</h2>
      <p class="onboarding-subtitle">Выбери комфортный темп</p>
      <div class="onboarding-options" id="paceOptions">
        ${[['☕','5 минут','Лёгкий темп',5],['📖','10 минут','Оптимально',10],['🚀','20 минут','Интенсивно',20]].map(([icon,text,desc,val]) =>
          `<div class="onboarding-option" data-value="${val}"><span class="onboarding-option__icon">${icon}</span><div><div class="onboarding-option__text">${text}</div><div class="onboarding-option__desc">${desc}</div></div></div>`
        ).join('')}
      </div>
      <div class="onboarding-nav"><button class="btn btn-ghost" id="obBack">← Назад</button><button class="btn btn-primary" id="obNext" disabled>Далее →</button></div>`
    },
    // Step 4: Ready
    { render: () => {
      const name = Store.get('userName') || 'Друг';
      const goal = Store.get('goal') || '';
      return `
      <div class="onboarding-icon" style="animation:bounceIn 0.8s">🎉</div>
      <h2 class="onboarding-title">Всё готово, ${name}!</h2>
      <p class="onboarding-subtitle">Мы подготовили для тебя персональный план</p>
      <div class="card-flat" style="text-align:left;margin-bottom:var(--space-lg)">
        <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-sm)"><span>🎯</span><span>Цель: <strong>${goal}</strong></span></div>
        <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-sm)"><span>⏱</span><span>Темп: <strong>${Store.get('pace')} мин/день</strong></span></div>
        <div style="display:flex;align-items:center;gap:var(--space-sm)"><span>📚</span><span>Уровень: <strong>A1 — Начало</strong></span></div>
      </div>
      <div class="onboarding-nav"><button class="btn btn-primary btn-block btn-lg" id="obStart">Начать обучение! 🚀</button></div>`;
    }}
  ];

  function renderStep() {
    const progress = document.getElementById('onboardingProgress');
    if (progress) {
      progress.innerHTML = steps.map((_, i) =>
        `<div class="onboarding-dot ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}"></div>`
      ).join('');
    }
    const content = document.getElementById('onboardingContent');
    if (content) {
      content.innerHTML = steps[step].render();
      content.style.animation = 'fadeInScale 0.3s ease';
      bindStepEvents();
    }
  }

  function bindStepEvents() {
    const next = document.getElementById('obNext');
    const back = document.getElementById('obBack');
    const start = document.getElementById('obStart');

    next?.addEventListener('click', () => {
      if (step === 1) Store.set({ userName: document.getElementById('obName')?.value || '' });
      step++;
      if (step < steps.length) renderStep();
    });

    back?.addEventListener('click', () => { if (step > 0) { step--; renderStep(); } });

    start?.addEventListener('click', () => {
      Store.set({ onboarded: true });
      Router.navigate('/lessons');
    });

    // Goal selection
    document.querySelectorAll('#goalOptions .onboarding-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('#goalOptions .onboarding-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        Store.set({ goal: opt.dataset.value });
        if (next) next.disabled = false;
      });
    });

    // Pace selection
    document.querySelectorAll('#paceOptions .onboarding-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('#paceOptions .onboarding-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        Store.set({ pace: parseInt(opt.dataset.value) });
        if (next) next.disabled = false;
      });
    });
  }

  renderStep();
}

// ── Practice Page Exercise Engine ──
function initPracticeExercises() {
  const tabs = document.getElementById('practiceTabs');
  const area = document.getElementById('practiceExerciseArea');
  if (!tabs || !area) return;

  // Gather all lessons with exercises
  const allLessons = [];
  for (const [level, lessons] of Object.entries(window.CURRICULUM || {})) {
    for (const lesson of lessons) {
      if (lesson.exercises && lesson.exercises.length > 0) {
        allLessons.push({ ...lesson, level });
      }
    }
  }
  if (!allLessons.length) return;

  // Tab click handler
  tabs.querySelectorAll('.practice-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.querySelectorAll('.practice-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const idx = parseInt(tab.dataset.lessonIdx);
      const lesson = allLessons[idx];
      if (lesson) {
        startPracticeExercises(lesson, area);
      }
    });
  });

  // Auto-start first topic
  if (allLessons.length > 0) {
    startPracticeExercises(allLessons[0], area);
  }
}

function startPracticeExercises(lesson, area) {
  let current = 0;
  let score = 0;

  function renderExercise() {
    if (current >= lesson.exercises.length) {
      showResults();
      return;
    }
    const ex = lesson.exercises[current];
    const total = lesson.exercises.length;

    let html = `
      <div class="exercise-container" style="animation:fadeInScale 0.3s ease">
        <div class="practice-topic-header">
          <span class="practice-topic-icon">${lesson.icon}</span>
          <span class="practice-topic-name">${lesson.title}</span>
        </div>
        <div class="progress-bar" style="margin-bottom:var(--space-lg)">
          <div class="progress-bar__fill" style="width:${current/total*100}%"></div>
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:var(--space-md)">${current+1} из ${total}</div>`;

    if (ex.type === 'quiz') {
      html += `<div class="exercise-question">${ex.question}</div><div class="quiz-options">
        ${ex.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt}</button>`).join('')}
      </div>`;
    } else if (ex.type === 'fill') {
      html += `<div class="exercise-question">${ex.sentence.replace('___', `<input class="fill-blank__input" id="fillInput" placeholder="..." autofocus>`)}</div>
        ${ex.hint ? `<div style="font-size:0.8rem;color:var(--text-muted);text-align:center">Подсказка: ${ex.hint}</div>` : ''}
        <div style="text-align:center;margin-top:var(--space-md)"><button class="btn btn-primary" id="fillCheck">Проверить</button></div>`;
    } else if (ex.type === 'matching') {
      const left = ex.pairs.map(p => p[0]);
      const right = [...ex.pairs.map(p => p[1])].sort(() => Math.random() - 0.5);
      html += `<div class="exercise-question">Соедините пары</div>
        <div class="matching-grid">
          <div class="matching-column">${left.map((l,i) => `<div class="matching-item" data-side="left" data-idx="${i}">${l}</div>`).join('')}</div>
          <div class="matching-column">${right.map((r,i) => `<div class="matching-item" data-side="right" data-value="${r}" data-idx="${i}">${r}</div>`).join('')}</div>
        </div>`;
    } else if (ex.type === 'reorder') {
      const shuffled = [...ex.words].sort(() => Math.random() - 0.5);
      html += `<div class="exercise-question">Составьте предложение</div>
        <div class="reorder-zone" id="reorderTarget"></div>
        <div class="reorder-source" id="reorderSource">${shuffled.map((w,i) => `<span class="reorder-word" data-idx="${i}">${w}</span>`).join('')}</div>
        <div style="text-align:center;margin-top:var(--space-md)"><button class="btn btn-primary" id="reorderCheck">Проверить</button></div>`;
    }

    html += `<div id="exResult"></div></div>`;
    area.innerHTML = html;
    bindExerciseEvents(ex);
  }

  function bindExerciseEvents(ex) {
    if (ex.type === 'quiz') {
      area.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx);
          area.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
          if (idx === ex.correct) {
            btn.classList.add('correct');
            score++;
            Store.addXP(5, 'exercise');
            showFeedback(true);
          } else {
            btn.classList.add('wrong');
            area.querySelectorAll('.quiz-option')[ex.correct]?.classList.add('correct');
            showFeedback(false, ex.options[ex.correct]);
          }
        });
      });
    } else if (ex.type === 'fill') {
      const check = document.getElementById('fillCheck');
      const input = document.getElementById('fillInput');
      check?.addEventListener('click', () => {
        const val = input?.value?.trim().toLowerCase();
        const answers = ex.answer.toLowerCase().split('|');
        if (answers.includes(val)) {
          input.classList.add('correct');
          score++;
          Store.addXP(5, 'exercise');
          showFeedback(true);
        } else {
          input.classList.add('wrong');
          showFeedback(false, ex.answer);
        }
      });
      input?.addEventListener('keydown', e => { if (e.key === 'Enter') check?.click(); });
    } else if (ex.type === 'matching') {
      let selectedLeft = null;
      let matched = 0;
      area.querySelectorAll('.matching-item').forEach(item => {
        item.addEventListener('click', () => {
          if (item.classList.contains('matched')) return;
          if (item.dataset.side === 'left') {
            area.querySelectorAll('.matching-item[data-side="left"]').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            selectedLeft = item;
          } else if (selectedLeft) {
            const leftIdx = parseInt(selectedLeft.dataset.idx);
            const rightVal = item.dataset.value;
            if (ex.pairs[leftIdx][1] === rightVal) {
              selectedLeft.classList.add('matched');
              item.classList.add('matched');
              selectedLeft.classList.remove('selected');
              matched++;
              if (matched === ex.pairs.length) {
                score++;
                Store.addXP(10, 'matching');
                showFeedback(true);
              }
              selectedLeft = null;
            } else {
              item.classList.add('wrong-flash');
              setTimeout(() => { item.classList.remove('wrong-flash'); selectedLeft?.classList.remove('selected'); selectedLeft = null; }, 500);
            }
          }
        });
      });
    } else if (ex.type === 'reorder') {
      const source = document.getElementById('reorderSource');
      const target = document.getElementById('reorderTarget');
      source?.querySelectorAll('.reorder-word').forEach(w => {
        w.addEventListener('click', () => {
          if (w.classList.contains('used')) return;
          w.classList.add('used');
          const placed = document.createElement('span');
          placed.className = 'reorder-word placed';
          placed.textContent = w.textContent;
          placed.addEventListener('click', () => { placed.remove(); w.classList.remove('used'); });
          target?.appendChild(placed);
        });
      });
      document.getElementById('reorderCheck')?.addEventListener('click', () => {
        const answer = Array.from(target.querySelectorAll('.reorder-word')).map(w => w.textContent.trim()).join(' ');
        if (answer.toLowerCase() === ex.answer.toLowerCase()) {
          score++;
          Store.addXP(10, 'reorder');
          showFeedback(true);
        } else {
          showFeedback(false, ex.answer);
        }
      });
    }
  }

  function showFeedback(correct, correctAnswer) {
    const result = document.getElementById('exResult');
    if (result) {
      result.innerHTML = `
        <div class="exercise-result ${correct ? 'correct' : 'wrong'}">
          <span class="exercise-result__icon">${correct ? '🎉' : '😕'}</span>
          <div class="exercise-result__text">${correct ? 'Правильно!' : 'Неправильно'}</div>
          ${!correct && correctAnswer ? `<div class="exercise-result__explanation">Правильный ответ: <strong>${correctAnswer}</strong></div>` : ''}
          <button class="btn ${correct ? 'btn-success' : 'btn-primary'}" style="margin-top:var(--space-md)" id="exNext">Далее →</button>
        </div>`;
      document.getElementById('exNext')?.addEventListener('click', () => { current++; renderExercise(); });
    }
  }

  function showResults() {
    const pct = Math.round(score / lesson.exercises.length * 100);
    Store.recordExercise(lesson.id, score, lesson.exercises.length);
    area.innerHTML = `
      <div class="completion-screen">
        <span class="completion-screen__emoji">${pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</span>
        <h2 class="completion-screen__title">Упражнения завершены!</h2>
        <div class="completion-screen__stats">
          <div class="completion-stat"><div class="completion-stat__value">${score}/${lesson.exercises.length}</div><div class="completion-stat__label">Правильно</div></div>
          <div class="completion-stat"><div class="completion-stat__value">${pct}%</div><div class="completion-stat__label">Точность</div></div>
        </div>
        <button class="btn btn-primary" style="margin-top:var(--space-lg)" onclick="startPracticeExercises(window._currentPracticeLesson, document.getElementById('practiceExerciseArea'))">🔄 Повторить</button>
      </div>`;
  }

  // Store reference for retry button
  window._currentPracticeLesson = lesson;
  renderExercise();
}

// ── Complete Lesson Button ──
function initCompleteLessonBtn() {
  const btn = document.getElementById('completeLessonBtn');
  if (!btn) return;
  const lessonId = Store.get('currentLessonId');
  if (Store.isLessonCompleted(lessonId)) {
    btn.textContent = '✅ Урок пройден';
    btn.disabled = true;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
    return;
  }
  btn.addEventListener('click', () => {
    Store.completeLesson(lessonId);
    btn.textContent = '✅ Урок пройден! +25 XP';
    btn.disabled = true;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
    Toast.success('Урок завершён!');
  });
}
