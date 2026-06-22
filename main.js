'use strict';

/* ============================================================
   1. NAVBAR — scroll effect
============================================================ */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();


/* ============================================================
   2. HAMBURGER — mobile drawer toggle
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');

hamburger.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Close drawer function */
function closeMobile() {
  mobileDrawer.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close on outside click */
mobileDrawer.addEventListener('click', (e) => {
  if (e.target === mobileDrawer) closeMobile();
});

/* Close on ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
    closeMobile();
  }
});


/* ============================================================
   3. SMOOTH SCROLL
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    closeMobile();

    const navHeight = navbar.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});


/* ============================================================
   4. MENU TABS — tab switching
============================================================ */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    /* Remove active from all */
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    /* Add active to clicked */
    btn.classList.add('active');
    const tabId = 'tab-' + btn.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});


/* ============================================================
   5. PAGE LOAD
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cBurger Byte 🔥', 'color:#E31B1B;font-family:sans-serif;font-size:18px;font-weight:bold;');
  console.log('%cDelicious Burgers Made Fresh Daily', 'color:#888;font-size:12px;');
});