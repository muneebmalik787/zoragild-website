import React, { useState } from 'react'
import { formatPKR } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-mist aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <button
          onClick={handleAdd}
          className="absolute left-3 right-3 bottom-3 bg-ink text-paper text-xs font-semibold tracking-wide py-3 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ink/85"
        >
          {added ? 'ADDED ✓' : 'ADD TO CART'}
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-medium text-sm">{product.name}</h3>
          <p className="text-smoke text-xs mt-0.5">{product.tagline}</p>
        </div>
        <span className="text-sm font-semibold whitespace-nowrap">{formatPKR(product.price)}</span>
      </div>
      <button
        onClick={handleAdd}
        className="md:hidden mt-3 w-full border border-ink text-xs font-semibold tracking-wide py-3 hover:bg-ink hover:text-paper transition-colors"
      >
        {added ? 'ADDED ✓' : 'ADD TO CART'}
      </button>
    </div>
  )
}
