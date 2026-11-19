import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  PhoneCall, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft,
  Compass, 
  FileText, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  const [blogIndex, setBlogIndex] = useState(0)

  const blogPosts = [
    {
      image: '/blog1.jpg',
      category: 'Governance & Compliance',
      title: 'Strengthening Internal Controls in High-Growth Organisations',
    },
    {
      image: '/why1.jpg',
      category: 'Fraud Risk & Investigation',
      title: 'How to Conduct an Effective Internal Investigation',
    },
    {
      image: '/why3.jpg',
      category: 'Leadership & Culture',
      title: 'Building a Culture Where Employees Speak Up',
    },
  ]

  const handlePrevBlog = () => {
    setBlogIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1))
  }

  const handleNextBlog = () => {
    setBlogIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (using hero-bg.jpg) */}
      <section className="relative w-full bg-[#032543] overflow-hidden">
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        >
          {/* Subtle dark tint to match design contrast */}
          <div className="absolute inset-0 bg-black/45 md:bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Headline */}
            <div className="lg:col-span-7">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-white">
                Safeguarding Integrity<br />
                Enabling Ethical Leadership
              </h1>
            </div>

            {/* Right Subtext & Button */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                Fortress Advisory provides independent, practical and strategic advisory services that help organisations navigate sensitive matters, address integrity and fraud risks, and strengthen their governance and ethical standards.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#032543] rounded-full px-8 py-3.5 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. "WHAT WE DO" / SERVICES OVERVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16">
            <div className="lg:col-span-3">
              <span className="text-sm text-gray-500 font-normal">
                &bull; What we do
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 font-normal leading-snug">
                Fortress Advisory provides independent, practical and strategic advisory services that help organisations navigate sensitive matters, address ethics and risk, and build resilient governance structures.
              </h2>
            </div>
          </div>

          {/* 3 Pillars / Services Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="text-[#032543] mb-3">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900">
                Fraud and Financial Crime Advisory
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Helping organisations assess vulnerabilities, identify fraud risks and build robust preventive and detective controls.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="text-[#032543] mb-3">
                <PhoneCall size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900">
                Due Diligence Reviews
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Independent, discreet due diligence on third parties, executive hires, and strategic transactions to protect organizational integrity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="text-[#032543] mb-3">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-900">
                Executive Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confidential advisory support for senior leaders facing complex ethical dilemmas and governance challenges.
              </p>
            </div>

          </div>

          {/* Learn More Button */}
          <div>
            <Link
              to="/services"
              className="inline-flex items-center bg-[#032543] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#021b31] transition-colors"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>


      {/* 3. "WHY FORTRESS ADVISORY?" SECTION (pics: why1.jpg to why3.jpg) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-normal mb-8">
            Why Fortress Advisory?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: why1.jpg */}
            <div className="relative h-[440px] sm:h-[480px] overflow-hidden group">
              <img 
                src="/why1.jpg" 
                alt="Independent Perspective" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 p-8 flex flex-col justify-between text-white">
                <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border border-white"></div>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
                    Independent Perspective
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Objective advice unencumbered by conflicts of interest.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: why2.jpg */}
            <div className="relative h-[440px] sm:h-[480px] overflow-hidden group">
              <img 
                src="/why2.jpg" 
                alt="Confidentiality Guaranteed" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 p-8 flex flex-col justify-between text-white">
                <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border border-white"></div>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
                    Confidentiality Guaranteed
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Discreet and secure handling of sensitive matters and organizational concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: why3.jpg */}
            <div className="relative h-[440px] sm:h-[480px] overflow-hidden group">
              <img 
                src="/why3.jpg" 
                alt="Experienced Practitioners" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 p-8 flex flex-col justify-between text-white">
                <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border border-white"></div>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
                    Experienced Practitioners
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Senior-level guidance drawn from real-world investigations and governance experience.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4. LEADERSHIP SECTION */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-sm text-gray-500 font-normal">
                &bull; Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal leading-tight">
                Experience That<br />
                Supports Better Decisions
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our leadership brings decades of experience handling complex investigations, governance advisory, and integrity risk management across both public and private sectors. We have worked with boards, executive teams, and oversight bodies to resolve high-stakes issues.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Every engagement is partner-led, ensuring direct access to seasoned expertise and practical advice tailored to your organisation's unique realities.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center bg-[#032543] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#021b31] transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. TRAINING SECTION (using traning-section-pic.jpg with dark blue #032543 background) */}
      <section className="bg-[#032543] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-medium text-[#FFD700] tracking-wide">
                &bull; Training & Workshops
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Building Knowledge, Strengthening Workplace Culture
              </h2>

              <p className="text-gray-200 text-sm sm:text-base pt-2">
                Areas covered include:
              </p>

              <ul className="space-y-3.5 text-sm sm:text-base text-gray-200">
                {[
                  'Ethics and integrity.',
                  'Fraud awareness and prevention.',
                  'Respectful workplace practices.',
                  'Whistleblower protection and handling.',
                  'Ethical leadership and accountability.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#FFD700] font-bold text-base">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Training photo with no rounded corners */}
            <div className="lg:col-span-6">
              <div className="w-full h-auto overflow-hidden">
                <img 
                  src="/traning-section-pic.jpg" 
                  alt="Training and Workshops" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. METHODOLOGY / "A THOUGHTFUL APPROACH" BANNER */}
      <section className="bg-[#021b31] text-white py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Title column */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs text-gray-400 font-normal">
                &bull; Our Approach
              </span>
              <h3 className="font-serif text-2xl font-normal text-white leading-snug">
                A Thoughtful Approach to Every Organisational Challenge
              </h3>
            </div>

            {/* 3 Step columns */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
                </div>
                <h4 className="font-serif text-base font-normal text-white">
                  Define the Problem
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  We work with you to understand the context, scope, and specific objectives of the engagement.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
                </div>
                <h4 className="font-serif text-base font-normal text-white">
                  Evidence-Based Advisory
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Our advice is grounded in fact, supported by data, and tested against real-world realities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
                </div>
                <h4 className="font-serif text-base font-normal text-white">
                  Practical Implementation
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  We provide actionable recommendations that can be implemented within your operational framework.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 7. BLOGS SECTION (pics: blog1.jpg, why1.jpg, why3.jpg) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & slider arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm text-gray-500 font-normal block mb-2">
                &bull; Insights
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-normal">
                Perspectives on Integrity,<br className="hidden sm:block" />
                Governance and Leadership
              </h2>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevBlog}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#032543] hover:text-[#032543] transition-colors"
                aria-label="Previous insight"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextBlog}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#032543] hover:text-[#032543] transition-colors"
                aria-label="Next insight"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* 3 Blog Cards (blog1.jpg, why1.jpg, why3.jpg) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="flex flex-col space-y-4 group">
                <div className="h-60 sm:h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 pt-1">
                  <p className="text-xs text-gray-500 font-medium">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-gray-900 leading-snug group-hover:text-[#032543] transition-colors">
                    {post.title}
                  </h3>
                  <div className="pt-2">
                    <Link
                      to="/blog"
                      className="text-xs font-semibold text-gray-900 underline underline-offset-4 hover:text-[#032543]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. FINAL CTA COMPONENT (using final-cta-bg.jpg) */}
      <FinalCTA />

    </div>
  )
}
