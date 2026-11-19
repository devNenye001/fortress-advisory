import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#032543] overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/final-cta-bg.jpg')` }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-24 lg:py-28 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-6">
          Let's Strengthen Integrity<br />
          Within Your Organisation.
        </h2>

        <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 opacity-95">
          Whether you are addressing a sensitive organisational concern, strengthening governance practices or developing more accountable leadership, Fortress Advisory can help you take the next step.
        </p>

        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#032543] rounded-full px-8 py-3.5 text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors group"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

