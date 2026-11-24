import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  Heart, 
  ChevronRight, 
  ArrowRight, 
  ChevronLeft,
  Share2,
  Check
} from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './BlogDetail.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
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
      staggerChildren: 0.12,
      delayChildren: 0.08,
    }
  }
}

// Explore more articles dataset
const moreArticlesData = [
  {
    id: 1,
    slug: 'governance-and-compliance',
    category: 'Governance & Compliance',
    title: 'Governance & Compliance',
    desc: 'Perspectives on corporate governance, regulatory responsibilities and organisational accountability.',
    image: '/why2.jpg',
  },
  {
    id: 2,
    slug: 'fraud-risk-and-investigations',
    category: 'Fraud Risk & Investigations',
    title: 'Fraud Risk & Investigations',
    desc: 'Understanding fraud risks, investigations, internal controls and prevention.',
    image: '/why1.jpg',
  },
  {
    id: 3,
    slug: 'ethics-and-integrity-culture',
    category: 'Ethics & Integrity',
    title: 'Ethics & Integrity',
    desc: 'Building ethical standards, trust and integrity into everyday business decisions.',
    image: '/service7.jpg',
  },
  {
    id: 4,
    slug: 'governance-oversight-and-controls',
    category: 'Governance & Compliance',
    title: 'Corporate Oversight & Governance',
    desc: 'Essential frameworks for boards and leaders to maintain transparency and regulatory compliance.',
    image: '/service4.jpg',
  },
  {
    id: 5,
    slug: 'fraud-prevention-internal-controls',
    category: 'Fraud Risk & Investigations',
    title: 'Internal Controls & Fraud Prevention',
    desc: 'Proactive steps organisations can implement to identify fraud vulnerabilities early.',
    image: '/about-industries.jpg',
  }
]

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)
  const sliderRef = useRef(null)

  // Scroll reading progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // Slider controls for explore more articles
  const handlePrevSlide = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.blog-detail-more__card')
      const step = card ? card.offsetWidth + 24 : 360
      sliderRef.current.scrollBy({ left: -step, behavior: 'smooth' })
    }
  }

  const handleNextSlide = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.blog-detail-more__card')
      const step = card ? card.offsetWidth + 24 : 360
      sliderRef.current.scrollBy({ left: step, behavior: 'smooth' })
    }
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="blog-detail-page">
      {/* Scroll Reading Progress Bar */}
      <motion.div 
        className="blog-detail__progress-bar" 
        style={{ scaleX }} 
      />

      <article className="blog-detail">
        <div className="blog-detail__container">
          
          {/* ----------------------------------------------------------------
              1. BREADCRUMBS
              ---------------------------------------------------------------- */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="blog-detail__breadcrumbs"
            aria-label="Breadcrumbs"
          >
            <Link to="/" className="blog-detail__crumb">Home</Link>
            <ChevronRight size={14} className="blog-detail__crumb-sep" />
            <Link to="/blog" className="blog-detail__crumb">Blog</Link>
            <ChevronRight size={14} className="blog-detail__crumb-sep" />
            <span className="blog-detail__crumb blog-detail__crumb--active">Ethics &amp; Integrity</span>
          </motion.nav>


          {/* ----------------------------------------------------------------
              2. ARTICLE TITLE
              ---------------------------------------------------------------- */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="blog-detail__header"
          >
            <h1 className="blog-detail__title">
              Building a Culture of Integrity: Why Ethical Leadership Matters in Every Organisation
            </h1>

            {/* Meta Tags & Action Row */}
            <div className="blog-detail__meta-row">
              <div className="blog-detail__badges">
                <span className="blog-detail__badge blog-detail__badge--cat">
                  Ethics &amp; Integrity
                </span>

                <span className="blog-detail__badge">
                  <Clock size={16} className="blog-detail__badge-icon" />
                  <span>5 min read</span>
                </span>

                <span className="blog-detail__badge">
                  <Calendar size={16} className="blog-detail__badge-icon" />
                  <span>November 11, 2026</span>
                </span>
              </div>

              <div className="blog-detail__actions">
                <button 
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`blog-detail__icon-btn ${liked ? 'blog-detail__icon-btn--liked' : ''}`}
                  aria-label="Like article"
                  title="Like article"
                >
                  <Heart size={18} fill={liked ? '#ef4444' : 'none'} color={liked ? '#ef4444' : '#64748b'} />
                </button>

                <button 
                  type="button"
                  onClick={handleShare}
                  className="blog-detail__icon-btn"
                  aria-label="Share article link"
                  title="Copy article link"
                >
                  {copied ? <Check size={18} color="#10b981" /> : <Share2 size={18} color="#64748b" />}
                </button>
              </div>
            </div>
          </motion.header>


          {/* ----------------------------------------------------------------
              3. FEATURED COVER IMAGE
              ---------------------------------------------------------------- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="blog-detail__cover-wrap"
          >
            <img 
              src="/service5.jpg" 
              alt="Building a Culture of Integrity" 
              className="blog-detail__cover-img"
            />
          </motion.div>


          {/* ----------------------------------------------------------------
              4. ARTICLE CONTENT + SIDEBAR GRID
              ---------------------------------------------------------------- */}
          <div className="blog-detail__grid">
            
            {/* Left Content Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeInUp}
              className="blog-detail__content"
            >
              {/* Lead Paragraph */}
              <p className="blog-detail__lead">
                Organisational integrity is built through the decisions leaders make, the standards they uphold and the behaviour they encourage across the workplace. While policies and procedures provide guidance, it is leadership that brings those values to life.
              </p>
              <p className="blog-detail__p">
                Ethical leadership helps organisations create environments where honesty, accountability and responsible conduct are part of everyday operations.
              </p>

              {/* Section 1 */}
              <h2 className="blog-detail__h2">
                What is Ethical Leadership?
              </h2>
              <p className="blog-detail__p">
                Ethical leadership is the practice of leading with honesty, fairness, transparency and accountability. It involves making decisions based on sound values, treating people fairly and taking responsibility for the impact of those decisions.
              </p>
              <p className="blog-detail__p">
                Leaders set the standard for workplace conduct. Their actions influence how employees communicate, make decisions and respond to organisational challenges.
              </p>

              {/* Section 2 */}
              <h2 className="blog-detail__h2">
                Why Ethical Leadership Matters
              </h2>
              <div className="blog-detail__points">
                <div className="blog-detail__point">
                  <h3 className="blog-detail__h3">1. Builds Trust Across the Organisation</h3>
                  <p className="blog-detail__p">
                    Employees are more likely to trust leadership when decisions are transparent, expectations are clear and people are treated fairly.
                  </p>
                </div>

                <div className="blog-detail__point">
                  <h3 className="blog-detail__h3">2. Strengthens Accountability</h3>
                  <p className="blog-detail__p">
                    Ethical leadership encourages individuals at every level to take responsibility for their actions and decisions.
                  </p>
                </div>

                <div className="blog-detail__point">
                  <h3 className="blog-detail__h3">3. Promotes a Positive Workplace Culture</h3>
                  <p className="blog-detail__p">
                    When leaders demonstrate respect, fairness and integrity, these behaviours become part of the organisation's wider culture.
                  </p>
                </div>

                <div className="blog-detail__point">
                  <h3 className="blog-detail__h3">4. Supports Better Decision-Making</h3>
                  <p className="blog-detail__p">
                    Clear ethical standards help leaders and employees navigate difficult situations and make responsible choices.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="blog-detail__h2">
                How Organisations Can Promote Ethical Leadership
              </h2>
              <p className="blog-detail__p">
                Building an ethical workplace requires more than written policies. Organisations must actively encourage and reinforce responsible behaviour.
              </p>
              <p className="blog-detail__p">
                Some practical steps include:
              </p>
              <ul className="blog-detail__list">
                <li>Establishing clear codes of conduct and ethical standards.</li>
                <li>Encouraging transparency and open communication.</li>
                <li>Providing regular ethics and integrity training.</li>
                <li>Creating safe channels for reporting misconduct.</li>
                <li>Holding leaders and employees accountable for their actions.</li>
                <li>Ensuring policies are consistently applied across the organisation.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="blog-detail__h2">
                The Role of Organisational Leadership
              </h2>
              <p className="blog-detail__p">
                Leaders have a responsibility to demonstrate the values they expect others to follow. When leadership behaviour aligns with organisational standards, it strengthens credibility and encourages employees to uphold the same principles.
              </p>
              <p className="blog-detail__p">
                Ethical leadership should therefore be viewed as an ongoing organisational commitment rather than a one-time initiative.
              </p>

              {/* Section 5 */}
              <h2 className="blog-detail__h2">
                Final Thoughts
              </h2>
              <p className="blog-detail__p">
                A culture of integrity is built through consistent actions, responsible leadership and shared accountability. Organisations that prioritise ethical conduct are better positioned to strengthen trust, manage challenges and maintain professional standards.
              </p>
              <p className="blog-detail__p">
                At Fortress Advisory, we recognise the importance of integrity, sound governance and responsible leadership in building stronger organisations.
              </p>

              {/* Conversation Callout */}
              <div className="blog-detail__callout">
                <p className="blog-detail__callout-text">
                  Need support strengthening ethical practices in your organisation?
                </p>
                <Link to="/contact" className="blog-detail__callout-link">
                  <span>Let's start a conversation.</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </motion.div>

            {/* Right Sticky Sidebar */}
            <aside className="blog-detail__sidebar">
              <div className="blog-detail__sidebar-card">
                <h3 className="blog-detail__sidebar-title">
                  Follow us
                </h3>
                <p className="blog-detail__sidebar-desc">
                  Get the latest articles and insights.
                </p>

                {/* Social Links */}
                <div className="blog-detail__socials">
                  {/* Facebook */}
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-detail__social-icon"
                    aria-label="Follow Fortress Advisory on Facebook"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-detail__social-icon"
                    aria-label="Follow Fortress Advisory on Instagram"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-detail__social-icon"
                    aria-label="Follow Fortress Advisory on X"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-detail__social-icon"
                    aria-label="Follow Fortress Advisory on LinkedIn"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>

          </div>

        </div>
      </article>


      {/* ------------------------------------------------------------------
          5. EXPLORE MORE ARTICLES (SLIDER / CARDS)
          ------------------------------------------------------------------ */}
      <section className="blog-detail-more">
        <div className="blog-detail-more__container">
          
          <div className="blog-detail-more__header">
            <h2 className="blog-detail-more__heading">
              Explore more articles
            </h2>

            <div className="blog-detail-more__nav">
              <button 
                type="button" 
                onClick={handlePrevSlide}
                className="blog-detail-more__arrow-btn"
                aria-label="Previous article"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                type="button" 
                onClick={handleNextSlide}
                className="blog-detail-more__arrow-btn"
                aria-label="Next article"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div ref={sliderRef} className="blog-detail-more__track">
            {moreArticlesData.map((article) => (
              <motion.article 
                key={article.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="blog-detail-more__card"
                onClick={() => navigate(`/blog/${article.slug}`)}
              >
                <div className="blog-detail-more__img-wrap">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="blog-detail-more__img"
                    loading="lazy"
                  />
                </div>

                <div className="blog-detail-more__card-body">
                  <h3 className="blog-detail-more__card-title">
                    {article.title}
                  </h3>
                  <p className="blog-detail-more__card-text">
                    {article.desc}
                  </p>
                  <Link to={`/blog/${article.slug}`} className="blog-detail-more__read-more">
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          6. FINAL CTA
          ------------------------------------------------------------------ */}
      <FinalCTA />

    </div>
  )
}

