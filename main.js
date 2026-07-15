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
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
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
   5. WHATSAPP MENU ORDERING
============================================================ */
const whatsappNumber = '60123456789';

function orderMenuItem(card) {
  const name = card.querySelector('h3, h4')?.textContent.trim();
  const price = card.querySelector('.menu-price, .side-price')?.textContent.trim();

  if (!name) return;

  const quantityInput = window.prompt(`Quantity for ${name}:`, '1');
  if (quantityInput === null) return;

  const quantity = Number(quantityInput.trim());
  if (!Number.isInteger(quantity) || quantity < 1) {
    window.alert('Please enter a valid quantity (1 or more).');
    return;
  }

  const message = [
    'Hi Burger Byte! I would like to order:',
    '',
    `Menu: ${name}`,
    `Quantity: ${quantity}`,
    price ? `Price: ${price} each` : ''
  ].filter(Boolean).join('\n');

  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.menu-card .btn-sm').forEach(button => {
  button.removeAttribute('href');
  button.setAttribute('role', 'button');
  button.setAttribute('tabindex', '0');
  button.addEventListener('click', event => {
    event.preventDefault();
    orderMenuItem(button.closest('.menu-card'));
  });
  button.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      orderMenuItem(button.closest('.menu-card'));
    }
  });
});

document.querySelectorAll('.side-card').forEach(card => {
  const orderButton = document.createElement('button');
  orderButton.type = 'button';
  orderButton.className = 'btn btn-sm side-order-btn';
  orderButton.textContent = 'Order';
  orderButton.addEventListener('click', () => orderMenuItem(card));
  card.appendChild(orderButton);
});


/* ============================================================
   6. PAGE LOAD
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cBurger Byte 🔥', 'color:#E31B1B;font-family:sans-serif;font-size:18px;font-weight:bold;');
  console.log('%cDelicious Burgers Made Fresh Daily', 'color:#888;font-size:12px;');
});
