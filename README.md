# Amina Ibrahim — Portfolio

Personal portfolio website for **Amina Ibrahim**, Full-Stack Web & Mobile Developer.  
Showcases selected projects, skills, services, education, and contact information.

**Live site:** [https://aaamiina.github.io/Portifolio/](https://aaamiina.github.io/Portifolio/)

---

## Overview

This is a single-page portfolio built for clarity and performance. It presents:

- Hero introduction and call-to-action
- About and education background
- Skills organized by category
- Featured projects with screenshots and details
- Services offered
- Contact form and social links

Content is data-driven from `src/data/`, so profile details and projects can be updated without rewriting the UI.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| Icons | React Icons |
| Lint | Oxlint |
| Hosting | GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```text
src/
  assets/          # Images and project screenshots
  components/      # Reusable UI components
  data/            # Profile, projects, skills, services, nav
  hooks/           # Custom React hooks
  sections/        # Page sections (Hero, About, Projects, …)
  App.jsx
  main.jsx
  index.css
public/            # Static files (favicon, CV)
.github/workflows/ # GitHub Pages deploy workflow
```

---

## Customization

| File | Purpose |
| --- | --- |
| `src/data/profile.js` | Name, title, about text, email, social links, CV path |
| `src/data/projects.js` | Featured projects, tech stack, features, images |
| `src/data/skills.js` | Skill groups and descriptions |
| `src/data/services.js` | Services section content |
| `src/data/nav.js` | Navigation links |
| `public/cv.pdf` | Downloadable CV |

---

## Deployment

The site is deployed to **GitHub Pages** from the `main` branch.

1. Push changes to `main`
2. The GitHub Actions workflow builds the site and publishes to `gh-pages`
3. Site URL: `https://aaamiina.github.io/Portifolio/`

> The Vite `base` path is set to `/Portifolio/` for this repository name.

---

## Contact

- **Email:** [aminaisaleh124@gmail.com](mailto:aminaisaleh124@gmail.com)
- **GitHub:** [github.com/Aaamiina](https://github.com/Aaamiina)

---

## License

This project is private to Amina Ibrahim and intended for personal portfolio use.
