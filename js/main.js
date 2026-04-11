/**
 * Consolidated Solutions LLC — Main JavaScript
 * Handles: Navbar scroll, mobile menu, video pause, scroll animations,
 *          parallax, contact form, footer year
 */

'use strict';

// Add js-ready class to body to enable CSS animations
document.body.classList.add('js-ready');

// ── Utilities ──────────────────────────────────────────────────────────────

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Navbar: Transparent → Solid on Scroll ─────────────────────────────────

(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function updateNavbar() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // run on load
})();

// ── Mobile Menu ────────────────────────────────────────────────────────────

(function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('menu-close');
  const mobileLinks = menu ? menu.querySelectorAll('.mobile-nav-link, .btn-gold-solid') : [];

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const firstLink = menu.querySelector('a, button');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Trap focus within menu when open
  menu.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    const focusable = menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();

// ── Hero Video: Lazy Load + Pause Control ─────────────────────────────────

(function initHeroVideo() {
  const video = document.getElementById('hero-video');
  const pauseBtn = document.getElementById('video-pause');
  const pauseIcon = document.getElementById('pause-icon');
  const playIcon = document.getElementById('play-icon');
  const pauseLabel = document.getElementById('pause-label');

  if (!video) return;

  // Lazy-load video on desktop only
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (!isMobile) {
    video.setAttribute('preload', 'auto');
    video.load();
  }

  if (!pauseBtn) return;

  let isPaused = false;

  pauseBtn.addEventListener('click', function() {
    if (isPaused) {
      video.play().catch(() => {});
      isPaused = false;
      pauseBtn.setAttribute('aria-pressed', 'false');
      pauseBtn.setAttribute('aria-label', 'Pause hero video');
      pauseIcon.classList.remove('hidden');
      playIcon.classList.add('hidden');
      if (pauseLabel) pauseLabel.textContent = 'Pause';
    } else {
      video.pause();
      isPaused = true;
      pauseBtn.setAttribute('aria-pressed', 'true');
      pauseBtn.setAttribute('aria-label', 'Play hero video');
      pauseIcon.classList.add('hidden');
      playIcon.classList.remove('hidden');
      if (pauseLabel) pauseLabel.textContent = 'Play';
    }
  });

  // Auto-pause if user prefers reduced motion
  if (prefersReducedMotion) {
    video.pause();
    isPaused = true;
    pauseBtn.setAttribute('aria-pressed', 'true');
    if (pauseIcon) pauseIcon.classList.add('hidden');
    if (playIcon) playIcon.classList.remove('hidden');
    if (pauseLabel) pauseLabel.textContent = 'Play';
  }
})();

// ── Scroll Animations: Intersection Observer ──────────────────────────────

(function initScrollAnimations() {
  if (prefersReducedMotion) {
    // Make all elements visible immediately
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Make hero elements visible immediately (they're above the fold)
  document.querySelectorAll('#hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });
})();

// ── Hero Parallax ─────────────────────────────────────────────────────────

(function initParallax() {
  if (prefersReducedMotion) return;

  const heroSection = document.getElementById('hero');
  const video = document.getElementById('hero-video');
  const fallbackImg = heroSection ? heroSection.querySelector('img[aria-hidden]') : null;

  if (!heroSection) return;

  let ticking = false;

  function applyParallax() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY <= heroHeight) {
      const offset = scrollY * 0.3;
      if (video) video.style.transform = `translateY(${offset}px)`;
      if (fallbackImg) fallbackImg.style.transform = `translateY(${offset}px)`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });
})();

// ── Smooth Scroll for Anchor Links ────────────────────────────────────────

(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = 80;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      if (prefersReducedMotion) {
        window.scrollTo(0, targetTop);
      } else {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }
    });
  });
})();

// ── Contact Form ───────────────────────────────────────────────────────────

(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#e53e3e';
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.style.borderColor = '';
        field.setAttribute('aria-invalid', 'false');
      }
    });

    if (!valid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate form submission (replace with actual endpoint)
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }

    setTimeout(function() {
      if (submitBtn) {
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.backgroundColor = '#2d6a4f';
        submitBtn.style.borderColor = '#2d6a4f';
      }

      // Reset after 3 seconds
      setTimeout(function() {
        form.reset();
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
        }
      }, 3000);
    }, 1200);
  });

  // Live validation feedback
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', function() {
      if (!this.value.trim()) {
        this.style.borderColor = '#e53e3e';
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.style.borderColor = 'rgba(201, 162, 39, 0.4)';
        this.setAttribute('aria-invalid', 'false');
      }
    });

    field.addEventListener('input', function() {
      if (this.value.trim()) {
        this.style.borderColor = '';
        this.setAttribute('aria-invalid', 'false');
      }
    });
  });
})();

// ── Footer Year ────────────────────────────────────────────────────────────

(function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ── Btn Gold Outline: Fix hover text color with z-index ───────────────────

(function fixOutlineButtons() {
  document.querySelectorAll('.btn-gold-outline').forEach(btn => {
    // Wrap text content in a span if not already wrapped
    if (!btn.querySelector('span')) {
      const text = btn.innerHTML;
      btn.innerHTML = `<span style="position:relative;z-index:1">${text}</span>`;
    }
  });
})();
