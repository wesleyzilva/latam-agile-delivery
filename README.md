# latam-agile-delivery

A Next.js 15 + Tailwind CSS v4 landing page with a responsive mobile-optimised sidebar navigation.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Sidebar Navigation Features

- Hamburger button (top-left) opens the sidebar with a smooth slide-in animation
- Menu items: Home, About, Services, Portfolio, Blog, Contact — each scrolls to its section
- Close button (✕) inside the sidebar, or click the overlay, or press **Escape** to close
- Google Analytics event tracking on each menu item click
- Fully accessible: `aria-label`, keyboard navigation (Tab / Enter / Escape)
