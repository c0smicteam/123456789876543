/* ============================================================
   HALLO DEUTSCH 2.0 — Page Renderers
   ============================================================ */

// ── Dashboard Page ──
function renderDashboard() {
  const s = Store.get();
  const acc = Store.getAccuracy();

  // Get first incomplete lesson
  const curriculum = window.CURRICULUM?.A1 || [];
  const nextLesson = curriculum.find(l => !s.completedLessons.includes(l.id));

  return `
  <div class="page-content">
    <div class="container">
      <!-- Welcome -->
      <div class="animate-in" style="margin-bottom:var(--space-xl)">
        <h2>Привет${s.userName ? ', ' + s.userName : ''}! 👋</h2>
        <p>Продолжай учить немецкий — каждый день приближает тебя к цели.</p>
      </div>

      <!-- Stats -->
      <div class="stats-grid animate-in delay-1" style="margin-bottom:var(--space-xl)">
        <div class="stat-card"><div class="stat-card__icon">🔥</div><div class="stat-card__value">${s.streak}</div><div class="stat-card__label">Дней подряд</div></div>
        <div class="stat-card"><div class="stat-card__icon">📚</div><div class="stat-card__value">${s.completedLessons.length}</div><div class="stat-card__label">Уроков</div></div>
        <div class="stat-card"><div class="stat-card__icon">🎯</div><div class="stat-card__value">${acc}%</div><div class="stat-card__label">Точность</div></div>
        <div class="stat-card"><div class="stat-card__icon">💎</div><div class="stat-card__value">${s.gems}</div><div class="stat-card__label">Кристаллы</div></div>
      </div>

      <!-- Continue Learning -->
      ${nextLesson ? `
      <div class="card card-interactive animate-in delay-2" onclick="Router.navigate('/lesson/${nextLesson.id}')" style="margin-bottom:var(--space-xl);border-color:var(--accent-primary);cursor:pointer">
        <div style="display:flex;align-items:center;gap:var(--space-lg)">
          <div class="card-icon primary" style="font-size:2rem;width:56px;height:56px">${nextLesson.icon}</div>
          <div style="flex:1">
            <div style="font-size:0.75rem;font-weight:600;color:var(--accent-primary);text-transform:uppercase">Следующий урок</div>
            <div style="font-size:1.1rem;font-weight:700">${nextLesson.title}</div>
            <div style="font-size:0.85rem;color:var(--text-muted)">${nextLesson.desc}</div>
          </div>
          <span style="font-size:1.5rem">→</span>
        </div>
      </div>` : ''}

      <!-- Level Map -->
      <div class="section-header animate-in delay-3"><span class="section-label">Прогресс</span><h2>Карта уровней 🗺️</h2></div>
      <div class="level-map animate-in delay-4">
        ${['A1','A2','B1','B2','C1'].map(lvl => {
          const prog = Store.getLevelProgress(lvl);
          const isCurrent = s.currentLevel === lvl;
          const isCompleted = prog >= 100;
          return `<div class="level-node ${isCurrent?'active':''} ${isCompleted?'completed':''}">
            <div class="level-circle">${isCompleted?'✓':lvl}</div>
            <div class="level-label">${lvl}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}

