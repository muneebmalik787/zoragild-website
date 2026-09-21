import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-ink text-paper">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-24 md:py-28 text-center">
        <h2 className="font-display text-4xl md:text-5xl tracking-tightest mb-4">
          JOIN THE ZORAGILD WORLD
        </h2>
        <p className="text-paper/60 mb-10 max-w-md mx-auto">
          Early access to drops, restocks and members-only pricing. No spam, ever.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 bg-transparent border border-paper/30 px-5 py-4 text-sm placeholder:text-paper/40 focus:border-paper transition-colors outline-none"
          />
          <button
            type="submit"
            className="bg-paper text-ink px-7 py-4 text-sm font-semibold tracking-wide hover:bg-mist transition-colors whitespace-nowrap"
          >
            {submitted ? 'SUBSCRIBED ✓' : 'SUBSCRIBE'}
          </button>
        </form>
      </div>
    </section>
  )
}
