<template>
  <div class="bg-[#F7EDEA] dark:bg-[#626c71] text-gray-900 dark:text-gray-100 font-sans">
    <!-- Sticky Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#eee3da] dark:bg-[#626c71] shadow-md border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-6 gap-2">
          <!-- Logo/Home Text (hidden on mobile) -->
          <div class="hidden md:inline-flex items-center gap-2 flex-shrink-0">
            <img
              src="/logo.png"
              alt="IncluSens Logo"
              class="h-10 w-auto dark:hidden"
            />
            <img
              src="/logo_dark.png"
              alt="IncluSens Logo"
              class="h-10 w-auto hidden dark:block"
            />
          </div>

          <!-- Section Links -->
          <ul ref="navList" class="flex overflow-x-auto scrollbar-hide space-x-2 md:space-x-4 flex-1 md:justify-center py-2 scroll-smooth">
            <li v-for="section in sections" :key="section.id">
              <a
                :ref="(el) => { if (el) navLinks[section.id] = el as HTMLElement }"
                :href="`#${section.id}`"
                @click.prevent="scrollToSection(section.id)"
                class="whitespace-nowrap px-4 py-2 rounded-2xl text-xs md:text-base font-medium transition-all duration-300 hover:bg-[#F4A694] hover:text-white"
                :class="activeSection === section.id ? 'bg-[#F4A694] text-white' : 'text-gray-700 dark:text-gray-300'"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>

          <!-- Theme Toggle Button -->
          <button
            type="button"
            @click="toggleColorMode"
            class="inline-flex items-center gap-2 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#626c71] hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F4A694] focus:ring-offset-2 flex-shrink-0"
            :aria-label="colorMode.value === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'"
          >
            <Transition name="icon-fade" mode="out-in">
              <component
                :is="colorMode.value === 'light' ? SunIcon : MoonIcon"
                :key="colorMode.value"
                class="w-5 h-5 text-yellow-500 dark:text-white transition-transform duration-500"
              />
            </Transition>
          </button>
        </div>
      </div>
    </nav>

    <!-- Add padding-top to account for fixed nav -->
    <main class="pt-14">
      <div class="opacity-100 animate-fade-in-down">
        <section id="accueil">
          <GeneralHero />
        </section>
        <section id="exposition">
          <GeneralExposition />
        </section>
        <section id="tables">
          <GeneralTables />
        </section>
        <section id="cercle">
          <GeneralCircle />
        </section>
        <section id="alternative">
          <GeneralAlternative />
        </section>
        <section id="application">
          <GeneralApplication />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const colorMode = useColorMode()

/**
 * Toggle between light and dark color modes
 */
const toggleColorMode = (): void => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Navigation sections
const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'exposition', label: 'Exposition' },
  { id: 'tables', label: 'Tables Rondes' },
  { id: 'cercle', label: 'Cercle de Parole' },
  { id: 'alternative', label: 'Alternatives' },
  { id: 'application', label: 'Application' },
]

const activeSection = ref('accueil')
const navList = ref<HTMLElement | null>(null)
const navLinks = ref<Record<string, HTMLElement>>({})

// Scroll active navigation link into view (for mobile horizontal scrolling)
const scrollActiveNavLinkIntoView = () => {
  if (!navList.value || !navLinks.value[activeSection.value]) return

  const activeLink = navLinks.value[activeSection.value]
  if (!activeLink) return

  const container = navList.value

  // Only auto-scroll on mobile/tablet (when overflow is active)
  if (window.innerWidth < 768) {
    const containerWidth = container.offsetWidth
    const linkLeft = activeLink.offsetLeft
    const linkWidth = activeLink.offsetWidth

    // Calculate scroll position to center the active link
    const scrollPosition = linkLeft - (containerWidth / 2) + (linkWidth / 2)

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }
}

// Watch for active section changes and scroll nav into view
watch(activeSection, () => {
  scrollActiveNavLinkIntoView()
})

// Smooth scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const navHeight = 80 // Approximate height of sticky nav
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Update active section on scroll
const updateActiveSection = () => {
  const navHeight = 140
  const scrollPosition = window.scrollY + navHeight

  for (let i = sections.length - 1; i >= 0; i--) {
    const currentSection = sections[i]
    if (!currentSection) continue

    const section = document.getElementById(currentSection.id)
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = currentSection.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})

// SEO metadata
useHead({
  title: 'IncluSens - Association pour la visibilité du handicap invisible',
  meta: [
    {
      name: 'description',
      content: '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités et accompagne patients, aidants et proches.',
    },
    {
      property: 'og:title',
      content: 'IncluSens - Association pour la visibilité du handicap invisible',
    },
    {
      property: 'og:description',
      content: '12 millions de personnes en France vivent avec un handicap invisible.',
    },
  ],
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}

/* Hide scrollbar for navigation */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Icon fade transition */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>

