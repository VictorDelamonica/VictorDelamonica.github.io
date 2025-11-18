<template>
  <PageTemplate
      subtitle="Le bureau"
      subtitle-style="handwritten"
  >
    <!-- 3-column grid layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12">
      <!-- Person 1 -->
      <div class="flex flex-col items-center text-center">
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#F4A694] shadow-lg">
          <img
            src="/public/clarisse_image.jpeg"
            alt="Nom Prénom 1"
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Clarisse HIKOUM
        </h3>
        <p class="text-lg text-[#8B7B8B] dark:text-[#B8A8B8] font-medium">
          Présidente
        </p>
      </div>

      <!-- Person 2 -->
      <div class="flex flex-col items-center text-center">
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#F4A694] shadow-lg">
          <img
            src="/public/yolen_image.jpeg"
            alt="Nom Prénom 2"
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Yolène LEGRIS
        </h3>
        <p class="text-lg text-[#8B7B8B] dark:text-[#B8A8B8] font-medium">
          Trésorière
        </p>
      </div>

      <!-- Person 3 -->
      <div class="flex flex-col items-center text-center">
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#F4A694] shadow-lg">
          <img
            src="/public/marine_image.jpeg"
            alt="Nom Prénom 3"
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Marine CHOSSON
        </h3>
        <p class="text-lg text-[#8B7B8B] dark:text-[#B8A8B8] font-medium">
          Secrétaire
        </p>
      </div>
    </div>
  </PageTemplate>
</template>

<script setup>
definePageMeta({layout: 'default'})
</script>

<style scoped>
/* Additional styling for the desk page */
h3 {
  font-family: 'Inclusive Sans', ui-sans-serif, system-ui, -apple-system;
  letter-spacing: 0.02em;
}

p {
  font-family: 'Inclusive Sans', ui-sans-serif, system-ui, -apple-system;
}

/* Image hover effect */
.overflow-hidden img {
  transition: transform 0.3s ease;
}

.overflow-hidden:hover img {
  transform: scale(1.1);
}
</style>
