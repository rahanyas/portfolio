# Rahanyas — Portfolio

A modern, responsive personal portfolio website for **Rahanyas**, built with **React + Vite**, featuring smooth animations (Framer Motion), a polished glassmorphism UI, and an animated **dark robotic/alien HUD** theme — acid-green and cyan glows, drifting nebulae, twinkling stars, a ringed planet, CRT scanlines, a holographic grid, and shooting stars. Showcases **Python, Linux, Node.js, AWS, Render, Vercel, and Cybersecurity concepts** across sections for **Hero**, **About**, **Projects**, **Contact**, and **Social accounts**.

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# production build
npm run build
npm run preview
```

> On Windows PowerShell, if `npm` script execution is restricted, you can use `cmd /c npm install` (and similar) or run from Command Prompt.

## Customize

- **Name & bio:** Update text in `src/components/Hero.jsx`, `src/components/About.jsx`, and `src/components/Footer.jsx`.
- **Projects:** Edit the `projects` array in `src/components/Projects.jsx` with your titles, descriptions, tags, and links.
- **Contact details & socials:** Update links and info in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Contact form:** The form currently shows a local success state. Connect it to a service like [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or your own API in `Contact.jsx`.
- **Theme:** Tweak colors and layout tokens in `src/index.css` (`:root` variables). The grey/titanium space scene lives in `src/components/SpaceBackground.jsx` and its CSS in `src/index.css` (`.space-bg`, `.hud-grid`, `.nebula`, `.star-layer`, `.planet-*`, `.shooting-star`). The hero is a live terminal panel, and projects are filterable with a featured bento card.
- **Motion:** Scroll progress bar in `src/components/ScrollProgress.jsx`, mouse-tilt cards in `src/components/TiltCard.jsx`.

## Tech

- React 19 + Vite
- Framer Motion (animations, scroll reveals, tilt cards, active-section nav)
- Lucide React (icons)
- Responsive, mobile-first CSS with glassmorphism and space-themed styling
