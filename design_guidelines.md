# SINAPRO PR Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from Apple, Linear, Nike, and existing SINAPRO sites to create a modern, authoritative institutional presence.

## Core Design Elements

### A. Color Palette
**Dark Mode:**
- Primary: `220 13% 12%` (rich dark background)
- Secondary: `210 100% 28%` (deep blue #0F4C81)
- Accent: `48 100% 52%` (golden yellow #F0C419)
- Text: `0 0% 98%` (near white)

**Light Mode:**
- Primary: `0 0% 100%` (pure white)
- Secondary: `210 100% 28%` (consistent blue)
- Accent: `48 100% 52%` (consistent golden)
- Text: `220 13% 12%` (dark text)

### B. Typography
- **Headings:** Poppins (Bold weights for impact)
- **Body Text:** Inter (Regular/Medium for readability)
- **Hierarchy:** Large hero titles, medium section headers, readable body text

### C. Layout System
**Tailwind Spacing:** Consistent use of units 2, 4, 8, 12, 16, 24 for spacing
- Generous whitespace between sections (py-24, py-16)
- Card spacing (p-8, gap-8)
- Element margins (mb-8, mt-4)

### D. Component Library

**Navigation:**
- Fixed header with glass-morphism effect
- Smooth scroll navigation
- Mobile hamburger with slide-out menu

**Cards:**
- Clean backgrounds with subtle borders
- Hover animations with gentle scale (1.02)
- Drop shadows for depth

**Forms:**
- Apple-inspired minimal inputs
- Clear focus states with accent color
- Generous padding and spacing

**Buttons:**
- Primary: Filled with secondary blue
- Secondary: Outline with accent color
- CTA: Prominent with accent golden color

### E. Animations
**Framer Motion Implementation:**
- Fade-in animations on scroll (stagger for card groups)
- Gentle hover effects (scale: 1.02, transition: 0.2s)
- Page transitions with smooth fade
- Micro-interactions on buttons and form elements

## Visual Treatment

### Hero Section
- Large typography with animated gradient backgrounds
- Minimal particle effects or subtle geometric patterns
- Strong contrast with dark overlay on background elements

### Content Sections
- Alternating background colors (white/gray-50 in light mode)
- Card-based layouts with consistent shadows
- Progressive disclosure of information

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsing navigation and stacked content on mobile
- Touch-friendly button sizes (min 44px height)

## Images
**Hero Image:** Large background image of modern office or Paraná cityscape with dark overlay for text readability
**Team Photos:** Professional headshots for board members, consistent sizing and styling
**Office Images:** Clean, modern workspace photos for institutional pages
**Logos:** Partner/member agency logos in a grid layout
**Icons:** Lucide icons throughout for consistency and lightweight performance

## Accessibility & User Experience
- Automatic dark/light mode detection
- High contrast ratios (4.5:1 minimum)
- Focus indicators on all interactive elements
- Semantic HTML structure
- Loading states for dynamic content
- Error handling with clear messaging