# shameen.info

Personal website built with **SvelteKit**, **Tailwind CSS v4**, and **Storybook**. (migrated from a legacy Knockout/Durandal + Gulp stack)

[![Deploy to GitHub Pages](https://github.com/shameen/shameen.info/actions/workflows/deploy.yml/badge.svg)](https://github.com/shameen/shameen.info/actions/workflows/deploy.yml)

---

## Tech Stack

- SvelteKit (static site generation via `adapter-static`)
- Tailwind CSS v4
- Storybook
- TypeScript
- Vite

---

## Dev Setup

### Pre-requisites

- [Node.js](https://nodejs.org/) v24 (or v22 LTS)

---

### Getting started

1. `npm i`

2. `npm run dev -- --open`

### Check Production Build

1. Build production version:

```sh
npm run build
```

2. Preview production build:

```sh
npm run preview
```

---

## Project Setup (recreate locally)

To recreate this project with the same configuration:

```sh
npx sv@0.15.4 create --template minimal --types ts --add prettier tailwindcss="plugins:none" storybook eslint --install npm shameen.info
```

---

## Deployment

Deployment is handled automatically via GitHub Actions on pushes to the `main` branch.

This project is configured for static deployment (e.g. GitHub Pages) using `adapter-static`.

Build output is fully prerendered and does not require a Node server.
