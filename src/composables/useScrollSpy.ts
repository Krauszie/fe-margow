import { onMounted, onUnmounted, ref } from "vue";
import { useScrollStore } from "@/stores/scroll.store";
import { useRouter } from "vue-router";

type Section = "about" | "articles" | "products";

export function useScrollSpy(sectionIds: Section[]) {
  const scrollStore = useScrollStore();
  const router = useRouter();
  const observer = ref<IntersectionObserver | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const sectionId = entry.target.id as Section;
        scrollStore.setActiveSection(sectionId);
        router.replace({ path: `/${sectionId}` });
      }
    });
  };

  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-80px 0px -50% 0px",
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.value?.observe(element);
      }
    });
  });

  onUnmounted(() => {
    observer.value?.disconnect();
  });

  return {
    activeSection: scrollStore.activeSection,
  };
}
