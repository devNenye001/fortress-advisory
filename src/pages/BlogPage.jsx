import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Corporate Governance', 'Fraud Risk', 'Ethical Leadership', 'Whistleblowing']

  const articles = [
    {
      title: 'Navigating Modern Governance: How Ethical Leadership Drives Long-Term Value',
      category: 'Ethical Leadership',
      date: 'November 14, 2026',
      readTime: '6 min read',
      image: '/blog1.jpg',
      featured: true,
      summary: 'In an era of intensified public scrutiny and stringent regulatory enforcement, an organization’s ethical stance is no longer mere compliance—it is the foundational driver of sustainable enterprise valuation and stakeholder trust.',
    },
    {
      title: 'Early Detection: Key Red Flags in High-Value Procurement Cycles',
      category: 'Fraud Risk',
      date: 'October 28, 2026',
      readTime: '5 min read',
      image: '/why2.jpg',
      featured: false,
      summary: 'Procurement manipulation accounts for over 40% of institutional fraud losses. We unpack subtle indicators of bid-rigging, single-source irregularities, and vendor collusions.',
    },
    {
      title: 'The Psychology of Whistleblowing: Why Confidentiality Alone Is Not Enough',
      category: 'Whistleblowing',
      date: 'October 15, 2026',
      readTime: '4 min read',
      image: '/why3.jpg',
      featured: false,
      summary: 'While technical hotlines provide an intake mechanism, employees only report misconduct when they perceive genuine psychological safety and tangible leadership accountability.',
    },
    {
      title: 'Boards in the Crosshairs: Evolving Fiduciary Expectations for 2026',
      category: 'Corporate Governance',
      date: 'September 30, 2026',
      readTime: '7 min read',
      image: '/why1.jpg',
      featured: false,
      summary: 'Directors face unprecedented personal scrutiny regarding oversight failures. Here is what modern audit committees must scrutinize during quarterly governance reviews.',
    },
  ]

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
            Perspectives & Insights
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mt-4 mb-4">
            Fortress Advisory Blog
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Thought leadership, practical analyses, and regulatory perspectives from our governance and anti-fraud practitioners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#032543] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {articles[0] && selectedCategory === 'All' && (
            <div className="mb-16 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-white">
              <div className="lg:col-span-7 h-64 lg:h-auto overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="bg-yellow-100 text-[#032543] font-semibold px-2.5 py-0.5">
                      {articles[0].category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {articles[0].readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 mb-4 leading-snug">
                    {articles[0].title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {articles[0].summary}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{articles[0].date}</span>
                  <span className="inline-flex items-center gap-1 text-[#032543] font-medium">
                    Read insight <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <article 
                key={idx}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="text-[#032543] font-semibold">{art.category}</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-gray-900 mb-3 leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>{art.date}</span>
                  <span className="text-[#032543] font-medium inline-flex items-center gap-1 group">
                    Read article <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  )
}

