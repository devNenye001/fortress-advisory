import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './Blog.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
}

export const featuredPost = {
  slug: 'building-a-culture-of-integrity',
  date: 'November 11, 2026',
  title: 'Building a Culture of Integrity: Why Ethical Leadership Matters in Every Organisation',
  excerpt: 'Organisational integrity starts with ethical leadership, responsible decisions and a workplace culture built on trust and accountability. Discover how these values shape stronger organisations.',
  image: '/blog1.jpg',
  imageAlt: 'Building a Culture of Integrity',
  paragraphs: [
    'Organisational integrity starts with ethical leadership, responsible decisions and a workplace culture built on trust and accountability. Discover how these values shape stronger organisations.',
    'When leaders actively prioritize transparent communication, clear accountability mechanisms and sound ethical decision-making, they protect their institutions from reputational risk and operational failures.',
    'Through proactive governance advisory, risk evaluations and practical ethics frameworks, organisations can instill lasting values that empower employees and build enduring stakeholder confidence.'
  ]
}

export const blogPosts = [
  {
    id: 1,
    slug: 'governance-and-compliance',
    image: '/why2.jpg',
    category: 'Governance & Compliance',
    title: 'Governance & Compliance',
    desc: 'Perspectives on corporate governance, regulatory responsibilities and organisational accountability.',
    date: 'October 28, 2026'
  },
  {
    id: 2,
    slug: 'fraud-risk-and-investigations',
    image: '/about-hands.jpg',
    category: 'Fraud Risk & Investigations',
    title: 'Fraud Risk & Investigations',
    desc: 'Understanding fraud risks, investigations, internal controls and prevention.',
    date: 'October 15, 2026'
  },
  {
    id: 3,
    slug: 'ethics-and-integrity-culture',
    image: '/service6.jpg',
    category: 'Ethics & Integrity',
    title: 'Ethics & Integrity',
    desc: 'Building ethical standards, trust and integrity into everyday business decisions.',
    date: 'September 29, 2026'
  },
  {
    id: 4,
    slug: 'governance-oversight-and-controls',
    image: '/service4.jpg',
    category: 'Governance & Compliance',
    title: 'Governance & Compliance',
    desc: 'Perspectives on corporate governance, regulatory responsibilities and organisational accountability.',
    date: 'September 12, 2026'
  },
  {
    id: 5,
    slug: 'fraud-prevention-internal-controls',
    image: '/about-industries.jpg',
    category: 'Fraud Risk & Investigations',
    title: 'Fraud Risk & Investigations',
    desc: 'Understanding fraud risks, investigations, internal controls and prevention.',
    date: 'August 30, 2026'
  },
  {
    id: 6,
    slug: 'workplace-ethics-and-trust',
    image: '/service3.jpg',
    category: 'Ethics & Integrity',
    title: 'Ethics & Integrity',
    desc: 'Building ethical standards, trust and integrity into everyday business decisions.',
    date: 'August 18, 2026'
  }
]

export default function Blog() {
  const { slug } = useParams()
  const [selectedPost, setSelectedPost] = useState(null)

  // Check if viewing a single post via URL slug or modal
  const currentPost = slug 
    ? (slug === featuredPost.slug ? featuredPost : blogPosts.find(p => p.slug === slug))
    : selectedPost

  return (
    <div className="blog-page">
      
      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <section className="blog-hero">
        <div 
          className="blog-hero__bg"
          style={{ backgroundImage: `url('/service4.jpg')` }}
        >
          <div className="blog-hero__overlay"></div>
        </div>

        <div className="blog-hero__container">
          <div className="blog-hero__grid">
            
            {/* Left Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="blog-hero__title">
                Blog
              </h1>
            </motion.div>

            {/* Right Subtext */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="blog-hero__right"
            >
              <p className="blog-hero__text">
                Explore our perspectives, practical guidance and discussions on the issues shaping organisational integrity, governance, fraud risk management and responsible leadership.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom angled bend signature */}
        <div className="blog-hero__bend-wrap">
          <svg 
            className="blog-hero__bend" 
            viewBox="0 0 1440 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <polygon points="0,48 396,48 499,0 1440,0 1440,48 0,48" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          2. FEATURED ARTICLE SECTION
          ------------------------------------------------------------------ */}
      <section className="blog-featured">
        <div className="blog-featured__container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="blog-featured__grid"
          >
            {/* Left Text Block */}
            <div className="blog-featured__left">
              <div className="blog-featured__meta">
                <Calendar size={18} className="blog-featured__meta-icon" />
                <span className="blog-featured__date">{featuredPost.date}</span>
              </div>

              <h2 className="blog-featured__title">
                {featuredPost.title}
              </h2>

              <p className="blog-featured__text">
                {featuredPost.excerpt}
              </p>

              <div>
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="blog-featured__btn"
                >
                  <span>Read Article</span>
                </Link>
              </div>
            </div>

            {/* Right Image Block */}
            <div className="blog-featured__right">
              <Link to={`/blog/${featuredPost.slug}`} className="blog-featured__img-wrap" style={{ display: 'block' }}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.imageAlt} 
                  className="blog-featured__img"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          3. EXPLORE OUR INSIGHTS (6 BLOG CARDS GRID)
          ------------------------------------------------------------------ */}
      <section className="blog-insights">
        <div className="blog-insights__container">
          
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="blog-insights__heading"
          >
            Explore Our Insights
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="blog-insights__grid"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={fadeInUp}
                className="blog-card"
              >
                <Link to={`/blog/${post.slug}`} className="blog-card__img-wrap" style={{ display: 'block' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="blog-card__img"
                    loading="lazy"
                  />
                </Link>

                <div className="blog-card__content">
                  <h3 className="blog-card__title">
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    {post.desc}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="blog-card__read-more"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          4. ARTICLE DETAIL MODAL
          ------------------------------------------------------------------ */}
      {currentPost && (
        <div className="blog-modal" onClick={() => setSelectedPost(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="blog-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              onClick={() => setSelectedPost(null)}
              className="blog-modal__close"
              aria-label="Close article modal"
            >
              ✕
            </button>

            <div className="blog-modal__img-wrap">
              <img src={currentPost.image} alt={currentPost.title} className="blog-modal__img" />
            </div>

            <div className="blog-modal__body">
              {currentPost.date && (
                <div className="blog-modal__date">
                  <Calendar size={16} />
                  <span>{currentPost.date}</span>
                </div>
              )}
              <h2 className="blog-modal__title">{currentPost.title}</h2>
              <div className="blog-modal__text">
                <p>{currentPost.excerpt || currentPost.desc}</p>
                <p>
                  At Fortress Advisory, we believe that sound governance, transparent reporting, and dedicated ethical oversight are the core foundations of any thriving organisation. Whether addressing sensitive allegations, structuring board oversight, or fostering workplace culture, proactive leadership is essential.
                </p>
                <p>
                  Reach out to Fortress Advisory to discuss how our strategic advisory services can empower your leadership team and strengthen organisational integrity.
                </p>
              </div>

              <div className="blog-modal__action">
                <Link to="/contact" className="blog-modal__contact-btn">
                  <span>Speak With Our Advisors</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}


      {/* ------------------------------------------------------------------
          5. FINAL CTA
          ------------------------------------------------------------------ */}
      <FinalCTA />

    </div>
  )
}
