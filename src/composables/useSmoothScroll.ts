import { useRouter } from "vue-router";
import { scrollToSection } from "@/utils/scrollToSection";
import { useUIStore } from "@/stores/ui.store";

export function useSmoothScroll() {
  const router = useRouter();
  const uiStore = useUIStore();

  const scrollTo = (sectionId: string) => {
    // Close mobile menu if open
    uiStore.closeMobileMenu();

    // Update URL hash
    router.push({ path: `/${sectionId}` });

    // Scroll to section
    scrollToSection(sectionId);
  };

  return {
    scrollTo,
  };
}
