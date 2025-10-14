# React + Vite + Tailwind CSS Project

A modern React application built with Vite for fast development and Tailwind CSS for styling.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks and functional components
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first responsive layouts
- 🔥 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Card.jsx        # Card component with Tailwind styling
│   └── Header.jsx      # Header component
├── App.jsx             # Main application component
├── index.css           # Global styles with Tailwind directives
└── main.jsx            # Application entry point
```

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js` and includes:

- Custom color schemes
- Responsive design utilities
- Component-based styling
- Dark mode support (ready to implement)

## Development

The project includes:

- **Hot Module Replacement** - Changes are reflected instantly
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Tailwind
- **Autoprefixer** - Automatic vendor prefixes

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)