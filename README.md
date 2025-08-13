# WebAgency - Next.js Template

A modern, scalable Next.js template for web agencies built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based architecture** for scalability
- **Responsive design** out of the box
- **SEO optimized** with proper meta tags
- **Reusable UI components**
- **Organized project structure**

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/           # Page sections (Hero, ServicesGrid, etc.)
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── index.ts
├── constants/              # Static data and configuration
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
└── utils/                  # Helper functions
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Pages
Create new pages in the `src/app` directory following Next.js App Router conventions.

### Creating Components
- **UI Components**: Add to `src/components/ui/` for reusable elements
- **Sections**: Add to `src/components/sections/` for page sections
- **Layout Components**: Add to `src/components/` for structural elements

### Styling
The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`.

### Constants and Types
- Add navigation items to `src/constants/navigation.ts`
- Add service data to `src/constants/services.ts`
- Define new types in `src/types/index.ts`

## 🔧 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Heroicons](https://heroicons.com/) - SVG icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).