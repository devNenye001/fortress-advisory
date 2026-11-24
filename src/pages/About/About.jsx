import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, 
  PhoneIncoming, 
  IdCard, 
  ArrowRight,
  Compass,
  Eye,
  Shield,
  Lock,
  Scale
} from 'lucide-react'
import { motion } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './About.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
}

export default function About() {
  return (
    <div className="about">
      
      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <section className="about-hero">
        <div 
          className="about-hero__bg"
          style={{ backgroundImage: `url('/about-page-pic.jpg')` }}
        >
          <div className="about-hero__overlay"></div>
        </div>

        <div className="about-hero__container">
          <div className="about-hero__grid">
            
            {/* Left Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="about-hero__title">
                About Us
              </h1>
            </motion.div>

            {/* Right Subtext */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero__right"
            >
              <p className="about-hero__text">
                Whether your organisation needs support with an investigation, governance improvement, fraud risk or leadership development, Fortress Advisory is ready to start a conversation.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom angled bend */}
        <div className="about-hero__bend-wrap">
          <svg 
            className="about-hero__bend" 
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
          2. WHO WE ARE SECTION
          ------------------------------------------------------------------ */}
      <section className="about-who">
        <div className="about-who__container">
          
          <div className="about-who__grid">
            {/* Left Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="about-who__left"
            >
              <span className="about-who__label">
                +Who We Are
              </span>
              <h2 className="about-who__title">
                Strengthening Organisations Through Integrity, Insight and Responsible Leadership.
              </h2>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="about-who__right"
            >
              <p className="about-who__text">
                Fortress Advisory was founded on a simple premise: organisations thrive when integrity, accountability and sound governance are woven into everyday operations and decision-making.
              </p>
              <p className="about-who__text">
                We work closely with leadership teams, boards and oversight bodies to identify risks, resolve complex internal issues and implement practical frameworks that protect reputation, ensure compliance and foster trust.
              </p>
            </motion.div>
          </div>

          {/* Mission & Focus Blocks */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="about-who__pillars"
          >
            {/* Pillar 1: Mission */}
            <motion.div variants={fadeInUp} className="about-pillar">
              <div className="about-pillar__icon">
                <Compass size={22} strokeWidth={1.75} />
              </div>
              <h3 className="about-pillar__title">
                Our Mission
              </h3>
              <p className="about-pillar__text">
                To help organisations build and sustain ethical workplaces, navigate sensitive concerns with confidence and strengthen governance practices that inspire trust.
              </p>
            </motion.div>

            {/* Pillar 2: Focus / Vision */}
            <motion.div variants={fadeInUp} className="about-pillar">
              <div className="about-pillar__icon">
                <Eye size={22} strokeWidth={1.75} />
              </div>
              <h3 className="about-pillar__title">
                Our Focus
              </h3>
              <p className="about-pillar__text">
                To be the leading trusted advisory partner recognized for exceptional integrity, strategic depth and lasting impact across Africa and beyond.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          3. OUR SERVICES / AREAS OF EXPERTISE SECTION
          ------------------------------------------------------------------ */}
      <section className="about-services">
        <div className="about-services__container">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="about-services__header"
          >
            <span className="about-services__label">
              + Our Services
            </span>
            <h2 className="about-services__title">
              Our Areas of Expertise
            </h2>
          </motion.div>

          {/* 3 Columns Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="about-services__grid"
          >
            {/* Column 1 */}
            <motion.div variants={fadeInUp} className="about-services__col">
              <div className="about-services__icon">
                <HomeIcon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="about-services__col-title">
                Financial Crime Investigations
              </h3>
              <p className="about-services__col-text">
                Independent and confidential investigations into suspected financial crime, fraud and related misconduct, with practical findings and recommendations for management and boards.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div variants={fadeInUp} className="about-services__col">
              <div className="about-services__icon">
                <PhoneIncoming size={26} strokeWidth={1.5} />
              </div>
              <h3 className="about-services__col-title">
                Due Diligence Reviews
              </h3>
              <p className="about-services__col-text">
                Structured reviews that help organisations understand the background, integrity and potential risk associated with individuals, organisations, partners or transactions.
              </p>
            </motion.div>

            {/* Column 3 */}
            <motion.div variants={fadeInUp} className="about-services__col">
              <div className="about-services__icon">
                <IdCard size={26} strokeWidth={1.5} />
              </div>
              <h3 className="about-services__col-title">
                Executive Coaching
              </h3>
              <p className="about-services__col-text">
                Confidential, practical support for leaders seeking to improve decision-making, accountability, ethical leadership and organisational effectiveness.
              </p>
            </motion.div>
          </motion.div>

          {/* Centered CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="about-services__action"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              style={{ display: 'inline-block' }}
            >
              <Link to="/services" className="about-services__btn">
                <span>View Services</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          4. BANNER IMAGE (HANDS TOGETHER)
          ------------------------------------------------------------------ */}
      <section className="about-banner">
        <div className="about-banner__container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="about-banner__wrap"
          >
            <img 
              src="/about-hands.jpg" 
              alt="Fortress Advisory Collaboration" 
              className="about-banner__img"
            />
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          5. OUR CORE VALUES SECTION
          ------------------------------------------------------------------ */}
      <section className="about-values">
        <div className="about-values__container">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="about-values__header"
          >
            <span className="about-values__label">
              + Our Core Values
            </span>
            <h2 className="about-values__title">
              The Principles That Guide Us
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="about-values__grid"
          >
            {/* Value 1 */}
            <motion.div variants={fadeInUp} className="about-values__col">
              <div className="about-values__icon">
                <Shield size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-values__col-title">
                Integrity
              </h3>
              <p className="about-values__col-text">
                We uphold uncompromising ethical standards in every engagement, delivering honest counsel and objective evaluations.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={fadeInUp} className="about-values__col">
              <div className="about-values__icon">
                <Lock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-values__col-title">
                Confidentiality
              </h3>
              <p className="about-values__col-text">
                We treat every client conversation, investigation and organizational matter with the utmost discretion and sensitive care.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={fadeInUp} className="about-values__col">
              <div className="about-values__icon">
                <Scale size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-values__col-title">
                Accountability
              </h3>
              <p className="about-values__col-text">
                We take complete ownership of our recommendations, ensuring practical, measurable and enduring improvements for your leadership.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          6. INDUSTRIES SERVED SECTION
          ------------------------------------------------------------------ */}
      <section className="about-industries">
        <div className="about-industries__container">
          <div className="about-industries__grid">
            
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="about-industries__left"
            >
              <div className="about-industries__img-wrap">
                <img 
                  src="/about-industries.jpg" 
                  alt="Industries Served" 
                  className="about-industries__img"
                />
              </div>
            </motion.div>

            {/* Right List */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="about-industries__right"
            >
              <span className="about-industries__label">
                Industries Served
              </span>
              <h2 className="about-industries__title">
                Building Knowledge. Strengthening Workplace Culture.
              </h2>

              <ul className="about-industries__list">
                {[
                  'Financial Services',
                  'International Organisations',
                  'Government Bodies',
                  'Corporate Sector',
                  'Development Programmes',
                  'Public Sector',
                  'NGOs',
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="about-industries__item"
                  >
                    <span className="about-industries__bullet">&gt;</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          7. LEADERSHIP TEAM PROFILES (ALTERNATING)
          ------------------------------------------------------------------ */}
      <section className="about-team">
        <div className="about-team__container">
          
          {/* Profile 1: Salome Dassah (Text Left, Photo Right) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="about-profile"
          >
            <div className="about-profile__info">
              <h3 className="about-profile__name">
                Salome Dassah Meyer
              </h3>
              <span className="about-profile__role">
                Founder & Principal Consultant
              </span>
              <div className="about-profile__bio">
                <p>
                  Fortress Advisory is led by Salome Dassah, a seasoned consultant in investigations, fraud risk management, ethics, governance and leadership advisory.
                </p>
                <p>
                  She brings extensive experience supporting organisations in addressing complex challenges, strengthening organisational integrity and navigating sensitive matters with professional judgement and insight.
                </p>
              </div>
            </div>
            <div className="about-profile__photo-wrap">
              <img 
                src="/about-portrait.jpg" 
                alt="Salome Dassah Meyer" 
                className="about-profile__photo"
              />
            </div>
          </motion.div>

          {/* Profile 2: Kennedy Mwema (Photo Left, Text Right) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="about-profile about-profile--reversed"
          >
            <div className="about-profile__photo-wrap">
              <img 
                src="/about-portrait.jpg" 
                alt="Kennedy Mwema" 
                className="about-profile__photo"
              />
            </div>
            <div className="about-profile__info">
              <h3 className="about-profile__name">
                Kennedy Mwema
              </h3>
              <span className="about-profile__role">
                Partner & Principal Consultant
              </span>
              <div className="about-profile__bio">
                <p>
                  Fortress Advisory is led by Kennedy Mwema, a seasoned leader in investigations, fraud risk management, ethics, governance and leadership advisory.
                </p>
                <p>
                  He provides strategic advisory to management teams and oversight bodies, translating regulatory demands into actionable, lasting governance mechanisms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile 3: Savina Musonda (Text Left, Photo Right) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="about-profile"
          >
            <div className="about-profile__info">
              <h3 className="about-profile__name">
                Savina Musonda
              </h3>
              <span className="about-profile__role">
                Executive Coach & Advisory Consultant
              </span>
              <div className="about-profile__bio">
                <p>
                  Fortress Advisory is led by Savina Musonda, a seasoned expert in executive coaching, ethical leadership and workplace governance.
                </p>
                <p>
                  She empowers leaders across public and private sectors to align institutional behaviors with core integrity standards, driving sustainable growth.
                </p>
              </div>
            </div>
            <div className="about-profile__photo-wrap">
              <img 
                src="/about-portrait.jpg" 
                alt="Savina Musonda" 
                className="about-profile__photo"
              />
            </div>
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------------
          8. TRAINING AND WORKSHOPS SECTION (MATCHING HOME)
          ------------------------------------------------------------------ */}
      <section className="about-training">
        <div className="about-training__container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="about-training__grid"
          >
            {/* Left */}
            <div className="about-training__left">
              <span className="about-training__label">
                +Training and Workshops
              </span>

              <h2 className="about-training__title">
                Building Knowledge. Strengthening<br />
                Workplace Culture.
              </h2>

              <p className="about-training__subtitle">
                Areas Include:
              </p>

              <ul className="about-training__list">
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
                    className="about-training__item"
                  >
                    <span className="about-training__bullet">&gt;</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="about-training__right">
              <div className="about-training__img-wrap">
                <img 
                  src="/traning-section-pic.jpg" 
                  alt="Training and Workshops" 
                  className="about-training__img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------------------
          9. FINAL CTA COMPONENT
          ------------------------------------------------------------------ */}
      <FinalCTA />

    </div>
  )
}
