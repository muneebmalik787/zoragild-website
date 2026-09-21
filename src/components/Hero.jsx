import React from 'react'

export default function Hero() {
  const scrollToShop = (e) => {
    e.preventDefault()
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <img
        src="https://placehold.co/1600x2000/0a0a0a/1a1a1a?text=ZORAGILD"
        alt="ZORAGILD hero model wearing premium streetwear"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <p className="text-paper/60 text-xs tracking-widest2 mb-5 animate-rise-in [animation-delay:0.1s] opacity-0">
          PAKISTAN — STREETWEAR
        </p>
        <h1 className="font-display text-paper text-[15vw] leading-[0.85] tracking-tightest md:text-[9vw] lg:text-[7.5rem] animate-rise-in [animation-delay:0.2s] opacity-0">
          WEAR YOUR
          <br />
          IDENTITY.
        </h1>
        <p className="text-paper/70 mt-6 max-w-md text-base md:text-lg animate-rise-in [animation-delay:0.35s] opacity-0">
          Premium streetwear made for those who stand apart.
        </p>
        <div className="mt-9 animate-rise-in [animation-delay:0.5s] opacity-0">
          <a
            href="#shop"
            onClick={scrollToShop}
            className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 text-sm font-semibold tracking-wide hover:bg-mist transition-colors duration-300"
          >
            SHOP NOW
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
