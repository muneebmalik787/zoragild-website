import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-paper border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl tracking-tightest mb-3">ZORAGILD</p>
            <p className="text-smoke text-sm max-w-[200px]">
              Premium streetwear from Pakistan.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest2 text-smoke mb-4">SOCIAL</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-smoke transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-smoke transition-colors">TikTok</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 text-smoke mb-4">SUPPORT</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@zoragild.com" className="hover:text-smoke transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-smoke transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-smoke transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 text-smoke mb-4">LEGAL</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-smoke transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-smoke transition-colors">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-smoke">
          <p>© {new Date().getFullYear()} ZORAGILD. All rights reserved.</p>
          <p>Designed &amp; built in Pakistan.</p>
        </div>
      </div>
    </footer>
  )
}
