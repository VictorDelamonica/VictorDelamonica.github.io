# IncluSens - Site Web Officiel

Site web de l'association IncluSens, dédiée à la visibilité du handicap invisible en France.

## 🎯 À propos

IncluSens est une association qui vise à rendre visibles les réalités du handicap invisible, créer des passerelles entre le vécu et la société, et offrir un espace où la parole, la sensibilisation et la compréhension trouvent toute leur place.

## 🚀 Stack Technique

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement sur http://localhost:3000
npm run dev

# Construire pour la production
npm run build

# Générer le site statique
npm run generate

# Prévisualiser la version de production
npm run preview
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run generate` - Génère le site statique
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run type-check` - Vérifie les types TypeScript

## 📁 Structure du Projet

```
.
├── assets/          # Ressources statiques (fonts, images, CSS)
├── components/      # Composants Vue réutilisables
├── composables/     # Composables Vue (logique réutilisable)
├── constants/       # Constantes de l'application
├── layouts/         # Layouts de page
├── pages/           # Pages du site (routage automatique)
├── public/          # Fichiers publics statiques
├── types/           # Définitions TypeScript
├── utils/           # Fonctions utilitaires
├── app.vue          # Composant racine
├── nuxt.config.ts   # Configuration Nuxt
└── tailwind.config.js # Configuration Tailwind CSS
```

## 🎨 Fonctionnalités

- ✅ Mode sombre/clair automatique
- ✅ Design responsive
- ✅ Optimisé pour le SEO
- ✅ Performance optimale
- ✅ Accessibilité (WCAG 2.1)
- ✅ TypeScript strict
- ✅ Animations fluides
- ✅ PWA ready

## 🌐 Déploiement

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions lors d'un push sur la branche `main`.

## 📝 Conventions de Code

- **TypeScript**: Mode strict activé
- **ESLint**: Configuration Nuxt + Vue 3 + Prettier
- **Commits**: Messages en français, descriptifs et clairs
- **Composants**: PascalCase pour les noms de fichiers
- **Props**: TypeScript interfaces pour la validation

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est la propriété de l'association IncluSens. Tous droits réservés.

## 📧 Contact

Pour toute question concernant le site web, veuillez contacter : contact@inclusens.fr

---

Développé avec ❤️ pour l'association IncluSens

