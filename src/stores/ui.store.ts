import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIStore = defineStore("ui", () => {
  const isMobileMenuOpen = ref(false);
  const isScrolling = ref(false);

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
  }

  function setScrolling(value: boolean) {
    isScrolling.value = value;
  }

  return {
    isMobileMenuOpen,
    isScrolling,
    toggleMobileMenu,
    closeMobileMenu,
    setScrolling,
  };
});
