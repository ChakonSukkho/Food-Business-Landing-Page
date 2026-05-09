/* ============================================================
   FadeLab Barbers – script.js
   Features:
   - Sticky navbar with scroll styling
   - Hamburger mobile menu toggle
   - Scroll-reveal animation (IntersectionObserver)
   - Smooth scroll for anchor links
   - Contact form submission feedback
   ============================================================ */

(function () {
  'use strict';

  /* ========== Navbar: scroll class + mobile toggle ========== */
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Add .scrolled class when page is scrolled
  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run on load

  // Hamburger toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // Animate hamburger → X
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
      const spans = navToggle.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  /* ========== Smooth Scroll ========== */
  // Polyfill for browsers without native smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId  = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* ========== Scroll Reveal (IntersectionObserver) ========== */
  const revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,  // trigger when 12% of element is visible
        rootMargin: '0px 0px -48px 0px'
      }
    );

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ========== Contact Form ========== */
  const contactForm = document.getElementById('contactForm');
  const formNote    = document.getElementById('formNote');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email) {
        formNote.textContent = '⚠ Please fill in your name and email.';
        formNote.style.color = '#e07070';
        return;
      }

      if (!isValidEmail(email)) {
        formNote.textContent = '⚠ Please enter a valid email address.';
        formNote.style.color = '#e07070';
        return;
      }

      // Simulate successful send (replace with real API call if needed)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const btnText   = submitBtn.querySelector('.btn-text');

      // Loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending…';

      setTimeout(() => {
        // Reset form
        contactForm.reset();

        // Success feedback
        formNote.textContent = "✓ Booking request sent! We'll confirm your slot shortly.";
        formNote.style.color = '#c9a84c';

        submitBtn.disabled  = false;
        btnText.textContent = 'Send Booking Request';

        // Clear note after 6 seconds
        setTimeout(() => { formNote.textContent = ''; }, 6000);
      }, 1200);
    });
  }

  /* ========== Helpers ========== */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ========== Gallery hover cursor ========== */
  // Subtle click-ripple effect on gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px; top: ${y}px;
        width: 0; height: 0;
        background: rgba(201,168,76,0.25);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.55s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;

      // Inject ripple keyframes once
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
          @keyframes ripple {
            to { width: 220px; height: 220px; opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ========== Pricing card hover tilt ========== */
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);

      this.style.transform = `
        translateY(${this.classList.contains('featured') ? '-12px' : '-6px'})
        rotateY(${dx * 3}deg)
        rotateX(${-dy * 3}deg)
      `;
    });

    card.addEventListener('mouseleave', function () {
      const base = this.classList.contains('featured') ? '-12px' : '0px';
      this.style.transform = `translateY(${base}) rotateY(0) rotateX(0)`;
    });
  });

})();