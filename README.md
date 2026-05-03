# 🍔 Burger Byte — Landing Page

A minimalist, modern, and fully responsive 1-page landing page for a burger food business. Built with pure HTML and CSS — no frameworks, no dependencies.

---

## 📁 Project Structure

```
burger-byte/
├── index.html       # Main HTML file (all sections)
├── style.css        # All styles, variables, and responsive rules
└── README.md        # This file
```

---

## 🚀 Getting Started

No build tools or installations needed.

1. Download or clone the project folder
2. Open `index.html` in any modern browser
3. Done ✅

```bash
# If you have VS Code, just open with Live Server
# Right-click index.html → Open with Live Server
```

---

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Fixed top bar with logo, nav links, CTA button, and mobile hamburger |
| 2 | **Hero** | Full-viewport background with title, tagline, CTA buttons, and trust bar |
| 3 | **Menu** | Tabbed menu — Burgers (6 items), Chicken (3 items), Sides & Drinks (6 items) |
| 4 | **Promo** | Full-width scrolling ticker + "Buy 1 Free 1" promotional banner |
| 5 | **About** | Business story, stats block (50K+ served, 4.9★), and ingredient badges |
| 6 | **Contact** | Info cards + WhatsApp order card with social links |
| 7 | **Footer** | 3-column footer with brand info, quick links, and contact links |

---

## 🎨 Design

| Property | Value |
|----------|-------|
| **Primary Color** | `#E31B1B` (Red) |
| **Background Dark** | `#0A0A0A` (Black) |
| **Background Light** | `#FAFAFA` / `#F2F0EB` (White / Off-white) |
| **Display Font** | [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) |
| **Body Font** | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Responsive** | Mobile-first, breakpoints at `768px` and `1024px` |

---

## ⚙️ Features

- ✅ Pure HTML + CSS — zero frameworks or libraries
- ✅ Google Fonts loaded via `<link>` (Bebas Neue + DM Sans)
- ✅ CSS custom properties (variables) for easy theme changes
- ✅ Fully responsive — mobile, tablet, and desktop
- ✅ Sticky navbar with scroll shrink effect (JavaScript)
- ✅ Hamburger menu with full-screen mobile drawer
- ✅ Tab switching for menu categories (JavaScript)
- ✅ Full-width auto-scrolling ticker tape (CSS animation)
- ✅ Smooth scroll navigation
- ✅ Hover effects on all cards, buttons, and links
- ✅ WhatsApp order integration (placeholder link)

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1024px` | Full desktop — 3-column menu grid, side-by-side sections |
| `768px – 1024px` | Tablet — 2-column menu grid, stacked about/contact |
| `< 768px` | Mobile — single column, hamburger menu, compact hero |
| `< 480px` | Small mobile — tighter padding, stacked CTA buttons |

---

## 🔗 Customization

### Change the WhatsApp number
Search for `wa.me/60123456789` in `index.html` and replace with your number:
```html
<!-- Replace 60123456789 with your number (country code + number, no spaces or dashes) -->
<a href="https://wa.me/601XXXXXXXX">Chat on WhatsApp</a>
```

### Change the color theme
Edit the CSS variables at the top of `style.css`:
```css
:root {
  --red:      #E31B1B;  /* Primary accent color */
  --black:    #0A0A0A;  /* Dark background */
  --white:    #FAFAFA;  /* Light background */
}
```

### Replace placeholder images
The hero and menu card images use Unsplash URLs. Replace them in `style.css` with your own:
```css
/* Hero background */
.hero {
  background-image: url('your-image.jpg');
}

/* Menu card images */
.menu-img--1 { background-image: url('burger1.jpg'); }
.menu-img--2 { background-image: url('burger2.jpg'); }
/* ...and so on */
```

### Update menu items and prices
Edit the menu cards directly in `index.html` inside each `.menu-card` block:
```html
<h3>Your Burger Name</h3>
<p>Your description here.</p>
<span class="menu-price">RM 00.00</span>
```

---

## 🧩 JavaScript Features

All JS is written inline at the bottom of `index.html` (no external files):

```js
// 1. Navbar shrinks on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// 2. Hamburger opens/closes mobile drawer
hamburger.addEventListener('click', () => { ... });

// 3. Menu tab switching
tabBtns.forEach(btn => btn.addEventListener('click', () => { ... }));
```

---

## 🌐 Browser Support

Works on all modern browsers:

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ |
| Firefox 90+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| IE 11 | ❌ (CSS variables not supported) |

---

## 📦 Dependencies

None. Everything is self-contained except:

- **Google Fonts** — loaded via CDN (requires internet connection)
- **Unsplash images** — placeholder images loaded via URL (requires internet connection)

For offline/production use, download fonts and images locally.

---

## 📝 License

This project is for personal and commercial use. Free to modify and deploy.

---

> Built with 🔥 in Kuala Lumpur · Burger Byte © 2024