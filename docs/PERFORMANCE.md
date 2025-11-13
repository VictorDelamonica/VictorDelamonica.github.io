# Performance Optimization Guide

## 🎯 Performance Goals

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: > 90

## ✅ Current Optimizations

### 1. Build Optimizations

#### Code Splitting
```typescript
// nuxt.config.ts
vite: {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'heroicons': ['@heroicons/vue'],
        },
      },
    },
  },
}
```

#### Tree Shaking
- Automatic dead code elimination
- Import only what you need from libraries

### 2. Asset Optimization

#### Images
- Use WebP format with PNG fallback
- Implement lazy loading for images below the fold
- Use appropriate image sizes for different viewports

```vue
<img
  src="/image.webp"
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
>
```

#### Fonts
- Use `font-display: swap` for custom fonts
- Preload critical fonts
- Self-host fonts when possible

```css
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* ✅ Prevents FOIT */
}
```

### 3. CSS Optimization

#### Tailwind JIT
- Only generates used classes
- Minimal CSS bundle size
- Automatic purging

#### Critical CSS
```typescript
// Future optimization
css: {
  postcss: {
    plugins: {
      'postcss-critical-split': {},
    },
  },
}
```

### 4. JavaScript Optimization

#### Lazy Loading Components
```vue
<script setup>
// Heavy component loaded only when needed
const HeavyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)
</script>
```

#### Dynamic Imports
```typescript
// Load only when route is accessed
const routes = [
  {
    path: '/heavy',
    component: () => import('./pages/heavy.vue')
  }
]
```

### 5. Network Optimization

#### Resource Hints
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- DNS prefetch for future navigation -->
<link rel="dns-prefetch" href="https://analytics.google.com">

<!-- Preload critical resources -->
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin>
```

#### Compression
```typescript
// nuxt.config.ts
nitro: {
  compressPublicAssets: true, // ✅ Gzip/Brotli compression
}
```

## 📊 Monitoring

### Lighthouse CI
Add to GitHub Actions:
```yaml
- name: Run Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun
```

### Web Vitals
```typescript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## 🚀 Future Optimizations

### 1. Service Worker (PWA)
```typescript
// Offline-first strategy
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    workbox: {
      navigateFallback: '/',
    },
  },
})
```

### 2. Image Optimization
```bash
npm install @nuxt/image
```

```typescript
// nuxt.config.ts
modules: ['@nuxt/image'],
image: {
  provider: 'cloudinary', // or 'imagekit', 'cloudflare'
}
```

### 3. Route Prefetching
```vue
<!-- Prefetch next likely page -->
<NuxtLink to="/association" prefetch>
  En savoir plus
</NuxtLink>
```

### 4. Database Caching
For future dynamic content:
- Redis for session storage
- CDN caching with proper headers
- Stale-while-revalidate strategy

### 5. Edge Functions
Deploy compute to edge locations:
```typescript
// server/api/example.ts
export default defineEventHandler(async (event) => {
  // Runs at the edge, close to users
  return { data: 'Fast response' }
})
```

## 🔍 Performance Checklist

### Before Deploy
- [ ] Run Lighthouse audit (all pages)
- [ ] Check bundle size (`npm run build`)
- [ ] Verify images are optimized
- [ ] Test on slow 3G network
- [ ] Check mobile performance
- [ ] Validate HTML
- [ ] Test dark mode transitions

### Regular Maintenance
- [ ] Update dependencies monthly
- [ ] Review bundle analyzer
- [ ] Monitor Core Web Vitals
- [ ] Check for unused CSS
- [ ] Audit third-party scripts
- [ ] Review network waterfalls

## 📈 Measuring Performance

### Local Testing
```bash
# Build and analyze
npm run build
npx vite-bundle-visualizer

# Test production build
npm run preview
```

### Tools
1. **Chrome DevTools**
   - Lighthouse
   - Performance tab
   - Network tab
   - Coverage tab

2. **WebPageTest**
   - https://www.webpagetest.org/
   - Test from multiple locations
   - Filmstrip view
   - Waterfall analysis

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Real user data (CrUX)
   - Recommendations

## 💡 Best Practices

### Component Design
```vue
<!-- ✅ Good: Small, focused component -->
<template>
  <button @click="emit('click')">
    {{ label }}
  </button>
</template>

<!-- ❌ Bad: Heavy component with many deps -->
<template>
  <div>
    <!-- Too much logic and dependencies -->
  </div>
</template>
```

### State Management
```typescript
// ✅ Good: Minimal state
const count = ref(0)

// ❌ Bad: Unnecessary reactivity
const config = ref({
  // Large static config object
})
```

### Event Handlers
```typescript
// ✅ Good: Debounced expensive operations
const search = debounce((query) => {
  // API call
}, 300)

// ❌ Bad: Direct expensive operation
const search = (query) => {
  // Runs on every keystroke
}
```

## 🎨 Performance vs UX

Balance performance with user experience:

1. **Animations**: Keep under 200ms
2. **Transitions**: Use CSS transforms (GPU accelerated)
3. **Loading States**: Show feedback within 100ms
4. **Skeleton Screens**: Better than spinners
5. **Optimistic Updates**: Update UI before API response

## 📚 Resources

- [web.dev - Performance](https://web.dev/performance/)
- [Nuxt Performance](https://nuxt.com/docs/guide/concepts/rendering)
- [Vue Performance](https://vuejs.org/guide/best-practices/performance.html)
- [Web Vitals](https://web.dev/vitals/)

---

Performance is a feature, not an afterthought! 🚀

