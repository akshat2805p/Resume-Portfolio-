/* ═══════════════════════════════════════════
   AKSHAT PANDEY — PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. Custom Cursor ─── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hoverTargets = 'a, button, .skill-card, .project-card, .achiev-card, .badge, .info-row, .orbit-card, .tech-chip, .skills-tab';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });


  /* ─── 2. Master Scroll Reveal Observer ─── */
  // Handles: .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-wipe
  // Also: .section-title, .section-label, .section-divider
  const allRevealClasses = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-wipe, .section-title, .section-label, .section-divider';

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('up');
      // section-label also gets line-drawn class
      if (el.classList.contains('section-label')) el.classList.add('line-drawn');
      revealObs.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll(allRevealClasses).forEach(el => revealObs.observe(el));


  /* ─── 3. Stagger children inside a container on scroll ─── */
  // Elements with data-stagger attribute auto-stagger their direct children
  const staggerObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const children = Array.from(entry.target.children);
      children.forEach((child, i) => {
        child.style.transitionDelay = (i * 0.08) + 's';
        child.classList.add('up');
      });
      staggerObs.unobserve(entry.target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('[data-stagger]').forEach(el => staggerObs.observe(el));


  /* ─── 4. Skill Bars — animate on scroll ─── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill[data-width]').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, i * 120);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skills-panel').forEach(panel => barObserver.observe(panel));


  /* ─── 5. Tech Chips — stagger entrance ─── */
  const chipObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.tech-chip').forEach((chip, i) => {
          setTimeout(() => chip.classList.add('animated'), i * 50);
        });
        chipObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tech-cloud').forEach(cloud => chipObserver.observe(cloud));


  /* ─── 6. Skills Tabs ─── */
  const tabs   = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const activePanel = document.getElementById('panel-' + target);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.querySelectorAll('.skill-bar-fill[data-width]').forEach((bar, i) => {
          bar.style.width = '0';
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, i * 120 + 50);
        });
        activePanel.querySelectorAll('.tech-chip').forEach(c => c.classList.remove('animated'));
        activePanel.querySelectorAll('.tech-chip').forEach((chip, i) => {
          setTimeout(() => chip.classList.add('animated'), i * 50);
        });
      }
    });
  });


  /* ─── 7. Scroll-based effects ─── */
  const navEl    = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  const sections = document.querySelectorAll('section[id]');
  const marqueeTrack = document.querySelector('.marquee-track');

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const sy = window.scrollY;

    // Nav shadow
    navEl.style.boxShadow = sy > 60 ? '0 2px 24px rgba(0,0,0,0.09)' : '';

    // Marquee speed boost while scrolling
    if (marqueeTrack) {
      clearTimeout(marqueeTrack._resetTimer);
      marqueeTrack.classList.add('fast');
      marqueeTrack._resetTimer = setTimeout(() => marqueeTrack.classList.remove('fast'), 600);
    }

    // Parallax on hero blobs via CSS variable
    const hero = document.getElementById('hero');
    if (hero && sy < window.innerHeight * 1.5) {
      const offset = sy * 0.35;
      hero.style.setProperty('--parallax-y', `-${offset}px`);
    }

    // Active nav section
    let current = '';
    sections.forEach(sec => {
      if (sy >= sec.offsetTop - 140) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    lastScrollY = sy;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });


  /* ─── 8. Smooth Scroll ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ─── 9. Contact Form ─── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const successMsg = document.getElementById('form-success');
      successMsg.style.display = 'block';
      form.reset();
      setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
    });
  }


  /* ─── 10. Hero Stat Counter Animation ─── */
  function animateCounter(el, target, duration = 1600) {
    const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    const start  = performance.now();
    function update(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 4); // ease-out-quart
      const value = Math.floor(ease * target);
      el.innerHTML = value.toLocaleString() + suffix;
      if (t < 1) requestAnimationFrame(update);
      else el.innerHTML = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(update);
  }

  setTimeout(() => {
    document.querySelectorAll('.hero-stat-num[data-target]').forEach(el => {
      animateCounter(el, parseInt(el.dataset.target, 10));
    });
  }, 900);


  /* ─── 11. Mouse parallax on hero blobs ─── */
  document.addEventListener('mousemove', e => {
    const xRatio = (e.clientX / window.innerWidth  - 0.5) * 28;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 18;
    document.getElementById('hero')?.style.setProperty('--bx', xRatio + 'px');
    document.getElementById('hero')?.style.setProperty('--by', yRatio + 'px');
  }, { passive: true });


  /* ─── 12. Project card tilt on hover ─── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width  - 0.5;
      const yPct = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${-yPct * 5}deg) rotateY(${xPct * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
