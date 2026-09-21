# ZORAGILD — Premium Streetwear Website

A fully responsive, animated storefront for ZORAGILD, a premium Pakistani
streetwear brand. Built with React + Vite + Tailwind CSS, no backend required.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx                     Assembles the full homepage
  index.css                   Tailwind + global animations
  context/
    CartContext.jsx           Global cart state (add/remove/qty/totals)
  data/
    products.js                6 sample ZORAGILD tee products (PKR pricing)
  components/
    Navbar.jsx                 Nav, mobile menu, search + cart triggers
    Hero.jsx                   Hero section
    FeaturedCollection.jsx     "Latest Drop" grid (4 products)
    ProductCard.jsx            Reusable product card w/ add-to-cart
    BrandSection.jsx           "Built Different" brand story
    PromoBanner.jsx            "New Era of Streetwear" banner
    Reviews.jsx                Customer review cards
    Newsletter.jsx             Email signup
    Footer.jsx                 Footer w/ social + legal links
    CartDrawer.jsx             Slide-in cart w/ qty controls & subtotal
    SearchOverlay.jsx          Full-screen product search
```

## Customizing

- **Products & prices** — edit `src/data/products.js`. Swap the `image`
  fields for real photography (any URL or a file in `/public`).
- **Colors** — edit the `ink` / `paper` / `smoke` / `mist` / `line` tokens in
  `tailwind.config.js`.
- **Fonts** — currently Anton (display) + Inter (body), loaded via Google
  Fonts in `index.html`.
- **Copy** — all section text lives directly inside its component file.

## Notes

- Cart state is in-memory (React context) and resets on page reload. Wire it
  to `localStorage` or a real backend/checkout provider when ready to launch.
- Newsletter and checkout buttons are functional UI stubs — connect them to
  your email provider / payment gateway (e.g. Mailchimp, Stripe, JazzCash,
  Easypaisa) for production use.
- Placeholder images come from placehold.co; replace with real product shots
  before launch.
