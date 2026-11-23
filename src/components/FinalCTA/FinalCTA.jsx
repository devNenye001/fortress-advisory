import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      {/* Background image with overlay */}
      <div 
        className="final-cta__bg"
        style={{ backgroundImage: `url('/final-cta-bg.jpg')` }}
      >
        <div className="final-cta__overlay"></div>
      </div>

      {/* Content */}
      <div className="final-cta__content">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="final-cta__title"
        >
          Let's Strengthen Integrity<br />
          Within Your Organisation.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="final-cta__text"
        >
          Whether you are addressing a sensitive organisational concern, strengthening governance practices or developing more accountable leadership, Fortress Advisory can help you take the next step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-block' }}
          >
            <Link to="/contact" className="final-cta__btn">
              <span>Contact Us</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

