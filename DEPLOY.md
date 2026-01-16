# GitBar Website Deployment Instructions

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New..." → "Project"
3. Import the `gitbar-website` repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next
   - **Install Command**: npm install
5. Click "Deploy"

The site will be live at: `https://gitbar-website-[your-username].vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd /Users/burhan.usman/Work/personal/gitbar-website
vercel --prod --yes
```

## Post-Deployment Steps

### 1. Add Custom Domain

In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add custom domain: `gitbar.app`
3. Add www redirect: `www.gitbar.app`
4. Copy the nameservers or DNS records provided

### 2. Configure DNS

If using Namecheap:

**Option A: Nameservers (Recommended)**
1. Go to Domain List → Manage
2. Nameservers → Custom DNS
3. Add Vercel's nameservers (provided in Vercel dashboard)

**Option B: DNS Records**
1. Go to Advanced DNS
2. Add A Record: @ → Vercel IP
3. Add CNAME: www → cname.vercel-dns.com

Wait 24-48 hours for DNS propagation.

### 3. Enable Vercel Analytics

Analytics is already integrated in the code via `@vercel/analytics/react`.
It will automatically start collecting data once deployed to Vercel.

View analytics in: Project → Analytics tab

### 4. Update OG Image (Optional)

The current OG image is an SVG placeholder. For better social sharing:

1. Create a PNG (1200x630px) with GitBar branding
2. Save as `public/og-image.png`
3. Remove `public/og-image.svg`
4. Commit and push changes (Vercel auto-deploys)

Suggested tools:
- Figma
- Canva
- [OG Image Generator](https://og-playground.vercel.app/)

## Environment Variables

None required for basic deployment.

## Deployment Status

Once deployed, verify:
- [ ] Site is live at Vercel URL
- [ ] Dark mode is working
- [ ] All links function correctly
- [ ] Download button points to GitHub releases
- [ ] OG tags are correct (test with [OpenGraph.xyz](https://www.opengraph.xyz/))
- [ ] Analytics is collecting data

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches
- **Pull Requests**: Preview deployments for each PR

## Rollback

To rollback to a previous deployment:
1. Go to Vercel Dashboard → Deployments
2. Find the deployment you want to restore
3. Click "..." → "Promote to Production"

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify builds locally: `npm run build`
- Ensure all dependencies are in package.json

### Domain Not Working
- Verify DNS propagation: `dig gitbar.app`
- Check domain configuration in Vercel
- Wait up to 48 hours for DNS changes

### Analytics Not Working
- Analytics only works on Vercel (not localhost)
- Check Project → Analytics in dashboard
- Data may take a few hours to appear
