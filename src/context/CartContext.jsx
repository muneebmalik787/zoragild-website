import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find((line) => line.id === action.product.id)
      if (existing) {
        return state.map((line) =>
          line.id === action.product.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }
      return [...state, { ...action.product, qty: 1 }]
    }
    case 'INCREMENT':
      return state.map((line) =>
        line.id === action.id ? { ...line, qty: line.qty + 1 } : line
      )
    case 'DECREMENT':
      return state
        .map((line) =>
          line.id === action.id ? { ...line, qty: line.qty - 1 } : line
        )
        .filter((line) => line.qty > 0)
    case 'REMOVE':
      return state.filter((line) => line.id !== action.id)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, [])

  const value = useMemo(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
    return {
      lines,
      count,
      subtotal,
      addToCart: (product) => dispatch({ type: 'ADD', product }),
      increment: (id) => dispatch({ type: 'INCREMENT', id }),
      decrement: (id) => dispatch({ type: 'DECREMENT', id }),
      remove: (id) => dispatch({ type: 'REMOVE', id }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
