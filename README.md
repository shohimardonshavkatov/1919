# Premium Portfolio — React + Framer Motion + GSAP

🎨 **Ultra-modern, animated, dark-futuristic portfolio** built with cutting-edge technologies.

✨ **Features:**
- Dark futuristic UI with neon cyan/purple gradients
- Glassmorphism effects (Safari 9+ compatible)
- Smooth GSAP & Framer Motion animations
- Typing text effect in hero section
- Fully responsive design
- Professional recruiter-ready layout
- Fast loading (gzip optimized)
- Custom scrollbar with gradient
- Interactive skill progress bars
- Project filtering system
- Beautiful contact form

---

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open **http://localhost:3001/** in your browser.

---

## Build for Production

```bash
npm run build
```

Output files are in the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with logo & links
│   ├── Hero.jsx        # Hero section with typing effect
│   ├── About.jsx       # About with counters
│   ├── Skills.jsx      # Skills with progress bars
│   ├── Projects.jsx    # Projects with filtering
│   ├── Services.jsx    # Services cards
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── data/
│   └── projects.js     # Project data
├── App.jsx             # Main app component
├── main.jsx            # React entry point
├── index.css           # Global styles
└── animations.js       # GSAP animations
```

---

## Customize

1. **Update your info** in `src/components/Hero.jsx`, `About.jsx`
2. **Add your projects** in `src/data/projects.js`
3. **Update social links** in `src/components/Navbar.jsx` & `Footer.jsx`
4. **Change colors** in `src/index.css` (CSS variables in :root)
5. **Update meta tags** in `index.html`

---

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guides:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS Amplify
- Firebase Hosting
- Docker

---

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Framer Motion** - React animations
- **GSAP 3** - Advanced animations
- **React Icons** - Icon library
- **CSS3** - Modern styling
- **HTML5** - Semantic markup

---

## Performance

✅ **Build metrics:**
- CSS: 7.18 kB (1.95 kB gzipped)
- JS: 370.68 kB (130.25 kB gzipped)
- Build time: ~3 seconds
- Responsive: Mobile, Tablet, Desktop

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 9+
- Safari on iOS 9+

---

## License

MIT - Feel free to use this template for personal or commercial projects.

---

**Made with ❤️ for developers who want a premium portfolio.**
