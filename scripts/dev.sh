#!/bin/bash

# Development helper script for IncluSens project

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

# Check if node_modules exists
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        print_error "Dependencies not installed"
        print_info "Run: npm install"
        exit 1
    fi
}

# Commands
case "$1" in
    "setup")
        print_info "Setting up project..."
        npm install
        print_success "Dependencies installed"

        if [ ! -f ".env" ]; then
            cp .env.example .env
            print_success "Created .env file"
        fi

        print_success "Setup complete! Run 'npm run dev' to start"
        ;;

    "clean")
        print_info "Cleaning project..."
        rm -rf node_modules .nuxt .output dist .cache
        print_success "Clean complete"
        ;;

    "reset")
        print_info "Resetting project..."
        rm -rf node_modules .nuxt .output dist .cache
        npm install
        print_success "Reset complete"
        ;;

    "check")
        check_dependencies
        print_info "Running checks..."

        print_info "Type checking..."
        npm run type-check || print_error "Type check failed"

        print_info "Linting..."
        npm run lint || print_error "Lint failed"

        print_success "All checks passed"
        ;;

    "fix")
        check_dependencies
        print_info "Fixing code issues..."
        npm run lint:fix
        print_success "Code fixed"
        ;;

    "build")
        check_dependencies
        print_info "Building project..."
        npm run generate
        print_success "Build complete"
        ;;

    *)
        echo "IncluSens Development Helper"
        echo ""
        echo "Usage: ./scripts/dev.sh [command]"
        echo ""
        echo "Commands:"
        echo "  setup   - Install dependencies and setup project"
        echo "  clean   - Remove build artifacts and node_modules"
        echo "  reset   - Clean and reinstall dependencies"
        echo "  check   - Run type check and linter"
        echo "  fix     - Auto-fix linting issues"
        echo "  build   - Build for production"
        ;;
esac

