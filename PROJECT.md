# Wood+Worm Design Portfolio Website

## Project Overview
Professional handcrafted woodworking portfolio website for Wood+Worm Design, showcasing luxury furniture and home goods. Built with Next.js 16.2.6, TypeScript, and Tailwind CSS. Hosted on Vercel.

**Domain:** woodwormdesign.com (via GoDaddy)
**Email:** t.woodwormdesigns@gmail.com
**Deployed:** Vercel (auto-deploys from GitHub)

## Tech Stack
- **Framework:** Next.js 16.2.6 with TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** 
  - Playfair Display (headings) - `var(--font-playfair)`
  - Cormorant Garamond (elegant text) - `var(--font-elegant)`
  - Lato (body) - `var(--font-lato)`
- **Images:** Next.js Image component for optimization
- **Version Control:** GitHub
- **Hosting:** Vercel

## Brand Design
- **Logo:** W monogram in circle with organic wavy notch on right side
- **Logo Files:**
  - `/public/assets/logo/ww-logo.png` - Full logo (not currently used in header)
  - `/public/assets/logo/ww-logo-monogram.png` - W circle monogram only (left header)
  - `/public/favicon.ico` - Favicon (converted from monogram PNG)
- **Brand Text:** "WOOD + WORM DESIGNS" with decorative lines
- **Color Palette:** 
  - White backgrounds
  - Black text and borders
  - Gray accents (#f5ede0 for portfolio section)
  - Wood tones in imagery

## Site Structure

### Pages
1. **Homepage** (`/app/page.tsx`)
   - Hero section with split layout (text left, image right; mobile: stacked)
   - Portfolio grid with project cards
   - Contact section with CTA
   - Footer with branding

2. **Collections (Projects)**
   - Wormwood Table (`/projects/wormwood-table`)
   - Black Walnut Cheese Boards (`/projects/cheese-board`)
   - Maple Cabinet (`/projects/maple-cabinet`)
   - Walnut Desk (`/projects/walnut-desk`)
   - Oak Bench (`/projects/oak-bench`)

### Header Layout (All Pages)
- **Left:** Monogram logo (w-12 h-12 mobile, w-16 h-16 desktop) - clickable link to home
- **Center:** "WOOD + WORM" text with "———— DESIGNS ————" (hidden on mobile)
- **Right:** Navigation links (Work, Contact on homepage; Back to Work on project pages)

### Collection Page Structure
Each project page includes:
1. Header with navigation
2. Hero section (title + description)
3. Featured carousel (5-second autoplay, swipe/click navigation, progress dots)
4. Gallery lightbox modal (keyboard + touch support)
5. Project details grid (2 columns on desktop, 1 on mobile)
6. Availability section (status + price + inquiry button)
7. Gallery grid (responsive columns)
8. CTA section (commission/custom design)
9. Footer

## Current Collections

### 1. Wormwood Table
- **Price:** $325
- **Images:** 4 ChatGPT-generated renders
- **Description:** Coffee table with black epoxy restoration
- **Materials:** Alder wood with black epoxy and oil finish
- **Dimensions:** 36" L, 19"-9" W, 17.25" H

### 2. Black Walnut Cheese Boards
- **Price:** $60
- **Images:** 4 final images (renamed to remove spaces: Final.Image-1.png, Final.Image-3.png, Final.Image-4.png, Final.Image-5.png)
- **First Image (Cover):** Styled board with cheese, crackers, and decorative elements
- **Description:** Handcrafted serving boards with food-safe finish
- **Materials:** Black walnut with food-grade oil and beeswax
- **Features:** Sanded to 320 grit, rubber feet, finger grooves

## Components

### ImageGallery (`/app/components/ImageGallery.tsx`)
- Responsive gallery grid (1 col mobile, 2 col tablet, 5 col desktop)
- Lightbox modal with keyboard navigation (arrow keys, escape)
- Touch/swipe support with 50px threshold
- Previous/Next buttons
- Image counter
- Click-to-close on background

### FeaturedCarousel (`/app/components/FeaturedCarousel.tsx`)
- Auto-rotating carousel (5-second interval)
- Responsive image counter
- Previous/Next navigation buttons (hidden on hover for desktop)
- Clickable progress dots to jump to specific images
- Touch/swipe support
- Resets autoplay on user interaction

## Important Notes

### Image Filenames
- **Avoid spaces in image filenames** - use hyphens instead
- Example: `Final.Image-5.png` not `Final.Image 5.png`
- Spaces cause URL encoding issues and broken image loading

### Responsive Design
- **Mobile-first approach** with Tailwind breakpoints
- `lg:` prefix for desktop-only styles
- `hidden lg:block` for desktop-only elements
- `hidden` for mobile-hidden on default
- Navigation gaps: `gap-4 lg:gap-12`
- Text sizing: `text-xs lg:text-sm`

### SEO & Meta
- Title: "WoodWorm Design | Handcrafted Furniture"
- Description: "Fine handcrafted woodworking pieces. Bespoke furniture designed and built with precision."
- Favicon: `/public/favicon.ico`

### Styling Conventions
- **Font weights:** `font-light` (300) for elegance
- **Text color:** `text-gray-600` for body text
- **Spacing:** `mb-8` between paragraphs, `mb-12` between sections
- **Borders:** `border-gray-200` for dividers
- **Buttons:** Black border with hover:bg-black hover:text-white transition

## Deployment

### Vercel Setup
- Automatic deployments on push to main branch
- DNS: A records point to Vercel
- CNAME records for subdomains
- Environment: Production

### Building
```bash
npm run build
npm run dev  # Local development
```

## Common Tasks

### Adding a New Collection
1. Create `/app/projects/[project-id]/page.tsx` based on existing template
2. Copy images to `/public/assets/projects/[project-id]/`
3. Update `app/page.tsx` projects array with new entry
4. Customize content (description, specs, price)
5. Deploy via git push

### Updating Images
- Place in `/public/assets/projects/[project-id]/`
- Remove spaces from filenames
- Update image array in project page
- Test carousel and gallery functionality

### Updating Branding
- Logo: Update `/public/assets/logo/` files
- Favicon: Update `/public/favicon.ico`
- Colors: Modify Tailwind classes in components
- Fonts: Update CSS variables in `app/layout.tsx`

## Known Quirks & Solutions

### Favicon Not Showing
- **Issue:** Browser cache or file format incompatibility
- **Solution:** Clear browser cache, use favicon.ico format, add explicit link tags in layout
- **Current:** favicon.ico created from PNG monogram

### Image Loading Issues
- **Issue:** Spaces in filenames break URL encoding
- **Solution:** Use hyphens or underscores instead of spaces
- **Applied:** All cheese board images renamed with hyphens

### Header Layout
- Monogram must be 50-70px for good visibility
- Centered text hidden on mobile to prevent overlap
- Right navigation uses `ml-auto` for alignment

## Future Improvements
- Add more collections (tables, benches, custom pieces)
- Implement contact form (currently email links)
- Add "coming soon" descriptions for future pieces
- Consider adding video walkthroughs of furniture
- Implement customization request flow
- Add blog/craft stories section

## Files to Remember
- **Layout:** `/app/layout.tsx` (metadata, fonts, favicon)
- **Homepage:** `/app/page.tsx` (projects array here)
- **Styling:** `/app/globals.css`
- **Components:** `/app/components/` (ImageGallery, FeaturedCarousel)
- **Public Assets:** `/public/assets/` (logos, images)

## Contact & Support
- Site email: t.woodwormdesigns@gmail.com
- GitHub: taylorjbaker-bit/-woodworking-portfolio
- Last updated: June 3, 2026
