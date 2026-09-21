import React from 'react'

export default function BrandSection() {
  return (
    <section id="about" className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <img
          src="https://placehold.co/1000x1200/e4e4e1/0a0a0a?text=ZORAGILD"
          alt="ZORAGILD garment detail"
          className="w-full aspect-[4/5] object-cover order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="font-display text-4xl md:text-6xl tracking-tightest mb-6">
            BUILT DIFFERENT.
          </h2>
          <p className="text-ink/70 text-base md:text-lg leading-relaxed max-w-md">
            ZORAGILD is a modern Pakistani streetwear label built on quality, restraint and
            individuality. Every piece is cut heavier, finished cleaner and made to outlast
            the trend cycle — for people who dress on their own terms.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="font-display text-2xl">240gsm</p>
              <p className="text-smoke text-xs mt-1">Heavyweight cotton</p>
            </div>
            <div>
              <p className="font-display text-2xl">100%</p>
              <p className="text-smoke text-xs mt-1">Made in Pakistan</p>
            </div>
            <div>
              <p className="font-display text-2xl">6</p>
              <p className="text-smoke text-xs mt-1">Core silhouettes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
