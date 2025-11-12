# VictorDelamonica.github.io

A Work In Progress page for IncluSens built with Vue.js, Nuxt 3, and Tailwind CSS.

## Features

- 🚀 Built with Nuxt 3 (Vue.js framework)
- 🎨 Styled with Tailwind CSS
- 📦 Static Site Generation for GitHub Pages
- ⚡ Fast and modern development experience

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Generate the static site for deployment:

```bash
npm run generate
```

The generated files will be in the `.output/public` directory.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a deployment.

To enable GitHub Pages:
1. Go to your repository Settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source

## Project Structure

- `app/` - Application source code
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflow for deployment
- `nuxt.config.ts` - Nuxt configuration

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

