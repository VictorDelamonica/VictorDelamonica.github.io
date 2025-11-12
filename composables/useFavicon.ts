import {process} from "std-env";

/**
 * Composable to dynamically update favicon based on color mode
 * @returns Object with updateFavicon method
 */
export const useFavicon = () => {
  const colorMode = useColorMode()

  /**
   * Updates the favicon link element with the appropriate icon based on color mode
   */
  const updateFavicon = (): void => {
    if (!process.client) return

    try {
      const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
      if (favicon) {
          favicon.href = colorMode.value === 'dark' ? '/logo_dark.png' : '/logo.png'
      }
    } catch (error) {
      console.error('Error updating favicon:', error)
    }
  }

  // Watch for color mode changes and update favicon
  watch(() => colorMode.value, updateFavicon, { immediate: true })

  return {
    updateFavicon,
  }
}

