/* ============================================================
   HALLO DEUTSCH 2.0 — State Store
   Reactive state management with localStorage persistence
   ============================================================ */

const Store = {
  _listeners: {},
  _state: null,
  STORAGE_KEY: 'halloDeutsch_v2',

  getDefaultState() {
    return {
      // User
      onboarded: false,
      userName: '',
      goal: '',
      pace: 10,
      currentLevel: 'A1',
      theme: 'light',

      // Progress
      xp: 0,
      level: 1,
      streak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      gems: 50,
      streakFreezes: 1,

      // Lessons
      completedLessons: [],
      lessonProgress: {},
      currentLessonId: null,

      // Exercises
      totalExercises: 0,
      totalCorrect: 0,
      exerciseScores: {},

      // Vocabulary
      favoriteWords: [],
      learnedWords: [],

      // Flashcards SM-2
      flashcardProgress: {},

      // Achievements
      achievements: [],

      // Daily
      dailyXpGoal: 30,
      dailyXpEarned: 0,
      dailyDate: null,
      dailyTasksCompleted: [],

      // Tests
      completedTests: [],

      // Timestamps
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
  },

  init() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this._state = { ...this.getDefaultState(), ...JSON.parse(stored) };
      } else {
        this._state = this.getDefaultState();
      }
    } catch {
      this._state = this.getDefaultState();
    }
    this._checkDailyReset();
    this._checkStreak();
    return this._state;
  },

  get(key) {
    if (!this._state) this.init();
    return key ? this._state[key] : { ...this._state };
  },

  set(updates) {
    if (!this._state) this.init();
    const prev = { ...this._state };
    Object.assign(this._state, updates);
    this._state.lastUpdated = new Date().toISOString();
    this._save();
    // Notify listeners
    for (const key of Object.keys(updates)) {
      if (this._listeners[key]) {
        this._listeners[key].forEach(fn => fn(this._state[key], prev[key]));
      }
    }
    if (this._listeners['*']) {
      this._listeners['*'].forEach(fn => fn(this._state, prev));
    }
  },

  on(key, fn) {
    if (!this._listeners[key]) this._listeners[key] = [];
    this._listeners[key].push(fn);
    return () => {
      this._listeners[key] = this._listeners[key].filter(f => f !== fn);
    };
  },

  _save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._state));
    } catch (e) {
      console.warn('Store: save failed', e);
    }
  },

  _checkDailyReset() {
    const today = new Date().toISOString().split('T')[0];
    if (this._state.dailyDate !== today) {
      this._state.dailyXpEarned = 0;
      this._state.dailyTasksCompleted = [];
      this._state.dailyDate = today;
    }
  },

  _checkStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this._state.lastActiveDate;
    if (!last) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last !== today && last !== yesterday) {
      if (this._state.streakFreezes > 0) {
        this._state.streakFreezes--;
      } else {
        this._state.streak = 0;
      }
    }
  },

  // ── XP ──
  addXP(amount, source = 'unknown') {
    const s = this._state;
    s.xp += amount;
    s.dailyXpEarned += amount;
    s.level = this._calcLevel(s.xp);
    this._updateActiveDate();
    this._save();
    this._notify('xp', { amount, total: s.xp, source });
    window.dispatchEvent(new CustomEvent('hd:xp', { detail: { amount, total: s.xp, source } }));
    this._checkAchievements();
    return s.xp;
  },

  _calcLevel(xp) {
    const t = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500, 5000, 7000, 10000, 15000];
    let level = 1;
    for (let i = 0; i < t.length; i++) { if (xp >= t[i]) level = i + 1; }
    return level;
  },

  getXPProgress() {
    const t = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500, 5000, 7000, 10000, 15000];
    const s = this._state;
    const ci = Math.max(0, s.level - 1);
    const ni = Math.min(s.level, t.length - 1);
    const range = t[ni] - t[ci];
    return range > 0 ? Math.min(1, (s.xp - t[ci]) / range) : 1;
  },

  getXPForNextLevel() {
    const t = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500, 5000, 7000, 10000, 15000];
    return t[Math.min(this._state.level, t.length - 1)];
  },

  // ── Streak ──
  _updateActiveDate() {
    const today = new Date().toISOString().split('T')[0];
    const s = this._state;
    if (s.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      s.streak = (s.lastActiveDate === yesterday || !s.lastActiveDate) ? s.streak + 1 : 1;
      if (s.streak > s.longestStreak) s.longestStreak = s.streak;
      s.lastActiveDate = today;
    }
  },

  // ── Lessons ──
  completeLesson(lessonId) {
    const s = this._state;
    if (!s.completedLessons.includes(lessonId)) {
      s.completedLessons.push(lessonId);
      this.addXP(25, `lesson:${lessonId}`);
      return true;
    }
    return false;
  },

  isLessonCompleted(id) { return this._state.completedLessons.includes(id); },

  // ── Exercises ──
  recordExercise(id, correct, total) {
    const s = this._state;
    s.totalExercises += total;
    s.totalCorrect += correct;
    s.exerciseScores[id] = { correct, total, pct: Math.round(correct / total * 100), date: new Date().toISOString() };
    this.addXP(correct * 5, `exercise:${id}`);
  },

  getAccuracy() {
    const s = this._state;
    return s.totalExercises === 0 ? 0 : Math.round(s.totalCorrect / s.totalExercises * 100);
  },

  // ── Flashcards SM-2 ──
  recordFlashcard(cardId, quality) {
    const s = this._state;
    if (!s.flashcardProgress[cardId]) {
      s.flashcardProgress[cardId] = { rep: 0, interval: 1, ef: 2.5, lastReview: Date.now() };
    }
    const item = s.flashcardProgress[cardId];
    item.lastReview = Date.now();
    let ef = item.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ef < 1.3) ef = 1.3;
    item.ef = ef;
    if (quality < 3) { item.rep = 0; item.interval = 1; }
    else {
      item.interval = item.rep === 0 ? 1 : item.rep === 1 ? 4 : Math.round(item.interval * item.ef);
      item.rep++;
    }
    this._save();
    if (quality >= 3) this.addXP(quality, 'flashcard');
  },

  isCardDue(cardId) {
    const item = this._state.flashcardProgress[cardId];
    if (!item) return true;
    return Date.now() >= item.lastReview + item.interval * 86400000;
  },

  // ── Tests ──
  completeTest(testId, score, total) {
    const result = { testId, score, total, pct: Math.round(score / total * 100), date: new Date().toISOString() };
    this._state.completedTests.push(result);
    this.addXP(Math.round(score / total * 50), `test:${testId}`);
    this._save();
    return result;
  },

  // ── Achievements ──
  _checkAchievements() {
    const s = this._state;
    const checks = [
      ['first_lesson', () => s.completedLessons.length >= 1],
      ['five_lessons', () => s.completedLessons.length >= 5],
      ['xp_100', () => s.xp >= 100],
      ['xp_500', () => s.xp >= 500],
      ['xp_1000', () => s.xp >= 1000],
      ['streak_3', () => s.streak >= 3],
      ['streak_7', () => s.streak >= 7],
      ['streak_30', () => s.streak >= 30],
      ['accuracy_90', () => this.getAccuracy() >= 90 && s.totalExercises >= 20],
    ];
    checks.forEach(([id, cond]) => {
      if (!s.achievements.includes(id) && cond()) {
        s.achievements.push(id);
        window.dispatchEvent(new CustomEvent('hd:achievement', { detail: { id } }));
      }
    });
  },

  _notify(type, detail) {
    if (this._listeners[type]) {
      this._listeners[type].forEach(fn => fn(detail));
    }
  },

  // ── Reset ──
  reset() {
    this._state = this.getDefaultState();
    this._save();
  },

  // ── Level Progress ──
  getLevelProgress(germanLevel) {
    const counts = { A1: 20, A2: 8, B1: 4 };
    const total = counts[germanLevel] || 0;
    if (!total) return 0;
    const done = this._state.completedLessons.filter(id => id.startsWith(germanLevel.toLowerCase())).length;
    return Math.round(done / total * 100);
  }
};

// Auto-init
Store.init();
window.Store = Store;
