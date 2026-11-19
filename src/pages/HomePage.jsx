import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, TrendingUp, CheckCircle2 } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  const pillars = [
    {
      title: 'Governance & Board Advisory',
      desc: 'Strengthening board effectiveness, ethical decision-making, and compliance frameworks to safeguard institutional credibility.',
      image: '/why1.jpg',
    },
    {
      title: 'Fraud Risk & Forensic Oversight',
      desc: 'Comprehensive diagnostic assessments to identify vulnerability points, protect valuable assets, and eliminate fraudulent practices.',
      image: '/why2.jpg',
    },
    {
      title: 'Culture & Accountability Frameworks',
      desc: 'Empowering teams with whistleblowing safeguards, anti-bribery policies, and leadership coaching rooted in integrity.',
      image: '/why3.jpg',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#032543] text-white overflow-hidden py-24 sm:py-32 lg:py-36">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck size={16} />
              <span>Independent Corporate & Ethics Advisory</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight mb-6">
              Safeguarding Integrity.<br />
              Enabling Ethical Leadership.
            </h1>

            <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              We partner with forward-thinking boards, executives, and organizations to strengthen governance practices, prevent fraud, and instill enduring ethical standards.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#032543] rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-yellow-400 transition-colors group"
              >
                <span>Our Services</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 rounded-full px-8 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Banner */}
      <section className="bg-gray-50 border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#032543] font-bold">100%</p>
              <p className="text-gray-600 text-sm mt-1">Confidential & Independent</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#032543] font-bold">20+</p>
              <p className="text-gray-600 text-sm mt-1">Years Combined Expertise</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#032543] font-bold">50+</p>
              <p className="text-gray-600 text-sm mt-1">Institutions Advised</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#032543] font-bold">98%</p>
              <p className="text-gray-600 text-sm mt-1">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fortress Advisory */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
              Core Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal mt-4 mb-4">
              Structured Solutions for Critical Governance Needs
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We help you anticipate vulnerabilities, navigate sensitive investigations, and embed accountability across every tier of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#032543] hover:text-[#021b31] group"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
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

