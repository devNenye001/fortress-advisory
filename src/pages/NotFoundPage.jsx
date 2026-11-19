import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 404 Main Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 md:pt-28 md:pb-32 bg-white">
        <div className="max-w-xl mx-auto">
          {/* 404 Heading */}
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-normal text-gray-900 tracking-tight leading-none mb-4 select-none">
            404
          </h1>

          {/* Subheading */}
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 mb-4 tracking-normal">
            Page not Found
          </h2>

          {/* Description matching exact text */}
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
            This page cant be transcribed. It looks like this page has left the meeting or maybe it never joined.
          </p>

          {/* Go Home CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 bg-[#032543] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#021b31] transition-all duration-200 group"
            >
              <span>Go Home</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  )
}

