import React from 'react'

export default function PromoBanner() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <img
        src="https://placehold.co/1800x1000/1a1a1a/1a1a1a?text=%20"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <h2 className="font-display text-paper text-5xl md:text-7xl tracking-tightest max-w-2xl leading-[0.95]">
          THE NEW ERA
          <br />
          OF STREETWEAR
        </h2>
        <div className="mt-9">
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-3 border border-paper text-paper px-8 py-4 text-sm font-semibold tracking-wide hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            EXPLORE COLLECTION
          </a>
        </div>
      </div>
    </section>
  )
}
