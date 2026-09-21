import React from 'react'

const REVIEWS = [
  {
    name: 'Hamza R.',
    city: 'Lahore',
    quote:
      'Fit is exactly as described and the fabric feels genuinely premium. First local brand that feels worth the price.',
  },
  {
    name: 'Ayesha K.',
    city: 'Karachi',
    quote:
      'Ordered the Void Tee in black — the cut, the stitching, all of it feels considered. Already planning my next order.',
  },
  {
    name: 'Bilal S.',
    city: 'Islamabad',
    quote:
      'Not another basic logo tee brand. ZORAGILD actually designs, and it shows the moment you put a piece on.',
  },
]

export default function Reviews() {
  return (
    <section className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display text-4xl md:text-6xl tracking-tightest mb-14">
          WHAT THEY'RE SAYING
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {REVIEWS.map((r) => (
            <div key={r.name} className="border-t border-ink pt-6">
              <p className="text-base leading-relaxed mb-6">"{r.quote}"</p>
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-smoke text-xs">{r.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
