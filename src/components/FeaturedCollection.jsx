import React from 'react'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function FeaturedCollection() {
  const featured = products.slice(0, 4)

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <h2 className="font-display text-4xl md:text-6xl tracking-tightest">LATEST DROP</h2>
        <span className="hidden sm:block text-smoke text-sm">04 pieces</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
