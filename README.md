# Property Recommendations App

A modern Next.js application for property recommendations with AI-powered features.

## Features

- Property listings and recommendations
- AI-powered personalized recommendations
- Modern UI with Tailwind CSS and shadcn/ui components
- Responsive design
- Static site generation for GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `github-pages` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://yourusername.github.io/Artur`

## Project Structure

- `src/app/` - Next.js app directory
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and data
- `src/types/` - TypeScript type definitions
- `public/` - Static assets
