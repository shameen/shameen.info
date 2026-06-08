# shameen.info

Personal website built with **SvelteKit**, **Tailwind CSS v4**, and **Storybook**. (migrated from a legacy Knockout/Durandal + Gulp stack)

---

## Tech Stack

- SvelteKit (static site generation via `adapter-static`)
- Tailwind CSS v4
- Storybook
- TypeScript
- Vite

---

## Development

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev -- --open
```

Build production version:

```sh
npm run build
```

Preview production build:

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

This project is configured for static deployment (e.g. GitHub Pages) using `adapter-static`.

Build output is fully prerendered and does not require a Node server.
