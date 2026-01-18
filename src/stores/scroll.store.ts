import { defineStore } from "pinia";
import { ref } from "vue";

type Section = "about" | "articles" | "products";

export const useScrollStore = defineStore("scroll", () => {
  const activeSection = ref<Section>("about");

  function setActiveSection(section: Section) {
    activeSection.value = section;
  }

  return {
    activeSection,
    setActiveSection,
  };
});
