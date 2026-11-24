import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          
          {/* Column 1: Brand & Tagline - Exact Line Break */}
          <div className="footer__brand">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Fortress Advisory" 
                className="footer__logo"
              />
            </Link>
            <p className="footer__tagline">
              Safeguarding Integrity. Enabling<br />
              Ethical Leadership.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="footer__col-title">
              Explore
            </h3>
            <ul className="footer__links">
              <li>
                <Link to="/services" className="footer__link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="footer__link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="footer__col-title">
              Support
            </h3>
            <ul className="footer__links">
              <li>
                <Link to="/blog" className="footer__link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="footer__link">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="footer__col-title">
              Stay Connected
            </h3>
            <p className="footer__desc">
              Receive occasional insights, practical perspectives and updates from Fortress Advisory on governance, ethics, fraud risk management and responsible leadership.
            </p>

            <form onSubmit={handleSubscribe} className="footer__form">
              <div className="footer__input-pill">
                <span className="footer__mail-icon">
                  <Mail size={16} strokeWidth={1.5} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="footer__input"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="footer__btn"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>

            {subscribed && (
              <motion.div 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="footer__success"
              >
                <CheckCircle2 size={14} />
                <span>Thank you for subscribing!</span>
              </motion.div>
            )}
          </div>

        </div>

        {/* Divider line & Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 Fortress Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

