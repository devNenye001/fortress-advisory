import React, { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isTransparent = location.pathname === '/' || location.pathname === '/about'

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <header className={`navbar ${isTransparent ? 'navbar--home' : 'navbar--solid'}`}>
      <div className="navbar__inner">
        
        {/* Logo */}
        <Link to="/" className="navbar__logo-link">
          <img 
            src="/logo.png" 
            alt="Fortress Advisory" 
            className="navbar__logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="navbar__actions">
          <Link to="/contact" className="navbar__btn">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar__mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="navbar__mobile-link"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="navbar__mobile-btn"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}

