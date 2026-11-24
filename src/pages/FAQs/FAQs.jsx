import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import './FAQs.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
}

export const faqsData = [
  {
    id: 1,
    question: 'What services does Fortress Advisory provide?',
    answer: 'Fortress Advisory provides professional advisory services in investigations, fraud risk management, ethics and integrity, governance and policy development, conflict of interest management, leadership coaching and fractional executive advisory.'
  },
  {
    id: 2,
    question: 'Which organisations do you work with?',
    answer: 'We work with financial institutions, international organisations, government entities, corporate bodies, public sector agencies, NGOs, and development programmes across a diverse range of sectors.'
  },
  {
    id: 3,
    question: 'How do we engage Fortress Advisory?',
    answer: 'Engagements typically begin with an initial confidential consultation to understand your organisation’s specific challenges and objectives. We then develop a tailored advisory proposal outlining the scope, methodology, timeline, and deliverables.'
  },
  {
    id: 4,
    question: 'Are your advisory services confidential?',
    answer: 'Yes, confidentiality and professional discretion are central to all our engagements. We maintain strict protocols to protect sensitive organisational information, whistleblower identities, and proprietary data at all times.'
  },
  {
    id: 5,
    question: 'Can your services be tailored to our organisation?',
    answer: 'Absolutely. We recognise that every organisation faces unique operational, cultural, and governance realities. All our advisory solutions, reviews, and training programmes are customised to address your specific risks and strategic priorities.'
  }
]

export default function FAQs() {
  // Default first item open as in the design mockup
  const [openId, setOpenId] = useState(1)

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className="faqs-page">
      <div className="faqs-page__container">
        
        {/* Main Heading */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="faqs-page__header"
        >
          <h1 className="faqs-page__title">
            Frequently Asked Questions
          </h1>
        </motion.header>

        {/* Accordion List */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="faqs-list"
        >
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-item__question">
                    {faq.question}
                  </span>

                  <span className="faq-item__icon-wrap">
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="faq-item__icon"
                    >
                      {isOpen ? (
                        <Minus size={20} strokeWidth={1.75} />
                      ) : (
                        <Plus size={20} strokeWidth={1.75} />
                      )}
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.08 }
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="faq-item__collapse"
                    >
                      <p className="faq-item__answer">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </div>
  )
}

