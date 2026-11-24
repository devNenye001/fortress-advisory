import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import './Contact.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
      delayChildren: 0.05,
    }
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      organisation: '',
      email: '',
      message: ''
    })
    setSubmitted(false)
  }

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-grid">
          
          {/* ----------------------------------------------------------------
              1. LEFT COLUMN: INFO & INTRO
              ---------------------------------------------------------------- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="contact-info"
          >
            <motion.h1 variants={fadeInUp} className="contact-info__title">
              We will love to hear<br />
              from you
            </motion.h1>

            <motion.p variants={fadeInUp} className="contact-info__desc">
              Whether you require an investigation, risk assessment, due diligence review, leadership advisory support or training, contact Fortress Advisory to discuss your requirements confidentially.
            </motion.p>

            {/* Direct Contact List */}
            <motion.div variants={fadeInUp} className="contact-list">
              
              {/* Email */}
              <a 
                href="mailto:fortressrisk@gmail.com" 
                className="contact-item"
                title="Send an email to Fortress Advisory"
              >
                <div className="contact-item__icon-wrap">
                  <Mail size={22} className="contact-item__icon" />
                </div>
                <span className="contact-item__text">
                  fortressrisk@gmail.com
                </span>
              </a>

              {/* Phone 1 */}
              <a 
                href="tel:+260977725909" 
                className="contact-item"
                title="Call +260 977 725 909"
              >
                <div className="contact-item__icon-wrap">
                  <Phone size={22} className="contact-item__icon" />
                </div>
                <span className="contact-item__text">
                  +260 977 725 909
                </span>
              </a>

              {/* Phone 2 */}
              <a 
                href="tel:+260975965810" 
                className="contact-item"
                title="Call +260 975 965 810"
              >
                <div className="contact-item__icon-wrap">
                  <Phone size={22} className="contact-item__icon" />
                </div>
                <span className="contact-item__text">
                  +260 975 965 810
                </span>
              </a>

              {/* Phone 3 */}
              <a 
                href="tel:+260977464880" 
                className="contact-item"
                title="Call +260 977 464 880"
              >
                <div className="contact-item__icon-wrap">
                  <Phone size={22} className="contact-item__icon" />
                </div>
                <span className="contact-item__text">
                  +260 977 464 880
                </span>
              </a>

            </motion.div>
          </motion.div>


          {/* ----------------------------------------------------------------
              2. RIGHT COLUMN: CONTACT FORM CARD
              ---------------------------------------------------------------- */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="contact-card"
          >
            <h2 className="contact-card__title">
              Send us a message.
            </h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="contact-card__success"
                >
                  <div className="contact-card__success-icon">
                    <CheckCircle size={48} color="#059669" />
                  </div>
                  <h3 className="contact-card__success-title">
                    Message Received
                  </h3>
                  <p className="contact-card__success-text">
                    Thank you, <strong>{formData.fullName || 'there'}</strong>. Our advisory team will review your message and reach out confidentially.
                  </p>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="contact-card__reset-btn"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* Full Name */}
                  <div className="contact-form__field">
                    <label htmlFor="fullName" className="contact-form__label">
                      Full Name<span className="contact-form__required">*</span>
                    </label>
                    <input 
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="contact-form__input"
                    />
                  </div>

                  {/* Organisation */}
                  <div className="contact-form__field">
                    <label htmlFor="organisation" className="contact-form__label">
                      Organisation
                    </label>
                    <input 
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Enter the name of your organisation"
                      className="contact-form__input"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="contact-form__field">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address<span className="contact-form__required">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="contact-form__input"
                    />
                  </div>

                  {/* Message */}
                  <div className="contact-form__field">
                    <label htmlFor="message" className="contact-form__label">
                      Message<span className="contact-form__required">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief description of your enquiry"
                      className="contact-form__textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="contact-form__submit"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

