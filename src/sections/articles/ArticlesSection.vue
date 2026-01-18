<template>
  <SectionWrapper id="articles">
    <div class="py-8">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
      >
        Latest Articles
      </h2>
      <p
        class="text-base sm:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
      >
        Discover insights, tutorials, and stories from our community
      </p>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
// import BaseButton from "@/components/BaseButton.vue";
import ArticleCard from "./components/ArticleCard.vue";
import type { Article } from "./articles.types";

// Commented out API fetching - enable when API is ready
// import { useArticlesQuery } from "./queries/useArticlesQuery";
// const { data: articles, isLoading, isError, refetch } = useArticlesQuery();

// Hardcoded mock data for development
const articles = ref<Article[]>([
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    date: "2024-01-15",
    imageUrl: "/article-placeholder.png",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Elit",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    date: "2024-01-12",
    imageUrl: "/article-placeholder.png",
    category: "Design",
  },
  {
    id: 3,
    title: "Sed Do Eiusmod Tempor",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Mike Johnson",
    date: "2024-01-10",
    imageUrl: "/article-placeholder.png",
    category: "Development",
  },
  {
    id: 4,
    title: "Ut Labore Et Dolore Magna",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Sarah Williams",
    date: "2024-01-08",
    imageUrl: "/article-placeholder.png",
    category: "Tutorial",
  },
  {
    id: 5,
    title: "Quis Nostrud Exercitation",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    author: "Tom Brown",
    date: "2024-01-05",
    imageUrl: "/article-placeholder.png",
    category: "News",
  },
  {
    id: 6,
    title: "Nemo Enim Ipsam Voluptatem",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam.",
    author: "Emily Davis",
    date: "2024-01-03",
    imageUrl: "/article-placeholder.png",
    category: "Design",
  },
]);
</script>
