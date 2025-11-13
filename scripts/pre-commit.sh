#!/bin/bash

# 🚀 Pre-Commit Checks Script
# Run this before each commit to ensure code quality

set -e  # Exit on any error

echo "🔍 Running pre-commit checks..."
echo ""

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Track if any checks fail
CHECKS_PASSED=true

# Function to print section headers
print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# Function to print success
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Function to print error
print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check 1: Run linter
print_header "1/2 Checking code quality (ESLint)"
if npm run lint; then
    print_success "Code quality check passed"
else
    print_error "Linting failed. Run 'npm run lint:fix' to auto-fix issues."
    CHECKS_PASSED=false
fi
echo ""

# Check 2: Run type-check
print_header "2/2 Checking TypeScript types"
if npm run type-check; then
    print_success "Type checking passed"
else
    print_error "Type checking failed. Fix TypeScript errors before committing."
    CHECKS_PASSED=false
fi
echo ""

# Summary
print_header "Summary"
if [ "$CHECKS_PASSED" = true ]; then
    print_success "All pre-commit checks passed! ✨"
    echo ""
    echo -e "${GREEN}You can now commit your changes.${NC}"
    echo ""
    echo -e "${YELLOW}Remember to:${NC}"
    echo "  • Test the feature you're working on"
    echo "  • Write a clear commit message"
    echo "  • Update CHANGELOG.md if needed"
    echo ""
    exit 0
else
    print_error "Some checks failed. Please fix the issues before committing."
    echo ""
    echo -e "${YELLOW}Quick fixes:${NC}"
    echo "  • Run 'npm run lint:fix' to auto-fix linting issues"
    echo "  • Check TypeScript errors in your editor"
    echo "  • Review the error messages above"
    echo ""
    exit 1
fi

