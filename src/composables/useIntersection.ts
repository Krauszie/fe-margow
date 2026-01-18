import { onMounted, onUnmounted, ref, type Ref } from "vue";

export function useIntersection(
  elementRef: Ref<HTMLElement | null>,
  options?: IntersectionObserverInit,
) {
  const isVisible = ref(false);
  const hasBeenVisible = ref(false);
  const observer = ref<IntersectionObserver | null>(null);

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px",
    ...options,
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting;
      if (entry.isIntersecting) {
        hasBeenVisible.value = true;
      }
    });
  };

  onMounted(() => {
    if (elementRef.value) {
      observer.value = new IntersectionObserver(
        handleIntersection,
        defaultOptions,
      );
      observer.value.observe(elementRef.value);
    }
  });

  onUnmounted(() => {
    observer.value?.disconnect();
  });

  return {
    isVisible,
    hasBeenVisible,
  };
}
