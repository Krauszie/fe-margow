<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'rounded-lg font-medium transition-all duration-200',
      'border-2 focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95',
      sizeClasses,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "outlineSecondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
});

const variantClasses = computed(() => {
  const variants = {
    primary:
      "bg-primary text-white border-primary hover:bg-white hover:text-primary focus:ring-primary",
    secondary:
      "bg-secondary text-gray-900 border-secondary hover:bg-white hover:text-secondary focus:ring-secondary",
    outline:
      "bg-transparent text-primary border-primary hover:bg-primary hover:text-white focus:ring-primary",
    outlineSecondary:
      "bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
  };
  return variants[props.variant];
});

const sizeClasses = computed(() => {
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  return sizes[props.size];
});
</script>
