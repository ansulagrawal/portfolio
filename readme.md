# Interactive Vue.js Portfolio

![Vue](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-⚡-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/github/license/ansulagrawal/portfolio)
![Last Commit](https://img.shields.io/github/last-commit/ansulagrawal/portfolio)

A dynamic, data-driven personal portfolio built with Vue 3, Vite, and Tailwind CSS.
Everything you see on the site is powered by structured JSON data, making the project easy to customize, extend, and maintain.

The focus here is simple: clean UI, fast performance, and a codebase that’s pleasant to work in.

---

## Overview

This portfolio is designed as a real-world Vue application rather than a static landing page. It uses modern Vue patterns, strong typing, and a modular architecture. Content such as experience, education, projects, and skills lives outside the UI layer, so updating the site rarely requires touching Vue components.

It supports:

* Multiple languages
* Light and dark themes
* Client-side navigation
* Paginated content sections

All without adding unnecessary complexity.

---

## Key Features

* **Modern Vue Architecture**
  Built with Vue 3 and the Composition API, using TypeScript throughout for predictable, self-documenting code.

* **Data-Driven by Design**
  Resume data, projects, and profile information are loaded from external JSON files. No hardcoded content inside components.

* **Multi-Language Support**
  Uses `vue-i18n` with full language switching at runtime. Currently supports:

  * English
  * Hindi
  * Gujarati

* **Theme Switching**
  Light and dark modes with user preference persisted in localStorage.

* **Fully Responsive UI**
  Tailwind CSS handles layout and responsiveness cleanly across mobile, tablet, and desktop.

* **Component-Based UI**
  Reusable cards, lists, pagination controls, and layout components keep the codebase organized.

* **Centralized State Management**
  Pinia stores manage theme state and resume data loading in a predictable way.

* **Client-Side Routing**
  Vue Router enables smooth navigation between sections like Experience, Projects, and Education without page reloads.

* **Pagination for Large Sections**
  Custom pagination component keeps long experience or project lists readable.

---

## Tech Stack

| Category         | Tools                   |
| ---------------- | ----------------------- |
| Framework        | Vue 3 (Composition API) |
| Build Tool       | Vite                    |
| Language         | TypeScript              |
| Styling          | Tailwind CSS            |
| State Management | Pinia                   |
| Routing          | Vue Router              |
| i18n             | Vue-i18n                |
| UI Utilities     | Headless UI             |
| Icons            | Heroicons               |

---

## Project Structure

The project follows a standard, scalable Vue structure:

```
src/
├── assets/
│   ├── css/            # Global styles
│   ├── i18n/           # UI translation files
│   ├── img/            # Profile, company, and project images
│   └── json/           # Resume data (language-specific)
├── components/         # Reusable UI components
├── helpers/            # Utility functions
├── models/             # TypeScript interfaces and types
├── router/             # Vue Router setup
├── stores/             # Pinia stores (Theme, Resume)
├── views/              # Route-level components
├── App.vue             # Root component
└── main.ts             # Application entry point
```

This separation keeps UI, data, and logic cleanly isolated.

---

## Getting Started

### Prerequisites

* Node.js 18+ recommended
* npm or pnpm

### Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ansulagrawal/portfolio.git
   ```

2. **Move into the project directory**

   ```bash
   cd portfolio
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the dev server**

   ```bash
   npm run dev
   ```

The app will be running at:
`http://localhost:5173`

---

## Available Scripts

* `npm run dev`
  Starts the development server with hot module replacement.

* `npm run build`
  Builds an optimized production bundle.

* `npm run preview`
  Locally previews the production build.

* `npm run lint`
  Runs ESLint to enforce code quality and consistency.

---

## Customization Guide

This project is meant to be reused.

### 1. Update Resume Content

All content lives in:

```
src/assets/json/
```

Edit the language-specific files:

* `resume.en.json`
* `resume.hi.json`
* `resume.gu.json`

No Vue changes required.

---

### 2. Replace Images

Add or replace images in:

```
src/assets/img/
```

Update image paths directly in the JSON files.

---

### 3. Add or Modify Languages

* UI translations:
  `src/assets/i18n/<lang>.json`

* Resume content:
  `src/assets/json/resume.<lang>.json`

Then register the language in:

* `src/main.ts`
* `src/stores/ResumeStore.ts`

---

### 4. Theme and Styling

Tailwind configuration lives in:

```
tailwind.config.js
```

Light and dark theme colors are defined under `extend.colors`, making global restyling straightforward.

---

## License

This project is open-source and available under the MIT License.
Use it, fork it, or adapt it for your own portfolio.
