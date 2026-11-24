import React, { useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './Services.css'

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

export const servicesData = [
  {
    id: '01',
    slug: 'service1',
    title: 'Investigations & Whistleblower Reviews',
    image: '/service1.jpg',
    imageAlt: 'Investigations & Whistleblower Reviews',
    paragraphs: [
      'We support organisations in examining allegations of misconduct, fraud, unethical behaviour and other workplace concerns.',
      'Our approach emphasizes objectivity, confidentiality and a thorough review of available information to help organisations understand issues and make informed decisions.'
    ]
  },
  {
    id: '02',
    slug: 'service2',
    title: 'Governance & Policy Development',
    image: '/service2.jpg',
    imageAlt: 'Governance & Policy Development',
    paragraphs: [
      'We help organisations review and improve their governance structures, policies and internal procedures.',
      'Our goal is to support clear responsibilities, effective oversight, transparent decision-making and policies that reflect organisational values and objectives.'
    ]
  },
  {
    id: '03',
    slug: 'service3',
    title: 'Fraud Risk Management',
    image: '/service3.jpg',
    imageAlt: 'Fraud Risk Management',
    paragraphs: [
      'We help organisations understand their exposure to fraud and strengthen the controls designed to prevent, detect and respond to fraudulent activities.',
      'Our advisory support focuses on identifying vulnerabilities, assessing existing controls and recommending practical improvements.'
    ]
  },
  {
    id: '04',
    slug: 'service4',
    title: 'Ethics & Integrity Advisory',
    image: '/service4.jpg',
    imageAlt: 'Ethics & Integrity Advisory',
    paragraphs: [
      'Strong ethical standards are essential to organisational trust. We advise organisations on developing and strengthening ethical practices that guide everyday decisions and professional conduct.',
      'Our support includes ethics assessments, codes of conduct, integrity initiatives and guidance on ethical challenges.'
    ]
  },
  {
    id: '05',
    slug: 'service5',
    title: 'Conflict of Interest Advisory',
    image: '/service5.jpg',
    imageAlt: 'Conflict of Interest Advisory',
    paragraphs: [
      'Undisclosed or poorly managed conflicts of interest can undermine organisational trust. We help organisations identify potential conflicts, establish clear policies and procedures and develop practical management plans.'
    ]
  },
  {
    id: '06',
    slug: 'service6',
    title: 'Leadership Coaching',
    image: '/service6.jpg',
    imageAlt: 'Leadership Coaching',
    paragraphs: [
      'We support leaders in strengthening their decision-making, professional effectiveness and ability to navigate sensitive, ethical and confidential workplace situations.',
      'Our leadership advisory approach encourages responsible leadership, effective communication and sound organisational judgement.'
    ]
  },
  {
    id: '07',
    slug: 'service7',
    title: 'Fractional Executive Advisory',
    image: '/service7.jpg',
    imageAlt: 'Fractional Executive Advisory',
    paragraphs: [
      'We provide flexible, executive-level support to organisations that require experienced strategic guidance without necessarily requiring a full-time executive appointment.',
      'Our support can help leadership teams navigate organisational challenges, strengthen decision-making and maintain focus on governance, ethics and accountability.'
    ]
  }
]

export default function Services() {
  const location = useLocation()
  const { id } = useParams()

  // Handle auto-scroll to service if navigated via hash or param (e.g. #service1 or /service1)
  useEffect(() => {
    let targetId = ''
    if (location.hash) {
      targetId = location.hash.replace('#', '')
    } else if (id) {
      targetId = id.startsWith('service') ? id : `service${id}`
    }

    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      }
    }
  }, [location, id])

  return (
    <div className="services-page">
      
      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <section className="services-hero">
        <div 
          className="services-hero__bg"
          style={{ backgroundImage: `url('/traning-section-pic.jpg')` }}
        >
          <div className="services-hero__overlay"></div>
        </div>

        <div className="services-hero__container">
          <div className="services-hero__grid">
            
            {/* Left Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="services-hero__title">
                Services
              </h1>
            </motion.div>

            {/* Right Subtext */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="services-hero__right"
            >
              <p className="services-hero__text">
                We provide independent advisory services that help organisations address complex challenges, manage risks, strengthen internal practices and promote ethical leadership.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom angled bend signature */}
        <div className="services-hero__bend-wrap">
          <svg 
            className="services-hero__bend" 
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
          2. INTRO HEADLINE SECTION
          ------------------------------------------------------------------ */}
      <section className="services-intro">
        <div className="services-intro__container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-intro__title"
          >
            Practical Expertise. Stronger Governance.<br />
            Lasting Integrity.
          </motion.h2>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          3. 7 SERVICES LIST (SERVICE 1 TO 7)
          ------------------------------------------------------------------ */}
      <section className="services-list">
        <div className="services-list__container">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInUp}
              className="service-row"
            >
              {/* Left Column: Image */}
              <div className="service-row__media">
                <div className="service-row__img-wrap">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="service-row__img" 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Number + Content */}
              <div className="service-row__content">
                <div className="service-row__meta">
                  <span className="service-row__number">{service.id}</span>
                </div>

                <div className="service-row__text-block">
                  <h3 className="service-row__title">{service.title}</h3>
                  <div className="service-row__paragraphs">
                    {service.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="service-row__text">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ------------------------------------------------------------------
          4. HOW WE WORK (METHODOLOGY)
          ------------------------------------------------------------------ */}
      <section className="services-how">
        <div className="services-how__container">
          <div className="services-how__card">
            <div className="services-how__grid">
              
              {/* Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="services-how__left"
              >
                <span className="services-how__label">
                  + How We Work
                </span>
                <h3 className="services-how__title">
                  A Thoughtful Approach<br />
                  to Every Organisational<br />
                  Challenge.
                </h3>
              </motion.div>

              {/* Right Steps Column */}
              <div className="services-how__steps-wrap">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                  className="services-how__steps"
                >
                  {/* Step 1 */}
                  <motion.div variants={fadeInUp} className="services-how__step">
                    <div className="services-how__num">
                      1
                    </div>
                    <h4 className="services-how__step-title">
                      Understand Your Needs
                    </h4>
                    <p className="services-how__step-text">
                      We take time to listen, understand your concerns and identify your organisation's specific challenges and objectives.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={fadeInUp} className="services-how__step">
                    <div className="services-how__num">
                      2
                    </div>
                    <h4 className="services-how__step-title">
                      Assess & Develop Solutions
                    </h4>
                    <p className="services-how__step-text">
                      We examine the issues, evaluate relevant risks and develop practical recommendations tailored to your organisation.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div variants={fadeInUp} className="services-how__step">
                    <div className="services-how__num">
                      3
                    </div>
                    <h4 className="services-how__step-title">
                      Advise & Strengthen
                    </h4>
                    <p className="services-how__step-text">
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
          5. FINAL CTA
          ------------------------------------------------------------------ */}
      <FinalCTA />

    </div>
  )
}
