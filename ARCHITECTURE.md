# Architecture du Projet IncluSens

## 🏗️ Vue d'ensemble

Le projet est construit avec **Nuxt 3**, un framework Vue.js pour créer des applications web modernes, performantes et optimisées pour le SEO.

## 📂 Structure des Dossiers

### `/assets`
Ressources statiques compilées par le bundler (Vite).

- **`/css`**: Fichiers CSS globaux (fonts.css)
- **`/fonts`**: Polices personnalisées (Garet, Lazydog)
- **`/images`**: Images sources (logos)

### `/components`
Composants Vue réutilisables.

- **`PageTemplate.vue`**: Composant template principal pour les pages de contenu
- **`LoadingSpinner.vue`**: Composant de chargement global

**Best practices**:
- Un composant = une responsabilité
- Props typés avec TypeScript
- Documentation JSDoc pour les composants complexes

### `/composables`
Logique réutilisable avec la Composition API.

- **`useFavicon.ts`**: Gestion du favicon dynamique (dark/light mode)
- **`useSeo.ts`**: Gestion des meta tags SEO
- **`useScroll.ts`**: Utilitaires de scroll

**Naming convention**: `use` + nom descriptif en camelCase

### `/constants`
Valeurs constantes de l'application.

- **`index.ts`**: Configuration du site, URLs, valeurs par défaut

**Best practices**:
- Variables en UPPER_SNAKE_CASE
- Export named (pas de default)
- Utiliser `as const` pour les objets read-only

### `/layouts`
Templates de mise en page globaux.

- **`default.vue`**: Layout principal avec header (toggle dark mode) et transitions

**Fonctionnalités**:
- Toggle dark/light mode (top-right)
- Loading indicator pendant les transitions
- Wrapper pour toutes les pages

### `/pages`
Pages de l'application (routage automatique Nuxt).

#### Structure:
```
/pages
  ├── index.vue                 # Page d'accueil
  ├── association.vue           # Page association
  ├── /general                  # Sections page d'accueil
  │   ├── hero.vue
  │   ├── exposition.vue
  │   ├── tables.vue
  │   ├── circle.vue
  │   ├── alternative.vue
  │   └── application.vue
  └── /association              # Sections page association
      ├── history.vue
      ├── desk.vue
      ├── missions.vue
      ├── adhesion.vue
      ├── helper.vue
      └── dons.vue
```

**Routing**:
- `/` → index.vue
- `/association` → association.vue

### `/public`
Fichiers statiques servis directement (non traités par Vite).

- Favicon, robots.txt
- Images publiques
- Fichiers téléchargeables

### `/types`
Définitions TypeScript globales.

- **`index.ts`**: Interfaces et types partagés

**Best practices**:
- Interfaces pour les objets
- Types pour les unions/intersections
- Export named

### `/utils`
Fonctions utilitaires pures.

- **`helpers.ts`**: Fonctions helper (debounce, throttle, formatDate, etc.)

**Best practices**:
- Fonctions pures (pas d'effets de bord)
- Documentation JSDoc
- Tests unitaires

## 🔧 Configuration

### `nuxt.config.ts`
Configuration principale de Nuxt.

**Modules installés**:
- `@nuxtjs/tailwindcss`: Intégration Tailwind CSS
- `@nuxtjs/color-mode`: Support dark/light mode
- `@nuxtjs/mdc`: Markdown components

**Configuration importante**:
- `ssr: false`: Site statique (SPA)
- `nitro.preset: 'github_pages'`: Déploiement GitHub Pages
- Optimisations Vite pour le build
- SEO defaults (meta tags, Open Graph)

### `tailwind.config.js`
Configuration Tailwind CSS.

**Personnalisations**:
- Couleurs custom: `cream`, `coral`, `purple`
- Polices: `font-sans`, `font-lazydog`, `font-garet`
- Animations custom: `fade-in`, `fade-in-down`, `slide-in-right`
- Plugin typography pour le contenu MDC

### `tsconfig.json`
Configuration TypeScript (générée par Nuxt).

**Mode strict** activé pour une meilleure sécurité de type.

## 🎨 Système de Design

### Couleurs

```javascript
// Thème clair
cream: '#F7EDEA'    // Background
coral: '#F4A694'    // Accent principal
purple: '#8B7B8B'   // Accent secondaire

// Thème sombre
gray-900            // Background
gray-300            // Text
coral (inchangé)    // Accent principal
```

### Typographie

- **Font principale**: Inclusive Sans (Google Fonts)
- **Font handwritten**: Lazydog (custom)
- **Font display**: Garet (custom)

### Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Flux de Données

### Navigation
1. User clique sur un lien
2. Vue Router intercepte
3. Layout: `isLoading = true`
4. Nuxt charge la nouvelle page
5. Transition de page (fade)
6. Layout: `isLoading = false`

### Dark Mode
1. User clique sur toggle
2. `colorMode.preference` change
3. Tailwind applique classes `dark:`
4. `useFavicon()` met à jour le favicon
5. Transition CSS (duration: 300ms)

### SEO
1. Page composable appelle `useSeo()`
2. `useSeo()` configure `useHead()`
3. Nuxt génère les meta tags
4. Tags inclus dans le HTML statique

## 📊 Performance

### Optimisations implémentées:

1. **Code Splitting**
   - Chunking automatique par route
   - Lazy loading des composants lourds

2. **Assets**
   - Compression des images
   - Font display: swap
   - Preconnect Google Fonts

3. **CSS**
   - Tailwind JIT mode
   - Purge des classes inutilisées
   - CSS code split par route

4. **JavaScript**
   - Tree shaking
   - Minification
   - Dependency chunking (heroicons séparé)

## 🔒 Sécurité

- Pas de secrets côté client
- Validation TypeScript stricte
- Meta tags CSP-ready
- robots.txt configuré

## 📱 Progressive Web App (PWA)

Configuration future prévue:
- Service Worker
- Manifest.json
- Offline mode
- Install prompt

## 🧪 Testing Strategy

### Recommandations:

1. **Unit Tests** (utils, composables)
   - Vitest
   - Fonctions pures testées à 100%

2. **Component Tests**
   - Vue Test Utils
   - Tests de snapshot
   - Props validation

3. **E2E Tests**
   - Playwright
   - User flows critiques
   - Multi-browser

## 📈 Monitoring

### Recommandé:

- **Analytics**: Google Analytics ou Plausible
- **Error Tracking**: Sentry
- **Performance**: Lighthouse CI
- **Uptime**: UptimeRobot

## 🔄 CI/CD

### GitHub Actions Workflow

1. **Build**
   - Install dependencies
   - Run linter
   - Type check
   - Generate static site

2. **Deploy**
   - Upload to GitHub Pages
   - Deploy artifact

**Triggers**: Push sur `main` ou workflow_dispatch

## 📚 Dépendances

### Production
- `nuxt`: ^4.1.3
- `vue`: ^3.5.13
- `@heroicons/vue`: ^2.2.0
- `@nuxtjs/tailwindcss`: ^6.13.2
- `@nuxtjs/color-mode`: ^3.5.2

### Development
- `typescript`: ^5.3.3
- `eslint`: ^8.57.0
- `prettier`: ^3.2.5

## 🔮 Roadmap Technique

### Court terme
- [ ] Tests unitaires
- [ ] PWA configuration
- [ ] Analytics integration

### Moyen terme
- [ ] i18n (internationalization)
- [ ] CMS headless (Strapi/Contentful)
- [ ] Blog section

### Long terme
- [ ] User authentication
- [ ] Member portal
- [ ] Event management system

---

Pour toute question sur l'architecture, contactez l'équipe technique.