// ── Lessons List ──
function renderLessons() {
  const s = Store.get();
  const levels = Object.entries(window.CURRICULUM || {});

  return `
  <div class="page-header"><div class="container">
    <span class="section-label">Обучение</span>
    <h1>Уроки 📚</h1>
    <p>Проходи уроки последовательно — каждый следующий строится на предыдущем</p>
  </div></div>
  <div class="page-content"><div class="container">
    ${levels.map(([level, lessons]) => `
      <div style="margin-bottom:var(--space-2xl)">
        <h2 class="animate-in" style="margin-bottom:var(--space-lg)"><span class="badge badge-${level.toLowerCase()}">${level}</span> Уровень ${level}</h2>
        <div class="lessons-grid">
          ${lessons.map((lesson, i) => {
            const completed = s.completedLessons.includes(lesson.id);
            const status = completed ? 'completed' : 'available';
            const statusText = completed ? '✅ Пройден' : '▶️ Доступен';
            return `
            <div class="lesson-card animate-in" onclick="Router.navigate('/lesson/${lesson.id}')" role="button" tabindex="0" aria-label="${lesson.title}">
              <div class="lesson-card__header">
                <span class="lesson-card__number">${level} · ${lesson.num}</span>
                <span class="badge badge-${status === 'completed' ? 'green' : 'primary'}">${statusText}</span>
              </div>
              <div style="font-size:1.8rem;margin:var(--space-sm) 0">${lesson.icon}</div>
              <div class="lesson-card__title">${lesson.title}</div>
              <div class="lesson-card__desc">${lesson.desc}</div>
              <div class="lesson-card__footer">
                ${completed ? createProgressRing(100, 36, 3, 'var(--accent-green)') : createProgressRing(0, 36, 3)}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    `).join('')}
  </div></div>`;
}

// ── Lesson Detail (NO exercises — exercises moved to Practice page) ──
function renderLesson(params) {
  const lessonId = params.id;
  let lesson = null;
  for (const lessons of Object.values(window.CURRICULUM || {})) {
    lesson = lessons.find(l => l.id === lessonId);
    if (lesson) break;
  }
  if (!lesson) return '<div class="empty-state"><span class="empty-state__icon">🔍</span><h2>Урок не найден</h2></div>';
  if (!lesson.theory) return `<div class="empty-state"><span class="empty-state__icon">🚧</span><h2>${lesson.title}</h2><p>Этот урок ещё в разработке. Скоро он будет доступен!</p><button class="btn btn-primary" onclick="Router.navigate('/lessons')">← К урокам</button></div>`;

  // Store current lesson
  Store.set({ currentLessonId: lessonId });

  return `
  <div class="page-header"><div class="container">
    <span class="section-label">${lesson.id.split('-')[0].toUpperCase()} · Урок ${lesson.num}</span>
    <h1>${lesson.icon} ${lesson.title}</h1>
    <p>${lesson.desc}</p>
  </div></div>
  <div class="page-content"><div class="container">
    <div class="lesson-theory animate-in">
      ${lesson.theory}
    </div>

    ${lesson.words && lesson.words.length ? `
    <div style="margin-top:var(--space-2xl)">
      <h3 class="animate-in delay-1">📖 Словарь урока</h3>
      <div style="display:grid;gap:var(--space-sm);margin-top:var(--space-md)">
        ${lesson.words.map(w => `
        <div class="card-flat animate-in" style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-md) var(--space-lg)">
          <div>
            <strong style="color:${w.article==='der'?'var(--der-color)':w.article==='die'?'var(--die-color)':w.article==='das'?'var(--das-color)':'var(--text-primary)'}">${w.de}</strong>
            <span style="color:var(--text-muted);margin-left:var(--space-sm)">— ${w.ru}</span>
          </div>
          <button class="speak-btn" data-speak="${w.de}" aria-label="Произнести ${w.de}">🔊</button>
        </div>`).join('')}
      </div>
    </div>` : ''}

    <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-2xl);flex-wrap:wrap" class="animate-in delay-2">
      <button class="btn btn-outline" onclick="Router.navigate('/lessons')">← К урокам</button>
      <button class="btn btn-primary" id="completeLessonBtn">✅ Урок пройден</button>
    </div>
  </div></div>`;
}

// ── Onboarding ──
function renderOnboarding() {
  return `
  <div class="onboarding">
    <div class="onboarding-card" id="onboardingCard">
      <div class="onboarding-progress" id="onboardingProgress"></div>
      <div id="onboardingContent"></div>
    </div>
  </div>`;
}

// ── Practice Page with Topic Tabs ──
function renderPractice() {
  // Gather all lessons that have exercises
  const allLessons = [];
  for (const [level, lessons] of Object.entries(window.CURRICULUM || {})) {
    for (const lesson of lessons) {
      if (lesson.exercises && lesson.exercises.length > 0) {
        allLessons.push({ ...lesson, level });
      }
    }
  }

  return `
  <div class="page-header"><div class="container">
    <span class="section-label">Тренировка</span>
    <h1>Упражнения ✍️</h1>
    <p>Выбери тему и проверь свои знания</p>
  </div></div>
  <div class="page-content"><div class="container">
    <!-- Topic tabs -->
    <div class="practice-tabs animate-in" id="practiceTabs">
      ${allLessons.map((lesson, i) => `
        <button class="practice-tab ${i === 0 ? 'active' : ''}" data-lesson-idx="${i}" data-lesson-id="${lesson.id}">
          <span class="practice-tab__icon">${lesson.icon}</span>
          <span class="practice-tab__title">${lesson.title}</span>
        </button>
      `).join('')}
    </div>

    <!-- Exercise area -->
    <div id="practiceExerciseArea" class="animate-in delay-1" style="margin-top:var(--space-xl)">
      ${allLessons.length > 0 ? '<div class="practice-placeholder"><p>Нажми на тему выше, чтобы начать упражнения 👆</p></div>' : '<div class="empty-state"><span class="empty-state__icon">📝</span><h2>Упражнений пока нет</h2></div>'}
    </div>
  </div></div>`;
}

// ── Profile Page ──
function renderProfile() {
  const s = Store.get();
  const achievementsList = {
    first_lesson:'🎓 Первый шаг', five_lessons:'📚 Пять уроков', xp_100:'⚡ 100 XP',
    xp_500:'💪 500 XP', xp_1000:'🏆 1000 XP', streak_3:'🔥 3 дня', streak_7:'📅 Неделя',
    streak_30:'🗓️ Месяц', accuracy_90:'🎯 Снайпер'
  };
  return `
  <div class="page-header"><div class="container">
    <span class="section-label">Профиль</span>
    <h1>Мой профиль 👤</h1>
  </div></div>
  <div class="page-content"><div class="container" style="max-width:700px">
    <div class="card animate-in" style="text-align:center;margin-bottom:var(--space-xl)">
      <div style="font-size:4rem;margin-bottom:var(--space-sm)">🇩🇪</div>
      <h2>${s.userName || 'Ученик'}</h2>
      <div class="badge badge-${s.currentLevel.toLowerCase()}" style="margin-top:var(--space-sm)">Уровень ${s.currentLevel}</div>
      <p style="margin-top:var(--space-md)">Цель: ${s.goal || 'не выбрана'} · ${s.pace} мин/день</p>
    </div>

    <h3 class="animate-in delay-1" style="margin-bottom:var(--space-md)">🏆 Достижения</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--space-sm);margin-bottom:var(--space-xl)">
      ${Object.entries(achievementsList).map(([id, name]) => {
        const earned = s.achievements.includes(id);
        return `<div class="card-flat animate-in" style="text-align:center;padding:var(--space-md);opacity:${earned?1:0.4}">
          <div style="font-size:1.5rem">${name.split(' ')[0]}</div>
          <div style="font-size:0.8rem;font-weight:600;margin-top:4px">${name.split(' ').slice(1).join(' ')}</div>
        </div>`;
      }).join('')}
    </div>

    <div class="animate-in delay-2" style="text-align:center;margin-top:var(--space-xl)">
      <button class="btn btn-outline btn-sm" onclick="if(confirm('Сбросить весь прогресс?')){Store.reset();Router.navigate('/onboarding')}">🗑️ Сбросить прогресс</button>
    </div>
  </div></div>`;
}

window.Pages = { renderDashboard, renderLessons, renderLesson, renderOnboarding, renderPractice, renderProfile };
