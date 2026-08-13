# Investment Dashboard — NVDA Stats

A light-themed investment/stock analytics dashboard built with Next.js 14+, TypeScript (strict), and Tailwind CSS v4. Displays NVIDIA stock metrics, price targets, analyst ratings, and earnings data.

## Tech Stack

| Concern         | Choice                            |
|-----------------|-----------------------------------|
| Framework       | Next.js 15 (App Router)          |
| Language        | TypeScript (strict mode)          |
| Styling         | Tailwind CSS v4                   |
| Charts          | recharts                          |
| Icons           | lucide-react                      |
| Class merging   | clsx + tailwind-merge → `cn()`    |
| Fonts           | next/font — Inter                 |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
├── app/
│   ├── layout.tsx               # Root layout with Inter font & SEO metadata
│   ├── page.tsx                 # Dashboard page — composes all panels
│   └── globals.css              # Tailwind v4 @theme tokens & base styles
├── components/
│   ├── layout/
│   │   ├── side-nav.tsx         # Collapsible sidebar (data-driven nav)
│   │   └── top-bar.tsx          # Search, Invest CTA, icon buttons, user menu
│   ├── dashboard/
│   │   ├── stats-panel.tsx      # 8-card responsive grid of metrics
│   │   ├── stat-card.tsx        # Individual metric card (dot + value + delta)
│   │   ├── price-target-card.tsx # Area chart with gradient, reference lines
│   │   ├── analyst-rating-card.tsx # Solid+hatch horizontal bar ratings
│   │   ├── analyst-rating-bar.tsx  # Custom bar primitive (CSS, not recharts)
│   │   └── earnings-card.tsx    # Scatter + trend line chart
│   └── ui/
│       ├── card.tsx             # Base card container
│       ├── section-header.tsx   # Title + overflow menu
│       ├── icon-button.tsx      # Circular icon button
│       └── legend-item.tsx      # Dot + label + value
├── lib/
│   ├── utils.ts                 # cn() helper (clsx + tailwind-merge)
│   ├── nav-config.ts            # Sidebar nav items configuration
│   └── mock-data.ts             # Typed mock data for all panels
├── types/
│   └── dashboard.ts             # TypeScript interfaces
└── tailwind.config.ts           # (Tailwind v4 uses CSS-based config)
```

## Connecting Real Data

All mock data lives in `lib/mock-data.ts`, typed against interfaces in `types/dashboard.ts`. To connect a real market-data API:

1. Create an API route in `app/api/` or fetch server-side in `app/page.tsx`
2. Replace mock data imports with fetched data
3. The component interfaces remain unchanged — just pass different data props

## Design System

- **Theme**: Light (near-white background, white cards, indigo/violet accents)
- **Colors**: Defined as CSS custom properties in `globals.css` via `@theme`
- **Typography**: Inter font, tabular numerals for financial data
- **Components**: All primitives are hand-built (no UI kit dependency)

## Scripts

| Command         | Description                |
|-----------------|----------------------------|
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build           |
| `npm start`     | Start production server    |
| `npm run lint`  | Run ESLint                 |
