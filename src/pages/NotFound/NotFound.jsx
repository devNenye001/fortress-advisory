import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-page">
      {/* 404 Main Content */}
      <section className="not-found">
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="not-found__inner"
        >
          <h1 className="not-found__code">
            404
          </h1>

          <h2 className="not-found__title">
            Page not Found
          </h2>

          <p className="not-found__text">
            This page cant be transcribed. It looks like this page has<br />
            left the meeting or maybe it never joined.
          </p>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-block' }}
          >
            <Link to="/" className="not-found__btn">
              <span>Go Home</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  )
}

