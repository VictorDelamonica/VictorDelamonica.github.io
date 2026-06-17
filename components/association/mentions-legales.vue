<template>
  <PageTemplate
      subtitle="Mentions légales"
      subtitle-style="handwritten"
      :show-c-t-a="false"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
      <div v-for="item in items" :key="item.label" class="legal-card flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm">
        <div class="icon-wrap flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[#F4A694]/20">
          <component :is="item.icon" class="w-5 h-5 text-[#F4A694]" />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-1">{{ item.label }}</p>
          <p class="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100 leading-snug">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<script setup>
import { BuildingOffice2Icon, MapPinIcon, IdentificationIcon, HashtagIcon } from '@heroicons/vue/24/outline'

const items = [
  {
    icon: BuildingOffice2Icon,
    label: 'Forme juridique',
    value: 'Association à but non lucratif',
  },
  {
    icon: MapPinIcon,
    label: 'Adresse',
    value: '1 Pl. de l\'Étale, 74960 Annecy, France',
  },
  {
    icon: IdentificationIcon,
    label: 'SIRET',
    value: '992 052 431 00010',
  },
  {
    icon: HashtagIcon,
    label: 'RNA',
    value: 'W741011624',
  },
]
</script>
