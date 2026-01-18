<template>
  <section :id="id" class="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>
