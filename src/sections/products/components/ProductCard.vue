<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
  >
    <div class="aspect-square w-full overflow-hidden bg-gray-100">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-4 sm:p-6 flex-1 flex flex-col">
      <div class="flex items-center justify-between mb-2">
        <span
          class="text-xs sm:text-sm px-2 py-1 bg-purple-100 text-purple-600 rounded-full"
        >
          {{ product.category }}
        </span>
        <div class="flex items-center gap-1">
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
          <span class="text-sm text-gray-600">{{ product.rating }}</span>
        </div>
      </div>
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {{ product.name }}
      </h3>
      <p class="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-1">
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between mt-auto">
        <span class="text-xl sm:text-2xl font-bold text-gray-900">
          ${{ product.price.toFixed(2) }}
        </span>
        <BaseButton
          :variant="product.inStock ? 'primary' : 'secondary'"
          :disabled="!product.inStock"
          size="md"
        >
          {{ product.inStock ? "Add to Cart" : "Out of Stock" }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import type { Product } from "../products.types";

defineProps<{
  product: Product;
}>();
</script>
