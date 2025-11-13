# Guide de Contribution

Merci de votre intérêt pour contribuer à IncluSens ! Ce document vous guidera à travers le processus de contribution.

## 🚀 Démarrage Rapide

1. **Fork le projet**
   ```bash
   # Fork via l'interface GitHub
   ```

2. **Cloner votre fork**
   ```bash
   git clone https://github.com/votre-username/VictorDelamonica.github.io.git
   cd VictorDelamonica.github.io
   ```

3. **Installer les dépendances**
   ```bash
   npm install
   ```

4. **Créer une branche**
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

5. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

## 📝 Standards de Code

### TypeScript

- Utiliser TypeScript strict mode
- Typer toutes les fonctions et variables
- Utiliser des interfaces pour les props et les objets complexes

```typescript
// ✅ Bon
interface UserProps {
  name: string
  age: number
}

const user: UserProps = { name: 'John', age: 30 }

// ❌ Mauvais
const user = { name: 'John', age: 30 }
```

### Vue 3 Composition API

- Utiliser `<script setup lang="ts">`
- Préférer les composables aux mixins
- Utiliser `defineProps` avec TypeScript

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
```

### Styling

- Utiliser Tailwind CSS en priorité
- Classes personnalisées dans `<style scoped>` si nécessaire
- Suivre les conventions de nommage BEM pour les classes custom

### Nommage

- **Composants**: PascalCase (`PageTemplate.vue`)
- **Composables**: camelCase avec prefix `use` (`useFavicon.ts`)
- **Utils**: camelCase (`helpers.ts`)
- **Constants**: UPPER_SNAKE_CASE (`SITE_NAME`)
- **Types**: PascalCase avec suffix approprié (`PageTemplateProps`)

## 🧪 Tests

Avant de soumettre votre PR:

```bash
# Vérifier les erreurs TypeScript
npm run type-check

# Linter le code
npm run lint

# Corriger automatiquement
npm run lint:fix

# Tester le build
npm run build
```

## 📦 Structure des Commits

Utilisez des messages de commit clairs et descriptifs:

```
type(scope): description courte

Description détaillée si nécessaire

Fixes #123
```

### Types de commits

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, point-virgules manquants, etc.
- `refactor`: Refactoring du code
- `perf`: Amélioration des performances
- `test`: Ajout de tests
- `chore`: Maintenance

### Exemples

```
feat(header): ajouter le menu de navigation

Implémente un menu responsive avec support du dark mode
et animations fluides.

Fixes #45
```

```
fix(seo): corriger les meta tags Open Graph

Les images n'étaient pas correctement référencées
dans les meta tags og:image.
```

## 🎨 Guidelines UI/UX

### Accessibilité

- Toujours inclure des `aria-label` pour les boutons icons
- Utiliser des balises sémantiques HTML5
- Assurer un contraste suffisant (WCAG AA minimum)
- Tester la navigation au clavier

### Responsive Design

- Mobile-first approach
- Tester sur différentes tailles d'écran
- Utiliser les breakpoints Tailwind

### Dark Mode

- Toujours implémenter les styles pour les deux thèmes
- Utiliser les classes `dark:` de Tailwind
- Tester les deux modes

## 🔍 Revue de Code

Votre PR sera examinée selon:

1. **Qualité du code**: Respect des standards, lisibilité
2. **Tests**: Le code fonctionne-t-il comme prévu?
3. **Documentation**: Les changements complexes sont-ils documentés?
4. **Performance**: Impact sur les performances?
5. **Accessibilité**: Respect des standards WCAG

## 📚 Ressources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ Questions

Si vous avez des questions, n'hésitez pas à:

- Ouvrir une issue
- Contacter l'équipe via contact@inclusens.fr

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous la même licence que le projet.

---

Merci pour votre contribution ! 🎉

