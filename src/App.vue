<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="pt-16">
      <AboutSection />
      <ArticlesSection />
      <ProductsSection />
    </main>
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import AboutSection from "@/sections/about/AboutSection.vue";
import ArticlesSection from "@/sections/articles/ArticlesSection.vue";
import ProductsSection from "@/sections/products/ProductsSection.vue";
import { useScrollSpy } from "@/composables/useScrollSpy";

// Initialize scroll spy
onMounted(() => {
  useScrollSpy(["about", "articles", "products"]);
});
</script>
