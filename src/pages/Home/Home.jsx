import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, 
  PhoneIncoming, 
  IdCard, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './Home.css'

function ScrollTextWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.28, 1])
  const color = useTransform(progress, range, ['#9ca3af', '#111827'])

  return (
    <motion.span style={{ opacity, color }}>
      {word}
    </motion.span>
  )
}

function ScrollLabel({ text, progress }) {
  const opacity = useTransform(progress, [0, 0.25], [0.35, 1])
  const color = useTransform(progress, [0, 0.25], ['#9ca3af', '#032543'])

  return (
    <motion.span style={{ opacity, color }} className="what-we-do__label">
      {text}
    </motion.span>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

export default function Home() {
  const insightsTrackRef = useRef(null)
  const whatWeDoRef = useRef(null)
  const { scrollYProgress: whatWeDoProgress } = useScroll({
    target: whatWeDoRef,
    offset: ['start 0.88', 'start 0.32'],
  })

  const headlineWords = [
    'Fortress',
    'Advisory',
    'provides',
    'independent,',
    'practical',
    'and',
    'strategic',
    'advisory',
    'services',
    'that',
    'help',
    'organisations',
    'navigate',
    'sensitive',
    'matters,',
    'address',
    'organisational',
    'risks',
    'and',
    'strengthen',
    'their',
    'governance',
    'and',
    'ethical',
    'standards.',
  ]

  const blogPosts = [
    {
      image: '/blog1.jpg',
      title: 'Governance & Compliance',
      desc: 'Perspectives on corporate governance, regulatory responsibilities and organisational accountability.',
    },
    {
      image: '/why1.jpg',
      title: 'Fraud Risk & Investigations',
      desc: 'Understanding fraud risks, investigations, internal controls and prevention.',
    },
    {
      image: '/why3.jpg',
      title: 'Ethics & Integrity',
      desc: 'Building ethical standards and integrity into everyday practices.',
    },
    {
      image: '/why2.jpg',
      title: 'Confidential Due Diligence',
      desc: 'Navigating partner risks, forensic audits and strategic organisational integrity.',
    },
    {
      image: '/about-hands.jpg',
      title: 'Ethical Leadership & Culture',
      desc: 'Practical frameworks for boards and executive management to foster accountable leadership.',
    },
  ]

  const isDragging = React.useRef(false)
  const startX = React.useRef(0)
  const scrollLeftPos = React.useRef(0)
  const [isGrabbing, setIsGrabbing] = useState(false)

  const handlePrevBlog = () => {
    if (insightsTrackRef.current) {
      const card = insightsTrackRef.current.querySelector('.insights__card')
      const scrollStep = card ? card.offsetWidth + 24 : 380
      insightsTrackRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' })
    }
  }

  const handleNextBlog = () => {
    if (insightsTrackRef.current) {
      const card = insightsTrackRef.current.querySelector('.insights__card')
      const scrollStep = card ? card.offsetWidth + 24 : 380
      insightsTrackRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' })
    }
  }

  const handleMouseDown = (e) => {
    if (!insightsTrackRef.current) return
    isDragging.current = true
    setIsGrabbing(true)
    startX.current = e.pageX - insightsTrackRef.current.offsetLeft
    scrollLeftPos.current = insightsTrackRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    setIsGrabbing(false)
  }

  const handleMouseUp = () => {
    isDragging.current = false
    setIsGrabbing(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !insightsTrackRef.current) return
    e.preventDefault()
    const x = e.pageX - insightsTrackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    insightsTrackRef.current.scrollLeft = scrollLeftPos.current - walk
  }

  return (
    <div className="home">
      
      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <section className="home-hero">
        <div 
          className="home-hero__bg"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        >
          <div className="home-hero__overlay"></div>
        </div>

        <div className="home-hero__container">
          <div className="home-hero__grid">
            
            {/* Left Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="home-hero__title">
                Safeguarding Integrity.<br />
                Enabling Ethical Leadership.
              </h1>
            </motion.div>

            {/* Right Subtext & Button */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="home-hero__right"
            >
              <p className="home-hero__text">
                Fortress Advisory works with organisations and their leaders to address complex challenges, strengthen accountability, manage risk and create workplaces built on integrity.
              </p>
              <div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'inline-block' }}
                >
                  <Link to="/services" className="home-hero__btn">
                    <span>View Services</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          2. WHAT WE DO SECTION
          ------------------------------------------------------------------ */}
      <section className="what-we-do">
        <div className="what-we-do__container">
          
          <div ref={whatWeDoRef} className="what-we-do__layout">
            
            {/* Left Sidebar Label */}
            <div className="what-we-do__sidebar">
              <ScrollLabel text="+ What We Do" progress={whatWeDoProgress} />
            </div>

            {/* Right Main Content */}
            <div className="what-we-do__main">
              
              {/* Headline with grey to black progressive scroll transition */}
              <h2 className="what-we-do__headline">
                {headlineWords.map((word, idx) => {
                  const start = 0.04 + (idx / headlineWords.length) * 0.86
                  const end = Math.min(1, start + 0.12)
                  return (
                    <React.Fragment key={idx}>
                      <ScrollTextWord 
                        word={word} 
                        progress={whatWeDoProgress} 
                        range={[start, end]} 
                      />
                      {' '}
                    </React.Fragment>
                  )
                })}
              </h2>

              {/* 3 Columns Grid */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="what-we-do__grid"
              >
                {/* Column 1 */}
                <motion.div variants={fadeInUp} className="what-we-do__col">
                  <div className="what-we-do__icon">
                    <HomeIcon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="what-we-do__title">
                    Financial Crime Investigations
                  </h3>
                  <p className="what-we-do__text">
                    Independent and confidential investigations into suspected financial crime, fraud and related misconduct, with practical findings and recommendations for management and boards
                  </p>
                </motion.div>

                {/* Column 2 */}
                <motion.div variants={fadeInUp} className="what-we-do__col">
                  <div className="what-we-do__icon">
                    <PhoneIncoming size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="what-we-do__title">
                    Due Diligence Reviews
                  </h3>
                  <p className="what-we-do__text">
                    Structured reviews that help organisations understand the background, integrity and potential risk associated with individuals, organisations, partners or transactions.
                  </p>
                </motion.div>

                {/* Column 3 */}
                <motion.div variants={fadeInUp} className="what-we-do__col">
                  <div className="what-we-do__icon">
                    <IdCard size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="what-we-do__title">
                    Executive Coaching
                  </h3>
                  <p className="what-we-do__text">
                    Confidential, practical support for leaders seeking to improve decision-making, accountability, ethical leadership and organisational effectiveness.
                  </p>
                </motion.div>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="what-we-do__action"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  style={{ display: 'inline-block' }}
                >
                  <Link to="/services" className="what-we-do__btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          3. WHY FORTRESS ADVISORY? (EDGE-TO-EDGE PANELS)
          ------------------------------------------------------------------ */}
      <section className="why-us">
        <div className="why-us__container">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="why-us__title"
          >
            Why Fortress Advisory?
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="why-us__grid"
        >
          {/* Card 1: why1.jpg */}
          <motion.div variants={fadeInUp} className="why-us__card">
            <img 
              src="/why1.jpg" 
              alt="Independent Perspective" 
              className="why-us__img"
            />
            <div className="why-us__overlay">
              <div className="why-us__badge">
                1
              </div>
              <h3 className="why-us__card-title">
                Independent Perspective
              </h3>
              <p className="why-us__card-text">
                Objective guidance that supports fair<br />
                and informed decisions.
              </p>
            </div>
          </motion.div>

          {/* Card 2: why2.jpg */}
          <motion.div variants={fadeInUp} className="why-us__card">
            <img 
              src="/why2.jpg" 
              alt="Confidential Engagement" 
              className="why-us__img"
            />
            <div className="why-us__overlay">
              <div className="why-us__badge">
                2
              </div>
              <h3 className="why-us__card-title">
                Confidential Engagement
              </h3>
              <p className="why-us__card-text">
                Appropriate discretion when handling<br />
                sensitive organisational matters.
              </p>
            </div>
          </motion.div>

          {/* Card 3: why3.jpg */}
          <motion.div variants={fadeInUp} className="why-us__card">
            <img 
              src="/why3.jpg" 
              alt="Independent Perspective" 
              className="why-us__img"
            />
            <div className="why-us__overlay">
              <div className="why-us__badge">
                3
              </div>
              <h3 className="why-us__card-title">
                Independent Perspective
              </h3>
              <p className="why-us__card-text">
                Recommendations designed around real<br />
                organisational needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* ------------------------------------------------------------------
          4. LEADERSHIP SECTION
          ------------------------------------------------------------------ */}
      <section className="leadership">
        <div className="leadership__container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="leadership__grid"
          >
            {/* Left */}
            <div className="leadership__left">
              <span className="leadership__label">
                +Leadership
              </span>
              <h2 className="leadership__title">
                Experience That<br />
                Supports Better Decisions
              </h2>
            </div>

            {/* Right */}
            <div className="leadership__right">
              <p className="leadership__text">
                Effective advisory work requires experience, professional judgement and a clear understanding of organisational realities. Led by <strong>Salome Dassah</strong>, Founder and Principal Consultant, Fortress Advisory brings together expertise in investigations, fraud risk management, ethics, governance and leadership advisory.
              </p>
              <p className="leadership__text">
                Through a practical and independent approach, the firm supports organisations and their leaders in addressing complex challenges and strengthening organisational integrity.
              </p>
              <div>
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  style={{ display: 'inline-block' }}
                >
                  <Link to="/about" className="leadership__btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          5. TRAINING AND WORKSHOPS SECTION
          ------------------------------------------------------------------ */}
      <section className="training">
        <div className="training__container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="training__grid"
          >
            {/* Left */}
            <div className="training__left">
              <span className="training__label">
                +Training and Workshops
              </span>

              <h2 className="training__title">
                Building Knowledge. Strengthening<br />
                Workplace Culture.
              </h2>

              <p className="training__subtitle">
                Areas Include:
              </p>

              <ul className="training__list">
                {[
                  'Ethics and integrity.',
                  'Fraud awareness and prevention.',
                  'Respectful workplace practices.',
                  'Ethical leadership and accountability.',
                  'Executive and board development.',
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="training__item"
                  >
                    <span className="training__bullet">&gt;</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="training__right">
              <div className="training__img-wrap">
                <img 
                  src="/traning-section-pic.jpg" 
                  alt="Training and Workshops" 
                  className="training__img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          6. HOW WE WORK (METHODOLOGY)
          ------------------------------------------------------------------ */}
      <section className="how-we-work">
        <div className="how-we-work__container">
          <div className="how-we-work__card">
            <div className="how-we-work__grid">
              
              {/* Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="how-we-work__left"
              >
                <span className="how-we-work__label">
                  + How We Work
                </span>
                <h3 className="how-we-work__title">
                  A Thoughtful Approach<br />
                  to Every Organisational<br />
                  Challenge.
                </h3>
              </motion.div>

              {/* Right Steps Column */}
              <div className="how-we-work__steps-wrap">
                <div className="how-we-work__line"></div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                  className="how-we-work__steps"
                >
                  {/* Step 1 */}
                  <motion.div variants={fadeInUp} className="how-we-work__step">
                    <div className="how-we-work__num">
                      1
                    </div>
                    <h4 className="how-we-work__step-title">
                      Understand Your Needs
                    </h4>
                    <p className="how-we-work__step-text">
                      We take time to listen, understand your concerns and identify your organisation's specific challenges and objectives.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={fadeInUp} className="how-we-work__step">
                    <div className="how-we-work__num">
                      2
                    </div>
                    <h4 className="how-we-work__step-title">
                      Assess & Develop Solutions
                    </h4>
                    <p className="how-we-work__step-text">
                      We examine the issues, evaluate relevant risks and develop practical recommendations tailored to your organisation.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div variants={fadeInUp} className="how-we-work__step">
                    <div className="how-we-work__num">
                      3
                    </div>
                    <h4 className="how-we-work__step-title">
                      Advise & Strengthen
                    </h4>
                    <p className="how-we-work__step-text">
                      We provide professional guidance to support informed decisions, stronger practices and lasting organisational improvement.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          7. INSIGHTS / BLOGS SECTION
          ------------------------------------------------------------------ */}
      <section className="insights">
        <div className="insights__container">
          
          {/* Header & slider arrows */}
          <div className="insights__header">
            <div>
              <span className="insights__label">
                +Insights
              </span>
              <h2 className="insights__title">
                Perspectives on Integrity,<br />
                Governance and Leadership
              </h2>
            </div>

            <div className="insights__nav">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={handlePrevBlog}
                className="insights__arrow-btn"
                aria-label="Previous insight"
              >
                <ChevronLeft size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={handleNextBlog}
                className="insights__arrow-btn"
                aria-label="Next insight"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Horizontal Scrolling Insights Track */}
          <div 
            ref={insightsTrackRef}
            className={`insights__track ${isGrabbing ? 'insights__track--grabbing' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {blogPosts.map((post, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="insights__card"
              >
                <div className="insights__img-wrap">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="insights__img"
                  />
                </div>
                <div className="insights__card-content">
                  <h3 className="insights__card-title">
                    {post.title}
                  </h3>
                  <p className="insights__card-text">
                    {post.desc}
                  </p>
                  <Link to="/blog" className="insights__read-more">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          8. FINAL CTA COMPONENT
          ------------------------------------------------------------------ */}
      <FinalCTA />

    </div>
  )
}

