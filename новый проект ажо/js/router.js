/* ============================================================
   HALLO DEUTSCH 2.0 — SPA Router
   Hash-based client-side router
   ============================================================ */

const Router = {
  routes: {},
  currentRoute: null,
  container: null,

  init(containerId) {
    this.container = document.getElementById(containerId);
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('load', () => this.resolve());
  },

  register(path, handler) {
    this.routes[path] = handler;
  },

  navigate(path) {
    window.location.hash = path;
  },

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, queryString] = hash.split('?');
    const params = {};

    // Parse query params
    if (queryString) {
      queryString.split('&').forEach(p => {
        const [k, v] = p.split('=');
        params[decodeURIComponent(k)] = decodeURIComponent(v || '');
      });
    }

    // Check onboarding
    if (!Store.get('onboarded') && path !== '/onboarding') {
      this.navigate('/onboarding');
      return;
    }

    // Find matching route
    let handler = this.routes[path];
    let routeParams = {};

    if (!handler) {
      // Try dynamic routes like /lesson/:id
      for (const [route, h] of Object.entries(this.routes)) {
        const routeParts = route.split('/');
        const pathParts = path.split('/');
        if (routeParts.length !== pathParts.length) continue;
        let match = true;
        const dynParams = {};
        for (let i = 0; i < routeParts.length; i++) {
          if (routeParts[i].startsWith(':')) {
            dynParams[routeParts[i].slice(1)] = pathParts[i];
          } else if (routeParts[i] !== pathParts[i]) {
            match = false;
            break;
          }
        }
        if (match) {
          handler = h;
          routeParams = dynParams;
          break;
        }
      }
    }

    if (!handler) {
      handler = this.routes['/404'] || (() => '<div class="empty-state"><span class="empty-state__icon">🔍</span><h2>Страница не найдена</h2></div>');
    }

    this.currentRoute = path;
    this._render(handler, { ...params, ...routeParams });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._updateNav(path);
  },

  _render(handler, params) {
    if (!this.container) return;
    // Show skeleton while loading
    this.container.innerHTML = '<div style="padding: 2rem;"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text" style="width:80%"></div><div class="skeleton skeleton-text" style="width:60%"></div><div class="skeleton skeleton-card" style="margin-top:1rem"></div></div>';

    requestAnimationFrame(() => {
      const content = handler(params);
      if (typeof content === 'string') {
        this.container.innerHTML = content;
      }
      // Init animations
      this.container.querySelectorAll('.animate-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 50 + i * 80);
      });
      // Dispatch page rendered event
      window.dispatchEvent(new CustomEvent('hd:page-rendered', { detail: { route: this.currentRoute } }));
    });
  },

  _updateNav(path) {
    document.querySelectorAll('.nav-links a, .bottom-nav__item').forEach(link => {
      const href = link.getAttribute('data-route') || link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === path);
    });
  }
};

window.Router = Router;
