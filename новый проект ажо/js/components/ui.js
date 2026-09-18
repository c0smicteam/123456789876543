/* ============================================================
   HALLO DEUTSCH 2.0 — UI Components
   Toast, ProgressRing, Modal, Theme, Speech
   ============================================================ */

// ── Toast System ──
const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      this.container.setAttribute('role', 'status');
      this.container.setAttribute('aria-live', 'polite');
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 2500) {
    this.init();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { xp: '⚡', success: '✅', error: '❌', info: 'ℹ️', achievement: '🏆', streak: '🔥' };
    toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  xp(amount) { this.show(`+${amount} XP`, 'xp', 2000); },
  success(msg) { this.show(msg, 'success'); },
  error(msg) { this.show(msg, 'error'); },
  achievement(name) { this.show(`🏆 Достижение: ${name}`, 'achievement', 4000); }
};

// ── Progress Ring ──
function createProgressRing(percent, size = 60, strokeWidth = 5, color = 'var(--accent-primary)') {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return `
    <div class="progress-ring" style="width:${size}px;height:${size}px">
      <svg width="${size}" height="${size}">
        <circle class="progress-ring__bg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${strokeWidth}"/>
        <circle class="progress-ring__fill" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${strokeWidth}"
          stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
          style="--circumference:${c};--dash-offset:${offset}"/>
      </svg>
      <span class="progress-ring__text" style="font-size:${size*0.22}px">${percent}%</span>
    </div>`;
}

// ── Theme Manager ──
const ThemeManager = {
  init() {
    const theme = Store.get('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.apply(theme);
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    Store.set({ theme });
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  },

  toggle() {
    const current = Store.get('theme');
    this.apply(current === 'dark' ? 'light' : 'dark');
  }
};

// ── Speech (TTS) ──
const Speech = {
  speak(text, lang = 'de-DE', rate = 0.85) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    // Try to find a German voice
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de'));
    if (deVoice) u.voice = deVoice;
    window.speechSynthesis.speak(u);
    return u;
  },

  initButtons(container = document) {
    container.querySelectorAll('.speak-btn, [data-speak]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = btn.dataset.speak || btn.textContent;
        if (text) {
          btn.classList.add('speaking');
          const u = this.speak(text);
          if (u) u.onend = () => btn.classList.remove('speaking');
          else setTimeout(() => btn.classList.remove('speaking'), 1500);
        }
      });
    });
  }
};

// Preload voices
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ── Modal ──
const Modal = {
  show(content, options = {}) {
    const existing = document.querySelector('.modal-backdrop');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop active';
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        ${options.title ? `<div class="modal-header"><h3>${options.title}</h3><button class="modal-close" aria-label="Закрыть">✕</button></div>` : '<div style="text-align:right"><button class="modal-close" aria-label="Закрыть">✕</button></div>'}
        <div class="modal-body">${content}</div>
      </div>`;

    const close = () => backdrop.remove();
    backdrop.querySelector('.modal-close').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', handler); }
    });

    document.body.appendChild(backdrop);
    return { close, element: backdrop };
  }
};

// ── XP listener ──
window.addEventListener('hd:xp', (e) => {
  Toast.xp(e.detail.amount);
  // Update nav XP display
  const xpEl = document.querySelector('.nav-xp-value');
  if (xpEl) xpEl.textContent = e.detail.total;
  const streakEl = document.querySelector('.nav-streak-value');
  if (streakEl) streakEl.textContent = Store.get('streak');
});

// Achievement listener
const achievementNames = {
  first_lesson: 'Первый шаг', five_lessons: 'Пять уроков', xp_100: '100 XP',
  xp_500: '500 XP', xp_1000: '1000 XP', streak_3: '3 дня подряд',
  streak_7: 'Неделя!', streak_30: 'Месяц!', accuracy_90: 'Снайпер (90%+)'
};
window.addEventListener('hd:achievement', (e) => {
  Toast.achievement(achievementNames[e.detail.id] || e.detail.id);
});

window.Toast = Toast;
window.ThemeManager = ThemeManager;
window.Speech = Speech;
window.Modal = Modal;
window.createProgressRing = createProgressRing;
