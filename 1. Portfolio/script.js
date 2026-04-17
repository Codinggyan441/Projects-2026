/* =============================================
  PORTFOLIO SCRIPT
  - Loader, Custom Cursor, Scroll Progress
  - Theme Toggle, Navbar, Particles Canvas
  - Scroll Reveal, Skill Bars
  - Project Filtering, Testimonials Carousel
  - Contact Form Validation, Back to Top
============================================= */

// ===========================
// 1. LOADING SCREEN
// ===========================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 800);
});

// ===========================
// 2. CUSTOM CURSOR
// ===========================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  function animateFollower() {
    fx += (mx - fx) * 0.15;
    fy += (my - fy) * 0.15;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
  document.querySelectorAll('a, button, .glass-card, .filter-btn, .carousel-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
  });
}

// ===========================
// 3. SCROLL PROGRESS BAR
// ===========================
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (window.scrollY / total) * 100;
  scrollBar.style.width = pct + '%';
}, { passive: true });

// ===========================
// 4. NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ===========================
// 5. HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===========================
// 6. THEME TOGGLE
// ===========================
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

// ===========================
// 7. PARTICLE CANVAS
// ===========================
(function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.4 + 0.1;
      const hues = [260, 220, 190];
      this.hue = hues[Math.floor(Math.random() * hues.length)];
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(109,80,217,${0.08 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===========================
// 8. SCROLL REVEAL
// ===========================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars when about section is visible
      if (entry.target.classList.contains('skills-wrap')) animateSkillBars();
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// ===========================
// 9. SKILL BARS ANIMATION
// ===========================
let skillsAnimated = false;
function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = bar.getAttribute('data-width');
    requestAnimationFrame(() => { bar.style.width = w + '%'; });
  });
}

// ===========================
// 10. PROJECT FILTERING
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const show = filter === 'all' || cat === filter;
      if (show) {
        card.classList.remove('hidden');
        void card.offsetWidth; // reflow
        card.classList.add('fade-in');
        setTimeout(() => card.classList.remove('fade-in'), 400);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===========================
// 11. TESTIMONIALS CAROUSEL
// ===========================
(function initCarousel() {
  const carousel = document.getElementById('carousel');
  const dotsContainer = document.getElementById('carousel-dots');
  const cards = carousel.querySelectorAll('.testimonial-card');
  let current = 0;
  let autoPlay;

  const visibleCount = () => window.innerWidth <= 768 ? 1 : 2;

  function maxIndex() {
    return cards.length - visibleCount();
  }

  // Create dots
  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex(); i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === current ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex()));
    const cardW = cards[0].offsetWidth + 24; // gap 24px
    carousel.style.transform = `translateX(-${current * cardW}px)`;
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  document.getElementById('prev-btn').addEventListener('click', () => {
    goTo(current - 1); resetAutoPlay();
  });
  document.getElementById('next-btn').addEventListener('click', () => {
    goTo(current === maxIndex() ? 0 : current + 1); resetAutoPlay();
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => goTo(current === maxIndex() ? 0 : current + 1), 4500);
  }
  function resetAutoPlay() { clearInterval(autoPlay); startAutoPlay(); }

  buildDots();
  startAutoPlay();
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
})();

// ===========================
// 12. CONTACT FORM VALIDATION
// ===========================
(function initForm() {
  const form = document.getElementById('contact-form');
  const fields = [
    { id: 'name', errId: 'name-error', validate: v => v.trim().length >= 2 ? '' : 'Name must be at least 2 characters.' },
    { id: 'email', errId: 'email-error', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.' },
    { id: 'subject', errId: 'subject-error', validate: v => v.trim().length >= 3 ? '' : 'Subject must be at least 3 characters.' },
    { id: 'message', errId: 'message-error', validate: v => v.trim().length >= 10 ? '' : 'Message must be at least 10 characters.' },
  ];

  function validateField(field) {
    const el = document.getElementById(field.id);
    const errEl = document.getElementById(field.errId);
    const error = field.validate(el.value);
    errEl.textContent = error;
    el.classList.toggle('error', !!error);
    return !error;
  }

  // Real-time validation on blur
  fields.forEach(field => {
    const el = document.getElementById(field.id);
    el.addEventListener('blur', () => validateField(field));
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const allValid = fields.every(f => validateField(f));
    if (!allValid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Sending...';

    // Simulate sending
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.querySelector('span').textContent = 'Send Message';
      const success = document.getElementById('form-success');
      success.style.display = 'block';
      setTimeout(() => success.style.display = 'none', 5000);
    }, 1500);
  });
})();

// ===========================
// 13. BACK TO TOP
// ===========================
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// 14. SMOOTH SCROLL FOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ===========================
// 15. ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent-3)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===========================
// 16. MICRO INTERACTIONS
// ===========================
// Ripple effect on buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-plan, .btn-hire').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute;width:${size}px;height:${size}px;
      border-radius:50%;background:rgba(255,255,255,0.25);
      top:${e.clientY - rect.top - size / 2}px;
      left:${e.clientX - rect.left - size / 2}px;
      transform:scale(0);animation:ripple-anim 0.6s linear;
      pointer-events:none;z-index:10;
    `;
    if (!this.style.position || this.style.position === 'static') {
      this.style.position = 'relative';
    }
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

const style = document.createElement('style');
style.textContent = `@keyframes ripple-anim{to{transform:scale(4);opacity:0;}}`;
document.head.appendChild(style);
