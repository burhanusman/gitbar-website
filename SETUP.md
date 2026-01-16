# GitBar Website Setup Guide

This is the marketing website for GitBar, built with Next.js 14+.

## Project Structure

```
gitbar-website/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles (dark mode only)
├── components/          # React components
├── public/             # Static assets
│   └── og-image.svg    # Social sharing image (needs PNG conversion)
└── package.json
```

## Development

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment Setup

### 1. Domain Purchase

**Recommended: gitbar.app** (~$12/year from Namecheap)

Alternative: gitbar.dev (~$15/year)

Purchase from Namecheap:
1. Go to namecheap.com
2. Search for "gitbar.app"
3. Add to cart and complete purchase
4. Keep nameservers as default (will update to Vercel later)

### 2. Vercel Project Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: gitbar-website
# - Directory: ./
# - Override settings? No
```

### 3. Connect Custom Domain

In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add domain: gitbar.app
3. Add www subdirect: www.gitbar.app
4. Copy Vercel nameservers

In Namecheap:
1. Domain List → Manage → Domain
2. Nameservers → Custom DNS
3. Add Vercel nameservers
4. Wait for DNS propagation (up to 48 hours)

### 4. OG Image

The current OG image is SVG. For better compatibility:

1. Convert `public/og-image.svg` to PNG (1200x630)
2. Use tools like:
   - Figma/Sketch
   - CloudConvert
   - ImageMagick: `convert og-image.svg -resize 1200x630 og-image.png`
3. Replace `og-image.svg` with `og-image.png`
4. Update references in `app/layout.tsx` if needed

## Configuration

### Dark Mode Only

The site is configured for dark mode only:
- No light mode toggle
- Dark colors set in `app/globals.css`
- No `prefers-color-scheme` media query

### Analytics

Vercel Analytics is integrated via `@vercel/analytics/react`.
Analytics will automatically work once deployed to Vercel.

### Metadata

SEO and social sharing metadata is configured in `app/layout.tsx`:
- Page title and description
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags

## Environment Variables

None required for basic deployment.

## Notes

- Next.js 16.1.2 (latest)
- Tailwind CSS v4
- TypeScript
- ESLint configured
- Single page application
- App Router only
