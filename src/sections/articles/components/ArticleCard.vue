<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="aspect-video w-full overflow-hidden bg-gray-200">
      <img
        :src="article.imageUrl"
        :alt="article.title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-4 sm:p-6">
      <div class="flex items-center gap-2 mb-3">
        <span
          class="text-xs sm:text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
        >
          {{ article.category }}
        </span>
        <span class="text-xs sm:text-sm text-gray-500">{{ article.date }}</span>
      </div>
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {{ article.title }}
      </h3>
      <p class="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
        {{ article.excerpt }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">By {{ article.author }}</span>
        <BaseButton variant="outline" size="sm">Read More</BaseButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import type { Article } from "../articles.types";

defineProps<{
  article: Article;
}>();
</script>
