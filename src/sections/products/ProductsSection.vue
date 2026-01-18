<template>
  <SectionWrapper id="products">
    <div class="py-8">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
      >
        Our Products
      </h2>
      <p
        class="text-base sm:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
      >
        Browse our curated collection of quality products
      </p>

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ProductSkeleton v-for="i in 6" :key="i" />
      </div>

      <!-- Error State -->
      <div v-else-if="isError" class="text-center py-12">
        <p class="text-red-600 text-lg mb-4">Atemin lagi minum anasora</p>
        <BaseButton @click="refetch" variant="primary">Try Again</BaseButton>
      </div>

      <!-- Products Grid -->
      <div
        v-else-if="products && products.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600 text-lg">No products available</p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import SectionWrapper from "@/components/SectionWrapper.vue";
import BaseButton from "@/components/BaseButton.vue";
import ProductCard from "./components/ProductCard.vue";
import ProductSkeleton from "./components/ProductSkeleton.vue";
import { useProductsQuery } from "./queries/useProductsQuery";

const { data: products, isLoading, isError, refetch } = useProductsQuery();
</script>

# Add this to .gitignore
.env
