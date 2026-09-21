import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPKR } from '../data/products.js'

export default function CartDrawer({ open, onClose }) {
  const { lines, subtotal, increment, decrement, remove } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink/50 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-paper flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-6 border-b border-line">
          <h2 className="font-display text-2xl tracking-tightest">CART ({lines.length})</h2>
          <button aria-label="Close cart" onClick={onClose} className="hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <p className="text-smoke text-sm mb-6">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="border border-ink px-6 py-3 text-xs font-semibold tracking-wide hover:bg-ink hover:text-paper transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {lines.map((line) => (
                <li key={line.id} className="py-6 flex gap-4">
                  <img
                    src={line.image}
                    alt={line.name}
                    className="w-20 h-24 object-cover bg-mist flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{line.name}</p>
                        <p className="text-smoke text-xs mt-0.5">{formatPKR(line.price)}</p>
                      </div>
                      <button
                        onClick={() => remove(line.id)}
                        aria-label={`Remove ${line.name}`}
                        className="text-smoke hover:text-ink transition-colors text-xs underline underline-offset-2 h-fit"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => decrement(line.id)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-mist transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">{line.qty}</span>
                        <button
                          onClick={() => increment(line.id)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-mist transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold ml-auto">
                        {formatPKR(line.price * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="px-6 py-6 border-t border-line">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-smoke">Subtotal</span>
              <span className="font-semibold">{formatPKR(subtotal)}</span>
            </div>
            <p className="text-smoke text-xs mb-5">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-ink text-paper py-4 text-sm font-semibold tracking-wide hover:bg-ink/85 transition-colors">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
