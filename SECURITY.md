## Security Policy

### Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

1. **DO NOT** open a public issue
2. Email the details to: contact@inclusens.fr
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Time

- Initial response: Within 48 hours
- Status update: Within 7 days
- Fix deployment: Depends on severity

### Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

### Security Best Practices

This project follows these security practices:

- No sensitive data in client-side code
- TypeScript strict mode for type safety
- Regular dependency updates
- CSP-ready meta tags
- No inline scripts in production
- Sanitized user inputs (where applicable)

Thank you for helping keep IncluSens secure!
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-12

### Added
- Initial professional v1 release
- TypeScript strict mode implementation
- Comprehensive type definitions
- ESLint and Prettier configuration
- Professional README and documentation
- Architecture documentation
- Contributing guidelines
- SEO composable for better meta tag management
- Scroll utilities composable
- Helper utilities (debounce, throttle, etc.)
- Error page component with proper error handling
- Loading spinner component
- GitHub Actions CI/CD workflow
- Environment variables example file
- Improved Tailwind configuration with custom animations
- Better accessibility features (ARIA labels, semantic HTML)
- Dark mode with dynamic favicon
- Page transition animations

### Changed
- Migrated all components to TypeScript
- Improved PageTemplate component with proper types
- Enhanced default layout with better accessibility
- Refactored page components to remove redundant imports
- Updated nuxt.config.ts with better SEO defaults
- Improved color palette and design tokens

### Fixed
- Removed unused imports from page components
- Fixed layout not properly wrapping content
- Improved error handling across composables

## [0.1.0] - Previous

### Added
- Basic Nuxt 3 setup
- Initial pages and components
- Dark mode support
- Basic styling with Tailwind CSS

