<template>
  <SectionWrapper id="about">
    <div
      class="flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6"
      >
        {{ content.title }}
        <sup class="text-lg align-super ml-0.5">™</sup>
      </h2>
      <p
        class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed px-4"
      >
        {{ content.description }}
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-4">
        <BaseButton variant="primary" size="lg" @click="scrollToArticles">
          Explore Articles
        </BaseButton>
        <BaseButton variant="outline" size="lg" @click="scrollToProducts">
          View Products
        </BaseButton>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";
import type { AboutContent } from "./about.types";

const { scrollTo } = useSmoothScroll();

const content = ref<AboutContent>({
  title: "MARGOW",
  description:
    "Slow Bar Coffee where stories are brewed and shared with a sprinkle of uncaniness. Dive into our world of unique blends, cozy vibes, and a touch of the extraordinary. Join us for a cup that’s more than just coffee – it’s an experience.",
});

const scrollToArticles = () => scrollTo("articles");
const scrollToProducts = () => scrollTo("products");
</script>
