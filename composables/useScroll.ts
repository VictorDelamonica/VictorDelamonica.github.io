/**
 * Composable for smooth scrolling to elements or positions
 */
import {process} from "std-env";
export const useScroll = () => {
  /**
   * Scroll to a specific element by selector
   * @param selector - CSS selector of the target element
   * @param offset - Optional offset from the top in pixels
   */
  const scrollToElement = (selector: string, offset: number = 0): void => {
    if (!process.client) return

    try {
      const element = document.querySelector(selector)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } catch (error) {
      console.error('Error scrolling to element:', error)
    }
  }

  /**
   * Scroll to the top of the page
   */
  const scrollToTop = (): void => {
    if (!process.client) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /**
   * Check if an element is in viewport
   * @param selector - CSS selector of the element to check
   * @returns Boolean indicating if an element is in viewport
   */
  const isInViewport = (selector: string): boolean => {
    if (!process.client) return false

    try {
      const element = document.querySelector(selector)
      if (!element) return false

      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    } catch (error) {
      console.error('Error checking viewport:', error)
      return false
    }
  }

  return {
    scrollToElement,
    scrollToTop,
    isInViewport,
  }
}

