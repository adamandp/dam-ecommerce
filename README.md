# 🍦 CreamyCream

**CreamyCream** is a premium, full-featured e-commerce storefront focused on handcrafted ice cream products. Built with **Next.js 16**, **React 19**, and **Redux Toolkit**, this project showcases a complete shopping experience — from product browsing to checkout — powered by a fully simulated backend using **Mock Service Worker (MSW)**.

🔗 **Live Demo**
[https://dam-creamy-cream.vercel.app/](https://dam-creamy-cream.vercel.app/)

💻 **Source Code**
[https://github.com/adamandp/dam-creamy-cream](https://github.com/adamandp/dam-creamy-cream)

---

## ✨ Features

- 🛍️ **Dynamic Product Showcase**
  High-quality product presentation with interactive carousels powered by _Embla Carousel_

- 🔎 **Advanced Filtering & Search**
  Filter products by category (Vegan, Classic, Milkshake, etc.) and price range

- 🧺 **Persistent Cart System**
  Real-time cart updates (add/remove/update quantity) using **Redux Toolkit**

- 💳 **Multi-step Checkout Flow**
  - Cart summary with pricing breakdown
  - Shipping & courier selection
  - Payment method simulation (E-Wallet, Bank Transfer, OTC)

- 🔌 **Full-Stack Simulation (MSW)**
  Decoupled frontend architecture with a mocked API layer for realistic development

- 🎬 **Smooth Animations**
  Fluid transitions using **Framer Motion** and `tw-animate-css`

---

## 🛠 Tech Stack

### Core

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**

### State Management

- **Redux Toolkit** → Global state (Cart & Checkout)
- **TanStack Query v5** → Server state (Products, API data)

### UI & Styling

- **Tailwind CSS 4**
- **shadcn/ui**
- **Radix UI**

### Data Layer

- **Axios**
- **Mock Service Worker (MSW)**

### Animations

- **Framer Motion**
- **Embla Carousel**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm

---

### Installation

```bash
# Clone repository
git clone https://github.com/adamandp/dam-creamy-cream.git

# Navigate to project
cd dam-creamy-cream

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

App will run on:

```
http://localhost:3000
```

---

## 🐳 Docker Support

```bash
# Build image
docker build -t dam-creamy-cream .

# Run container
docker run -p 3000:3000 dam-creamy-cream
```

---

## 📂 Project Structure

```
src/
├── app/          # App Router (route groups, layouts, pages)
├── components/   # UI components & feature components
├── hooks/        # Custom hooks (logic abstraction)
├── lib/          # Core configs (Axios, Redux store, query client)
├── mocks/        # MSW handlers & mock API definitions
├── services/     # API abstraction layer
├── types/        # Global TypeScript types
└── utils/        # Helper functions & formatters
```

---

## 🧠 Architecture Notes

- **Separation of Concerns**
  - TanStack Query → handles all server state (products, API data)
  - Redux Toolkit → handles client state (cart, checkout)

- **MSW as Mock Backend**
  - Simulates real API responses
  - Enables full frontend development without backend dependency
  - Improves testing and developer experience

- **Scalable Structure**
  - Route grouping `(main)` keeps domain separation clean
  - Services layer abstracts API calls for future backend integration

---

## 🚧 Future Improvements

- Integration with real backend services
- Authentication & user session management
- Order history & user dashboard
- Performance optimization (SSR caching, image optimization)

## 🏗 Coding Standards

### 1. State Management Strategy

- **Server State** → Use _TanStack Query_
- **Global Client State** → Use _Redux Toolkit_ (Cart & Checkout only)
- **Local State** → Use `useState` for UI-only interactions

---

### 2. Component Architecture

- Place features under `src/app/(main)/`
- Reusable UI → `src/components/ui/`
- Extract logic >20 lines into `src/hooks/`

---

### 3. Styling Guidelines

- Use **Tailwind CSS 4** utilities
- Follow design tokens (purple/pink theme)
- Always build **mobile-first**

---

## 🌿 Git Workflow

### Commit Convention (Conventional Commits)

```
feat: add e-wallet payment selection
fix: resolve cart duplication issue
refactor: improve checkout state handling
```

---

## 🛠 Validation

Before pushing:

```bash
pnpm lint
pnpm build
```

## 👤 Author

Developed by **Adam Andana Putra**

---
