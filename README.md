# Vue Scroll SPA

A modern **mobile-first, scroll-based Single Page Application (SPA)** built with **Vue 3 + TypeScript**, styled using **TailwindCSS**, and designed to scale cleanly from **mobile → tablet → desktop**.

---

## 📱 Mobile-First & Utility-First Styling

This project follows a **mobile-first responsive design** combined with a **utility-first CSS approach using TailwindCSS**:

- Mobile layouts are the default
- Responsive enhancements use Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- Touch-friendly spacing and typography
- Desktop-specific hover and focus states
- No custom CSS unless necessary

> Layout, spacing, and responsiveness are handled primarily through Tailwind utility classes.

---

## 🧩 Project Overview

This application is a **section-based SPA** where navigation is driven by scrolling instead of page transitions.

### Main Sections

1. **About**  
   Static content introducing the platform

2. **Articles**  
   Dynamic content fetched from an API and presented in a responsive layout

3. **Products**  
   Dynamic content displayed using a **card-based UI**, optimized for mobile and enhanced for desktop

Each section is implemented as a **self-contained feature**.

---

## 🛠 Tech Stack

- **Vue 3** (Composition API)
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **Vue Router** (hash-based navigation)
- **Pinia** (UI & scroll state)
- **@tanstack/vue-query** (server state & data fetching)

---

## 🧭 Application Behavior

- Single-page layout with **scroll-based navigation**
- URL hash synchronization:
  - `/#about`
  - `/#articles`
  - `/#products`
- Smooth scrolling between sections
- Scroll spy to detect and highlight the active section
- Responsive navigation (mobile-first, desktop-enhanced)

---

## 🗂 Folder Structure

src/
├─ sections/ # Main scroll sections
│ ├─ about/
│ │ ├─ AboutSection.vue
│ │ └─ about.types.ts
│ │
│ ├─ articles/
│ │ ├─ ArticlesSection.vue
│ │ ├─ components/
│ │ │ └─ ArticleCard.vue
│ │ ├─ queries/
│ │ │ └─ useArticlesQuery.ts
│ │ └─ articles.types.ts
│ │
│ └─ products/
│ ├─ ProductsSection.vue
│ ├─ components/
│ │ ├─ ProductCard.vue
│ │ └─ ProductSkeleton.vue
│ ├─ queries/
│ │ └─ useProductsQuery.ts
│ ├─ products.types.ts
│ └─ products.constants.ts
│
├─ components/ # Global reusable UI components
│ ├─ Navbar.vue
│ ├─ SectionWrapper.vue
│ ├─ ScrollToTop.vue
│ └─ BaseButton.vue
│
├─ composables/ # Global logic & hooks
│ ├─ useScrollSpy.ts
│ ├─ useSmoothScroll.ts
│ └─ useIntersection.ts
│
├─ queries/ # Vue Query core setup
│ └─ queryClient.ts
│
├─ stores/ # Pinia (UI & scroll state only)
│ ├─ scroll.store.ts
│ └─ ui.store.ts
│
├─ router/
│ └─ index.ts # Hash ↔ section synchronization
│
├─ services/ # API layer
│ ├─ http.ts
│ └─ products.service.ts
│
├─ styles/ # Minimal global styles
│ └─ main.css # Tailwind base / utilities
│
├─ utils/
│ └─ scrollToSection.ts
│
├─ App.vue
├─ main.ts
└─ env.d.ts

---

## 🧱 Products Section – Mobile-First Card Design

The **Products section** uses a **TailwindCSS-powered card layout**.

### Mobile (Default)

- Single-column layout (`grid-cols-1`)
- Full-width cards
- Large touch targets
- Vertical stacking

### Tablet & Desktop Enhancements

- Responsive grid (`md:grid-cols-2`, `lg:grid-cols-3`)
- Hover effects enabled on larger screens
- Improved spacing and typography

### Responsibilities

- `ProductsSection.vue` → layout & data orchestration
- `ProductCard.vue` → presentation-only UI
- `useProductsQuery.ts` → server data fetching
- `products.types.ts` → strict TypeScript models

---

## 📦 State Management Strategy

### Vue Query (Server State)

- Fetching and caching API data
- Loading and error handling
- Used for **Articles** and **Products**

### Pinia (UI State)

- Active scroll section
- Navigation state
- UI interactions

> Server data is **never stored in Pinia**.

---

## 🎯 Styling & Architectural Principles

- Mobile-first design approach
- Utility-first styling with TailwindCSS
- Feature-based folder structure
- Single Responsibility Principle
- Minimal custom CSS
- Clear separation between:
  - UI components
  - Scroll behavior
  - Server state
  - Global UI state

---

## 🚀 Future Enhancements

- Section lazy loading
- Intersection Observer-based animations
- Tailwind theme customization
- Responsive image optimization
- Modal previews for product cards
- Accessibility improvements

---

## Linting and Code Quality

This project uses ESLint to enforce consistent code style and best practices across JavaScript, TypeScript, and Vue files.

The README content follows clean formatting conventions. Markdown linting can be added using markdownlint if required.
