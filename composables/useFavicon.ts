export const useFavicon = () => {
  const colorMode = useColorMode()

  const updateFavicon = () => {
    if (process.client) {
      const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement
      if (favicon) {
        favicon.href = colorMode.value === 'dark' ? '/logo_dark.png' : '/logo.png'
      }
    }
  }

  // Watch for color mode changes
  watch(() => colorMode.value, updateFavicon, { immediate: true })

  return {
    updateFavicon
  }
}

