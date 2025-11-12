# 🚀 Quick Start Guide

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/VictorDelamonica/VictorDelamonica.github.io.git
cd VictorDelamonica.github.io

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

## Development

```bash
# Start development server
npm run dev

# Open browser at http://localhost:3000
```

## Available Commands

```bash
# Development
npm run dev              # Start dev server with hot reload

# Building
npm run build           # Build for production
npm run generate        # Generate static site
npm run preview         # Preview production build

# Code Quality
npm run lint            # Check code with ESLint
npm run lint:fix        # Auto-fix ESLint issues
npm run type-check      # Check TypeScript types

# Utility Script
./scripts/dev.sh setup  # Complete project setup
./scripts/dev.sh check  # Run all checks
./scripts/dev.sh fix    # Fix code issues
./scripts/dev.sh clean  # Clean build artifacts
```

## Project Structure

```
.
├── assets/          # Static assets (fonts, CSS)
├── components/      # Vue components
├── composables/     # Reusable logic
├── constants/       # App constants
├── layouts/         # Page layouts
├── pages/           # Application pages (auto-routed)
├── public/          # Static files
├── types/           # TypeScript definitions
├── utils/           # Utility functions
└── app.vue          # Root component
```

## Key Features

✅ TypeScript strict mode
✅ ESLint + Prettier
✅ Dark mode support
✅ SEO optimized
✅ Fully responsive
✅ Accessible (WCAG 2.1)
✅ Performance optimized
✅ CI/CD ready

## Making Changes

### Add a New Page

1. Create file in `pages/` directory:
```vue
<!-- pages/my-page.vue -->
<template>
  <PageTemplate
    title="My Page"
    subtitle="Page description"
  >
    <p>Content here</p>
  </PageTemplate>
</template>

<script setup lang="ts">
useSeo({
  title: 'My Page',
  description: 'Page description'
})
</script>
```

2. Page is automatically available at `/my-page`

### Add a New Component

1. Create file in `components/` directory:
```vue
<!-- components/MyComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
interface Props {
  message: string
}

defineProps<Props>()
</script>
```

2. Component is auto-imported, use directly in templates:
```vue
<MyComponent message="Hello!" />
```

### Add a New Composable

1. Create file in `composables/` directory:
```typescript
// composables/useMyFeature.ts
export const useMyFeature = () => {
  const state = ref(0)
  
  const increment = () => {
    state.value++
  }
  
  return { state, increment }
}
```

2. Use in components:
```vue
<script setup lang="ts">
const { state, increment } = useMyFeature()
</script>
```

## Testing Your Changes

Before committing:

```bash
# 1. Check for errors
npm run lint
npm run type-check

# 2. Test build
npm run build

# 3. Preview
npm run preview
```

## Deployment

### Automatic (GitHub Actions)

Push to `main` branch - automatically deployed to GitHub Pages

### Manual

```bash
# Generate static site
npm run generate

# Deploy
npx gh-pages --dotfiles -d .output/public
```

## Common Issues

### Port Already in Use
```bash
# Change port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clean and rebuild
rm -rf .nuxt .output node_modules
npm install
npm run build
```

### Type Errors
```bash
# Regenerate types
npm run postinstall
```

## Resources

- 📖 [Full Documentation](./README.md)
- 🏗️ [Architecture Guide](./ARCHITECTURE.md)
- 🤝 [Contributing](./CONTRIBUTING.md)
- ⚡ [Performance Guide](./PERFORMANCE.md)

## Need Help?

- Check existing documentation files
- Review the code examples
- Contact: contact@inclusens.fr

---

Happy coding! 🎉

