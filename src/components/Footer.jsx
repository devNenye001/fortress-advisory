import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Fortress Advisory" 
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-normal">
              Safeguarding Integrity. Enabling Ethical Leadership.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-4 tracking-normal">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#032543] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-gray-600 hover:text-[#032543] transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#032543] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-4 tracking-normal">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#032543] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#032543] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about#reviews" className="text-gray-600 hover:text-[#032543] transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="lg:col-span-4">
            <h3 className="text-gray-900 font-semibold text-base mb-3 tracking-normal">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              Receive occasional insights, practical perspectives and updates from Fortress Advisory on governance, ethics, fraud risk management and responsible leadership.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f4f5f7] text-gray-800 text-sm rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-[#032543] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-[#032543] text-white text-sm font-medium px-7 py-2.5 rounded-full hover:bg-[#021b31] transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-700 animate-slide-up">
                <CheckCircle2 size={14} />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-gray-200/80 pt-8 text-center">
          <p className="text-xs text-gray-500 font-sans tracking-wide">
            &copy; 2026 Fortress Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
