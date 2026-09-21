import React, { useMemo, useState } from 'react'
import { products, formatPKR } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const { addToCart } = useCart()

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    )
  }, [query])

  if (!open) return null

  const handleClose = () => {
    setQuery('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-paper" />
      <div className="relative h-full max-w-3xl mx-auto px-6 md:px-10 pt-24 flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <button
            aria-label="Close search"
            onClick={handleClose}
            className="hover:opacity-60 transition-opacity"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className="w-full border-b border-ink bg-transparent font-display text-3xl md:text-5xl tracking-tightest py-4 outline-none placeholder:text-ink/30"
        />

        <div className="flex-1 overflow-y-auto mt-8 pb-10">
          {query.trim() && results.length === 0 && (
            <p className="text-smoke text-sm">No products match "{query}".</p>
          )}
          <ul className="divide-y divide-line">
            {results.map((p) => (
              <li key={p.id} className="py-5 flex items-center gap-4">
                <img src={p.image} alt={p.name} className="w-16 h-20 object-cover bg-mist flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-smoke text-xs">{p.tagline}</p>
                </div>
                <span className="text-sm font-semibold">{formatPKR(p.price)}</span>
                <button
                  onClick={() => addToCart(p)}
                  className="border border-ink text-xs font-semibold px-4 py-2 hover:bg-ink hover:text-paper transition-colors whitespace-nowrap"
                >
                  ADD
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
