import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-slate-800 text-lg">Customer Emotion Decoder</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Insights
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-600 hover:text-indigo-600 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#hero"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl text-center"
              >
                View Insights
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
