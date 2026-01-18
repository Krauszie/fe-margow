import { createRouter, createWebHashHistory } from "vue-router";
import { useScrollStore } from "@/stores/scroll.store";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/about",
    },
    {
      path: "/about",
      name: "about",
      meta: { section: "about" },
    },
    {
      path: "/articles",
      name: "articles",
      meta: { section: "articles" },
    },
    {
      path: "/products",
      name: "products",
      meta: { section: "products" },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// Sync route hash with active section
router.afterEach((to) => {
  const scrollStore = useScrollStore();
  if (to.meta.section) {
    scrollStore.setActiveSection(
      to.meta.section as "about" | "articles" | "products",
    );
  }
});

export default router;
