<template>
  <div class="min-h-screen bg-cream dark:bg-gray-900 flex items-center justify-center px-6">
    <div class="max-w-2xl w-full text-center">
      <!-- Error Code -->
      <h1 class="text-9xl font-black text-coral dark:text-coral mb-4">
        {{ error?.statusCode || '404' }}
      </h1>

      <!-- Error Message -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {{ errorTitle }}
      </h2>

      <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
        {{ errorMessage }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-md hover:bg-coral-dark transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Retour à l'accueil
        </NuxtLink>

        <button
          type="button"
          @click="handleError"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 dark:border-gray-500 text-gray-700 dark:text-gray-300 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Réessayer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error?: {
    statusCode?: number
    message?: string
  }
}

const props = defineProps<ErrorProps>()

// Compute error title based on status code
const errorTitle = computed(() => {
  const statusCode = props.error?.statusCode
  switch (statusCode) {
    case 404:
      return 'Page non trouvée'
    case 500:
      return 'Erreur serveur'
    case 403:
      return 'Accès refusé'
    default:
      return 'Une erreur est survenue'
  }
})

// Compute error message
const errorMessage = computed(() => {
  const statusCode = props.error?.statusCode
  switch (statusCode) {
    case 404:
      return 'La page que vous recherchez semble introuvable. Elle a peut-être été déplacée ou supprimée.'
    case 500:
      return 'Nous rencontrons des difficultés techniques. Veuillez réessayer dans quelques instants.'
    case 403:
      return 'Vous n\'avez pas les permissions nécessaires pour accéder à cette page.'
    default:
      return props.error?.message || 'Une erreur inattendue s\'est produite. Veuillez réessayer.'
  }
})

// Handle error action
const handleError = () => {
  clearError({ redirect: '/' })
}

// SEO
useHead({
  title: 'Erreur',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

