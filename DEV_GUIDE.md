# Vue Scroll SPA - Development Guide

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and set your API URL:

```
VITE_API_URL=https://your-api-url.com
```

### 3. Run Development Server

```bash
npm run dev
```

## Mock Data Setup

For testing without a real API, you can modify the services to use mock data:

### Example Mock Data

Create `src/services/mockData.ts`:

```typescript
import type { Product } from "@/sections/products/products.types";
import type { Article } from "@/sections/articles/articles.types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with fitness tracking",
    price: 299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    inStock: true,
    rating: 4.8,
  },
  // Add more products...
];

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Getting Started with Vue 3",
    excerpt: "Learn the fundamentals of Vue 3 and the Composition API",
    author: "John Doe",
    date: "2024-01-15",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind",
    excerpt: "Master mobile-first design with TailwindCSS utilities",
    author: "Jane Smith",
    date: "2024-01-10",
    imageUrl:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
    category: "Design",
  },
  // Add more articles...
];
```

Then modify the services to use mock data:

```typescript
// src/services/products.service.ts
import { mockProducts } from "./mockData";

export const productsService = {
  async getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockProducts;
  },
  // ...
};
```

## Project Structure

- `/src/sections/` - Main scroll sections (About, Articles, Products)
- `/src/components/` - Reusable UI components
- `/src/composables/` - Vue composables for shared logic
- `/src/stores/` - Pinia stores for UI state
- `/src/services/` - API services
- `/src/router/` - Vue Router configuration

## Key Features

- ✅ Mobile-first responsive design
- ✅ Smooth scroll navigation
- ✅ Hash-based routing
- ✅ Scroll spy with section highlighting
- ✅ Vue Query for data fetching
- ✅ Pinia for state management
- ✅ TailwindCSS for styling
- ✅ TypeScript for type safety

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Next Steps

1. Connect to your real API by updating the service files
2. Customize the styling in TailwindCSS
3. Add more sections as needed
4. Implement authentication if required
5. Add unit tests with Vitest
