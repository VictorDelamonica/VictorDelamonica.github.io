/**
 * CSP Configuration Plugin
 * Handles Content Security Policy for development and production
 */
import {process} from "std-env";

export default defineNuxtPlugin(() => {
  // In development, CSP warnings are expected due to:
  // - Vue DevTools
  // - Hot Module Replacement (HMR)
  // - Vite dev server

  // For production builds, Vue compiles templates and doesn't use eval

  if (process.client && process.dev) {
    // Suppress CSP warnings in development console
    const originalConsoleWarn = console.warn
    console.warn = (...args) => {
      const message = args[0]
      if (
        typeof message === 'string' &&
        message.includes('Content Security Policy')
      ) {
        // CSP warnings are expected in dev mode - they won't appear in production
        return
      }
      originalConsoleWarn.apply(console, args)
    }
  }
})

