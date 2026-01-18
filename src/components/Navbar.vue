<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="shrink-0">
          <h1 class="text-xl sm:text-2xl font-bold text-secondary">Margow</h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="scrollTo(section.id)"
            :class="[
              'px-3 py-2 text-sm font-medium transition-colors',
              activeSection === section.id
                ? 'text-secondary border-b-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600',
            ]"
          >
            {{ section.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="uiStore.toggleMobileMenu()"
          class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!uiStore.isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="uiStore.isMobileMenuOpen"
      class="md:hidden border-t border-gray-200 bg-white"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollTo(section.id)"
          :class="[
            'block w-full text-left px-3 py-2 rounded-md text-base font-medium',
            activeSection === section.id
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-700 hover:bg-gray-50',
          ]"
        >
          {{ section.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSmoothScroll } from "@/composables/useSmoothScroll";
import { useScrollStore } from "@/stores/scroll.store";
import { useUIStore } from "@/stores/ui.store";
import { storeToRefs } from "pinia";

const sections = [
  { id: "about", label: "About" },
  { id: "articles", label: "Articles" },
  { id: "products", label: "Products" },
];

const { scrollTo } = useSmoothScroll();
const scrollStore = useScrollStore();
const uiStore = useUIStore();
const { activeSection } = storeToRefs(scrollStore);
</script>
