# 🎯 Command Reference Card

Quick reference for all available commands in the IncluSens project.

## 📦 Installation

```bash
npm install              # Install dependencies
npm ci                   # Clean install (CI/CD)
```

## 🚀 Development

```bash
npm run dev              # Start dev server (http://localhost:3000)
npm run dev -- --port 3001  # Start on different port
```

## 🏗️ Building

```bash
npm run build            # Build for production
npm run generate         # Generate static site (for GitHub Pages)
npm run preview          # Preview production build locally
```

## 🧹 Code Quality

```bash
npm run lint             # Check code with ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run type-check       # Check TypeScript types
```

## 🔧 Maintenance

```bash
npm outdated             # Check for outdated packages
npm update               # Update packages
npm audit                # Check for vulnerabilities
npm audit fix            # Fix vulnerabilities
```

## 📝 Git Commands

```bash
git status               # Check status
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push origin main     # Push to main branch
git pull origin main     # Pull from main branch
```

## 🛠️ Helper Script (./scripts/dev.sh)

```bash
./scripts/dev.sh setup   # Complete project setup
./scripts/dev.sh check   # Run all checks (lint + typecheck)
./scripts/dev.sh fix     # Auto-fix code issues
./scripts/dev.sh clean   # Remove build artifacts
./scripts/dev.sh reset   # Clean + reinstall dependencies
./scripts/dev.sh build   # Build for production
```

## 🔍 Debugging

```bash
# Clean everything and start fresh
rm -rf node_modules .nuxt .output .cache
npm install
npm run dev

# Check what's taking space in bundle
npx vite-bundle-visualizer

# Analyze bundle size
npm run build
du -sh .output/public/*
```

## 📊 Testing & Analysis

```bash
# Lighthouse audit (after npm run preview)
npx lighthouse http://localhost:3000 --view

# Check accessibility
npx pa11y http://localhost:3000

# Performance testing
npm run build
npm run preview
# Then open Chrome DevTools > Lighthouse
```

## 🚢 Deployment

```bash
# Automatic (GitHub Actions)
git push origin main
# Watch deployment at: https://github.com/your-repo/actions

# Manual deployment
npm run generate
npx gh-pages --dotfiles -d .output/public
```

## 📦 Package Management

```bash
# Add new dependency
npm install package-name
npm install -D package-name  # Dev dependency

# Remove dependency
npm uninstall package-name

# List installed packages
npm list --depth=0

# Check package info
npm info package-name
```

## 🔄 Common Workflows

### Starting a new feature
```bash
git checkout -b feature/my-feature
npm run dev
# Make changes...
npm run lint:fix
npm run type-check
git add .
git commit -m "feat: add my feature"
git push origin feature/my-feature
```

### Before committing
```bash
npm run lint
npm run type-check
npm run build
```

### Fixing an issue
```bash
./scripts/dev.sh check
./scripts/dev.sh fix
npm run build
```

### Full reset
```bash
./scripts/dev.sh reset
npm run dev
```

## 🎨 Tailwind CSS

```bash
# See all available classes (optional)
npx tailwindcss --help

# Build CSS separately (not usually needed)
npx tailwindcss -i ./assets/css/main.css -o ./output.css
```

## 📱 Testing on Devices

```bash
# Find your local IP
ipconfig getifaddr en0  # macOS
ip addr show            # Linux

# Start dev server accessible on network
npm run dev -- --host

# Access from phone: http://YOUR_IP:3000
```

## 🐛 Troubleshooting

```bash
# Port already in use
PORT=3001 npm run dev

# Clear Nuxt cache
rm -rf .nuxt .output

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 18+
npm --version
```

## 📚 Help Commands

```bash
npm run --help           # List all npm scripts
npx nuxt --help         # Nuxt CLI help
npx vue --help          # Vue CLI help
npm help                # npm help
```

## ⚡ Quick Commands (Aliases)

Add these to your `~/.zshrc` or `~/.bashrc`:

```bash
alias dev="npm run dev"
alias build="npm run build"
alias lint="npm run lint"
alias fix="npm run lint:fix"
alias check="npm run type-check"
```

Then use:
```bash
dev      # Instead of npm run dev
build    # Instead of npm run build
lint     # Instead of npm run lint
fix      # Instead of npm run lint:fix
check    # Instead of npm run type-check
```

---

## 📖 More Help

- **Documentation**: See README.md
- **Quick Start**: See QUICKSTART.md
- **Architecture**: See ARCHITECTURE.md
- **Maintenance**: See MAINTENANCE.md

---

💡 **Pro Tip**: Keep this file open in a separate terminal window for quick reference!

