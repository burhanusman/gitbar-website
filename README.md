# GitBar Website

Marketing website for [GitBar](https://github.com/burhanusman/gitbar) - an elegant macOS menu bar app for monitoring GitHub repositories.

## Tech Stack

- **Framework**: Next.js 16.1.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Features

- Dark mode only design
- Single-page application
- SEO optimized with Open Graph tags
- Responsive design
- Fast static generation
- Integrated analytics

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
gitbar-website/
├── app/
│   ├── layout.tsx      # Root layout with metadata & analytics
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles (dark mode)
│   └── favicon.ico     # Favicon
├── components/         # React components (empty for now)
├── public/            # Static assets
│   └── og-image.svg   # Social sharing image
├── SETUP.md           # Setup documentation
└── DEPLOY.md          # Deployment guide
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**Quick deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/burhanusman/gitbar-website)

## Domain

Recommended domain: **gitbar.app** (~$12/year from Namecheap)

See [SETUP.md](./SETUP.md) for domain configuration instructions.

## Contributing

This is a simple marketing site. Contributions welcome for:
- Design improvements
- Content updates
- Performance optimizations
- Bug fixes

## License

MIT

## Related

- [GitBar](https://github.com/burhanusman/gitbar) - Main macOS app repository
