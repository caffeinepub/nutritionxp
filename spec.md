# Specification

## Summary
**Goal:** Make the NutritionXP storefront UI fully responsive across mobile, tablet, and desktop, integrating the provided HTML design into the existing React + Tailwind app without layout breakage or horizontal overflow.

**Planned changes:**
- Implement/port the provided storefront HTML into React + TypeScript components styled with Tailwind (using shadcn/ui composition where applicable).
- Refactor fixed/inline styles into responsive Tailwind classes (typography scale, spacing, grids/columns, image sizing with object-fit).
- Add a mobile-friendly header/navigation pattern (e.g., hamburger/collapsible menu) that keeps logo, nav links, and cart access usable on small screens.
- Update all key sections/pages to adapt cleanly at common breakpoints (Header/Nav, Hero, product grids, gallery/category scrollers, carousels/sliders, Why Choose, Footer/Contact form, Product Detail, Cart, Orders, notification popup).
- Ensure touch usability for core flows (tap target sizing/spacing, responsive cart and quantity controls, viewport-fit notification modal with reliable dismissal and scroll behavior).
- Apply a consistent dark fitness/performance theme across pages (colors/typography/components), avoiding blue/purple as primary accents.

**User-visible outcome:** The NutritionXP storefront works cleanly on phones, tablets, and desktops with readable text, stable layouts, responsive images, accessible navigation, and usable shopping flows (product detail, cart, orders, notifications) without horizontal scrolling.
