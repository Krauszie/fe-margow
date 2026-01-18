export const PRODUCT_CATEGORIES = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports",
  "Books",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
