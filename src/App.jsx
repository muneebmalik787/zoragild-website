import React, { useState } from 'react'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedCollection from './components/FeaturedCollection.jsx'
import BrandSection from './components/BrandSection.jsx'
import PromoBanner from './components/PromoBanner.jsx'
import Reviews from './components/Reviews.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <CartProvider>
      <Navbar onOpenCart={() => setCartOpen(true)} onOpenSearch={() => setSearchOpen(true)} />

      <main>
        <Hero />
        <FeaturedCollection />
        <BrandSection />
        <PromoBanner />
        <Reviews />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </CartProvider>
  )
}
