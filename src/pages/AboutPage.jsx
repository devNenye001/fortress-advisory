import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star, Shield, Target, Compass } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function AboutPage() {
  const reviews = [
    {
      quote: "Fortress Advisory delivered deep, actionable governance insights that transformed our board's compliance protocols. Their independent perspective was invaluable.",
      author: "Adewale Adeleke",
      role: "Board Chairman, Integrated Logistics Plc",
      rating: 5,
    },
    {
      quote: "The fraud risk assessment performed by Fortress Advisory saved our enterprise from substantial exposure. Highly professional, thorough, and completely confidential.",
      author: "Catherine Moore",
      role: "Chief Executive Officer, Sterling Health Group",
      rating: 5,
    },
    {
      quote: "Their training programme on ethical leadership was practical and deeply engaging for our senior management. We now have a tangible framework for daily accountability.",
      author: "Marcus Vance",
      role: "Chief Compliance Officer, Horizon Financials",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mt-4 mb-4">
            About Fortress Advisory
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            An independent advisory firm committed to safeguarding institutional integrity and nurturing ethical leaders across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Main Story & Image */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                Rooted in Governance. Driven by Ethical Transformation.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                At Fortress Advisory, we believe that an organization's long-term resilience is anchored in its ethical bedrock. Founded by seasoned forensic auditors, governance advisors, and corporate ethics specialists, we assist institutions in building systems that deter wrongdoing and reward transparency.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From sensitive internal reviews to executive masterclasses and board oversight frameworks, our counsel remains strictly objective, evidence-based, and tailored to the unique regulatory landscape of our clients.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Unwavering confidentiality and independence in all matters',
                  'Rigorous fraud risk diagnostics and prevention toolkits',
                  'Board evaluation methodologies benchmarked to global standards',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#FFD700] text-[#032543] rounded-full p-1 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 overflow-hidden">
              <img 
                src="/about-page-pic.jpg" 
                alt="About Fortress Advisory Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Pillars */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 text-[#032543] flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To equip organizations with the structures, competencies, and ethical mindset necessary to prevent wrongdoing and protect public trust.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-50 text-[#032543] flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the foremost integrity and ethical governance advisory partner, renowned for unwavering independence and tangible impact.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-50 text-[#032543] flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolute confidentiality, uncompromising objectivity, analytical rigor, and an unwavering commitment to public accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section id="reviews" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal mt-4 mb-4">
              Trusted by Board Members and Executives
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Read what corporate leaders have to say about our interventions and advisory support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FFD700] mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFD700" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-serif text-base font-medium text-gray-900">{rev.author}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  )
}

