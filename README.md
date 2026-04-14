# Zilkreol — Luxury Fashion E-Commerce

A premium clothing e-commerce website built with React, TypeScript, and Tailwind CSS. Zilkreol is a fictional luxury fashion house offering curated collections of dresses, outerwear, footwear, jewelry, perfumes, and more.

---

## Tech Stack

- **React 18** with **TypeScript**
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** as the build tool

---

## Features

- **Full product catalogue** — 57+ products across 10 categories with images, descriptions, materials, sizes, and reviews
- **Shop page** — browse all products with category filtering, sorting, quick-add to cart, and wishlist toggle
- **Product detail page** — image gallery with thumbnails, size selector, quantity picker, tabbed description/materials/reviews, and related products
- **Search** — live search across product names, categories, and descriptions
- **Cart** — add, remove, and manage items
- **Wishlist** — session-based wishlist (clears on exit), no login required
- **Category pages** — dedicated pages for Dresses, Outerwear, Tops, Bottoms, Coords, Beachwear, Footwear, Jewelry, and Perfumes
- **Footer pages** — Personal Stylist, Shipping & Returns, FAQ, Heritage, Art of Craft, Sustainability, Careers, Press, Privacy Policy, Terms of Use, Cookie Policy, Accessibility
- **Book Appointment**, **Store Locator**, and **Contact** pages
- **Authentication** — mock login/signup flow with user profile

---

## Project Structure

```
src/
├── assets/              # Local hero images
├── components/
│   └── layout/          # Layout, Navbar, Footer
├── context/
│   ├── AuthContext.tsx  # Mock authentication
│   ├── CartContext.tsx  # Shopping cart state
│   └── WishlistContext.tsx  # Session wishlist state
├── data/
│   └── products.ts      # Full product catalogue
├── pages/               # All route pages
│   ├── Home.tsx
│   ├── Shop.tsx         # Full collection with filters
│   ├── ProductPage.tsx
│   ├── Search.tsx
│   ├── Wishlist.tsx
│   ├── Cart.tsx
│   └── ...              # Category + footer pages
├── types/
│   └── index.ts         # TypeScript types
├── App.tsx              # Route definitions
├── declarations.d.ts    # Image file type declarations
└── main.tsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Product Categories

| Category | Route |
|---|---|
| Full Collection | `/shop` |
| New Arrivals | `/new` |
| Dresses | `/dresses` |
| Outerwear | `/outerwear` |
| Tops | `/tops` |
| Bottoms | `/bottoms` |
| Coords | `/coords` |
| Beachwear | `/beachwear` |
| Footwear | `/footwear` |
| Jewelry | `/jewelry` |
| Perfumes | `/perfumes` |

---

## Notes

- The wishlist is **session-only** — it resets when the browser tab is closed. No backend or localStorage is used for wishlist data.
- Authentication is **mocked** — no real backend exists. Login/signup creates a temporary in-memory user stored in localStorage.
- All product images are sourced from Pinterest and Unsplash for demonstration purposes.
- The site is fully responsive across mobile, tablet, and desktop.

---

*Zilkreol — The Art of Elegance.*

View live website at: https://perrineorphelie.github.io/Zilkreol_luxuryClothing/
