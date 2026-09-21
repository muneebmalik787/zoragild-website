// Sample ZORAGILD product catalogue.
// Swap `image` values for real product photography when available.
// Placeholder images are sourced from placehold.co and can be replaced with
// any URL or local /public asset.

export const products = [
  {
    id: 'zg-01',
    name: 'VOID Tee',
    tagline: 'Heavyweight cotton, oversized fit',
    price: 2799,
    image: 'https://placehold.co/800x1000/0a0a0a/fafaf8?text=VOID',
    category: 'Oversized',
  },
  {
    id: 'zg-02',
    name: 'GHOST Tee',
    tagline: 'Washed cotton, relaxed drape',
    price: 2499,
    image: 'https://placehold.co/800x1000/e4e4e1/0a0a0a?text=GHOST',
    category: 'Relaxed',
  },
  {
    id: 'zg-03',
    name: 'RELIC Tee',
    tagline: 'Garment-dyed, boxy silhouette',
    price: 3199,
    image: 'https://placehold.co/800x1000/0a0a0a/fafaf8?text=RELIC',
    category: 'Boxy',
  },
  {
    id: 'zg-04',
    name: 'ECLIPSE Tee',
    tagline: 'Double-stitched, structured fit',
    price: 2999,
    image: 'https://placehold.co/800x1000/1a1a1a/fafaf8?text=ECLIPSE',
    category: 'Structured',
  },
  {
    id: 'zg-05',
    name: 'NOCTURNE Tee',
    tagline: '240gsm French terry blend',
    price: 3499,
    image: 'https://placehold.co/800x1000/0a0a0a/fafaf8?text=NOCTURNE',
    category: 'Premium',
  },
  {
    id: 'zg-06',
    name: 'PHANTOM Tee',
    tagline: 'Enzyme-washed, faded finish',
    price: 1999,
    image: 'https://placehold.co/800x1000/e4e4e1/0a0a0a?text=PHANTOM',
    category: 'Essential',
  },
]

export const formatPKR = (amount) =>
  `PKR ${amount.toLocaleString('en-PK')}`
