# 🍔 Burger Byte — Landing Page

A modern, clean, and fully responsive 1-page landing page for a burger restaurant. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.

---

## 📁 Project Structure

```
burger-byte/
├── index.html       # Main HTML file (all 8 sections)
├── style.css        # Complete styling with responsive design
├── script.js        # JavaScript features
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
| 1 | **Navbar** | Fixed top bar with logo, nav links, CTA button, mobile hamburger |
| 2 | **Hero** | Full-viewport with title, tagline, CTA buttons, and trust bar (100% Fresh, 50K+ Served, 4.9★) |
| 3 | **Menu** | 3 tabbed categories — Burgers (6 items), Chicken (3 items), Sides & Drinks (6 items) |
| 4 | **Promo** | Full-width scrolling ticker + "Buy 1 Free 1" offer with promo badge |
| 5 | **About** | Business story, image with gold border, stats block (50K+ served, 4.9★, daily fresh), badges |
| 6 | **Contact** | Info cards (address, hours, phone, email) + WhatsApp order card |
| 7 | **Footer** | 3-column footer with brand info, quick links, and contact links |

---

## 🎨 Design

| Property | Value |
|----------|-------|
| **Primary Color** | `#E31B1B` (Red) |
| **Background Dark** | `#0A0A0A` (Black) |
| **Background Light** | `#FAFAFA` / `#F2F0EB` (White / Off-white) |
| **Display Font** | [Poppins](https://fonts.google.com/specimen/Poppins) |
| **Body Font** | [Inter](https://fonts.google.com/specimen/Inter) |
| **Responsive** | Mobile-first, breakpoints at `480px`, `768px`, `1024px` |

---

## ⚙️ Features

- ✅ Pure HTML + CSS + JS — zero frameworks
- ✅ Google Fonts loaded via `<link>` (Bebas Neue + DM Sans)
- ✅ CSS custom properties (variables) for easy theme customization
- ✅ Fully responsive — mobile, tablet, and desktop
- ✅ Sticky navbar with scroll effect
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
| `< 480px` | Small mobile — tighter padding, single-column gallery |

---

## 🔧 Customization Guide

### Change the WhatsApp number
Search for `wa.me/60123456789` in `index.html` and replace with your number:
```html
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
The hero and menu card images use Unsplash URLs. Replace them in `style.css`:
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

### Update business details
In `index.html`, search for and replace:
- Address in the Contact section
- Operating hours
- Phone number
- Email `hello@burgerbyte.my`
- Social media links

---

## 🧩 JavaScript Features (`script.js`)

| Feature | Description |
|---------|-------------|
| **Navbar scroll effect** | Shrinks navbar background and adds blur after 60px scroll |
| **Hamburger menu** | Full-screen mobile drawer with open/close + ESC key support |
| **Tab switching** | Click tabs to switch between Burgers, Chicken, Sides & Drinks |
| **Smooth scroll** | JS-based smooth scroll with navbar offset compensation |
| **Mobile drawer close** | Closes automatically on link click or ESC key |

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