/* ===================================
   GROUND Inc. Corporate Site
   Main JavaScript
   =================================== */

/* --- Password Gate (temporary for review period) --- */
(function() {
  var PASS_HASH = '9f611e02';
  var STORAGE_KEY = 'ground_site_auth';
  var COOKIE_DAYS = 7;

  function simpleHash(str) {
    var hash = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
  }

  function getToken(pass) {
    return simpleHash(pass + '_ground_salt_2026');
  }

  // Skip gate for admin pages and Netlify CMS
  if (window.location.pathname.indexOf('/admin') === 0) return;

  // Check if already authenticated
  var stored = null;
  try { stored = sessionStorage.getItem(STORAGE_KEY); } catch(e) {}
  if (!stored) {
    try {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.indexOf(STORAGE_KEY + '=') === 0) {
          stored = c.substring(STORAGE_KEY.length + 1);
          break;
        }
      }
    } catch(e) {}
  }

  if (stored === PASS_HASH) return;

  // Hide page content and show password form
  document.documentElement.style.visibility = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  window.addEventListener('DOMContentLoaded', function() {
    document.body.style.visibility = 'hidden';

    var overlay = document.createElement('div');
    overlay.id = 'pw-gate';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#0F172A;z-index:999999;display:flex;align-items:center;justify-content:center;visibility:visible;';

    overlay.innerHTML = '<div style="text-align:center;font-family:Arial,sans-serif;color:#fff;max-width:380px;padding:40px;">'
      + '<div style="margin-bottom:24px;">'
      + '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>'
      + '</div>'
      + '<h2 style="font-size:20px;margin:0 0 8px;font-weight:700;">GROUND Inc.</h2>'
      + '<p style="font-size:13px;color:#94A3B8;margin:0 0 24px;">This site is currently under review.<br>Please enter the password to continue.</p>'
      + '<div id="pw-error" style="display:none;color:#F87171;font-size:12px;margin-bottom:12px;">Incorrect password</div>'
      + '<input id="pw-input" type="password" placeholder="Password" autocomplete="off" style="width:100%;padding:12px 16px;border:1px solid #334155;border-radius:8px;background:#1E293B;color:#fff;font-size:15px;outline:none;box-sizing:border-box;margin-bottom:12px;">'
      + '<button id="pw-btn" style="width:100%;padding:12px;border:none;border-radius:8px;background:#3B82F6;color:#fff;font-size:14px;font-weight:600;cursor:pointer;">Enter</button>'
      + '<p style="font-size:11px;color:#475569;margin-top:20px;">&copy; 2021 GROUND Inc. All rights reserved.</p>'
      + '</div>';

    document.body.appendChild(overlay);

    var input = document.getElementById('pw-input');
    var btn = document.getElementById('pw-btn');
    var errEl = document.getElementById('pw-error');

    function tryAuth() {
      var val = input.value.trim();
      var token = getToken(val);
      if (token === PASS_HASH) {
        try { sessionStorage.setItem(STORAGE_KEY, PASS_HASH); } catch(e) {}
        try {
          var d = new Date();
          d.setTime(d.getTime() + COOKIE_DAYS * 86400000);
          document.cookie = STORAGE_KEY + '=' + PASS_HASH + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        } catch(e) {}
        overlay.remove();
        document.documentElement.style.visibility = '';
        document.documentElement.style.overflow = '';
        document.body.style.visibility = '';
      } else {
        errEl.style.display = 'block';
        input.style.borderColor = '#F87171';
        input.value = '';
        input.focus();
      }
    }

    btn.addEventListener('click', tryAuth);
    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') tryAuth(); });
    input.focus();
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollAnimations();
  initParticles();
  initOverlayMenu();
  initCountUp();
  initSmoothScroll();
});

/* --- Header Scroll Effect --- */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Scroll Reveal Animations --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* --- Particle Background --- */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  // Skip on low-power devices for performance
  if (window.matchMedia('(max-width: 768px)').matches || navigator.hardwareConcurrency <= 2) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;
  let w, h;

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 60 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
      ctx.fill();

      // Draw connections (use squared distance to avoid sqrt)
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 22500) { // 150^2
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); });
}

/* --- Overlay Menu — o9-style 3-col with hover panels --- */
function initOverlayMenu() {
  var hamburger = document.getElementById('hamburgerBtn');
  var overlay = document.getElementById('overlayMenu');
  if (!hamburger || !overlay) return;

  var navItems = overlay.querySelectorAll('.overlay-menu__nav-item[data-panel]');
  var panels = overlay.querySelectorAll('.overlay-menu__panel');
  var allNavItems = overlay.querySelectorAll('.overlay-menu__nav-item');

  function closeMenu() {
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    // Reset panels
    navItems.forEach(function(n) { n.classList.remove('is-active'); });
    panels.forEach(function(p) { p.classList.remove('is-visible'); });
  }

  function openMenu() {
    overlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Show first panel by default
    if (navItems.length > 0) {
      navItems[0].classList.add('is-active');
      var firstId = navItems[0].getAttribute('data-panel');
      var firstPanel = overlay.querySelector('.overlay-menu__panel[data-panel="' + firstId + '"]');
      if (firstPanel) firstPanel.classList.add('is-visible');
    }
  }

  hamburger.addEventListener('click', function() {
    if (overlay.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Hover on nav item: show its panel
  navItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      var panelId = item.getAttribute('data-panel');
      // Deactivate all
      navItems.forEach(function(n) { n.classList.remove('is-active'); });
      panels.forEach(function(p) { p.classList.remove('is-visible'); });
      // Activate this
      item.classList.add('is-active');
      var panel = overlay.querySelector('.overlay-menu__panel[data-panel="' + panelId + '"]');
      if (panel) panel.classList.add('is-visible');
    });
  });

  // Click on nav item without panel: navigate and close
  allNavItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (!item.hasAttribute('data-panel')) {
        closeMenu();
      }
    });
  });

  // Close on sub-item click
  overlay.querySelectorAll('.overlay-menu__sub-item').forEach(function(link) {
    link.addEventListener('click', function() { closeMenu(); });
  });

  // Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* --- Count-up Animation --- */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 2000;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.floor(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              el.textContent = prefix + target.toLocaleString() + suffix;
            }
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* --- Smooth Scroll --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
