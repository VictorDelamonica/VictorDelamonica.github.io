# Scripts

This folder contains utility scripts to help with development and maintenance.

## 📝 Available Scripts

### pre-commit.sh

Runs automated checks before committing code to ensure quality standards.

**What it checks:**
- ✅ Code quality with ESLint
- ✅ TypeScript type checking

**Usage:**

```bash
# Option 1: Run directly
./scripts/pre-commit.sh

# Option 2: Use npm script (recommended)
npm run pre-commit
```

**What happens on failure:**
- The script will exit with an error code
- You'll see which check failed
- Helpful suggestions for fixing issues

**What happens on success:**
- All checks pass ✨
- Reminders about manual checks (testing, commit message, CHANGELOG)
- You can proceed with your commit

### dev.sh

General development helper script.

**Usage:**

```bash
./scripts/dev.sh [command]

# Available commands:
./scripts/dev.sh setup   # Setup the project
./scripts/dev.sh check   # Run all checks
./scripts/dev.sh fix     # Auto-fix issues
./scripts/dev.sh clean   # Clean build artifacts
./scripts/dev.sh reset   # Reset node_modules
./scripts/dev.sh build   # Build the project
```

## 🔧 Creating New Scripts

When creating new scripts:

1. Add them to this folder
2. Make them executable: `chmod +x scripts/your-script.sh`
3. Start with a shebang: `#!/bin/bash`
4. Add clear comments and error handling
5. Document them in this README
6. Consider adding an npm script in `package.json`

## 💡 Tips

- Run `npm run pre-commit` before every commit
- Use `./scripts/dev.sh` for common development tasks
- All scripts use color-coded output for clarity
- Scripts exit with proper error codes for CI/CD integration

