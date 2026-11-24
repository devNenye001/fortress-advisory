import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import PageTransition from './components/PageTransition/PageTransition'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Blog from './pages/Blog/Blog'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import FAQs from './pages/FAQs/FAQs'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function AnimatedAppRoutes() {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/service:id" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        {/* All other routes show 404 Not Found since design is not yet provided */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <AnimatedAppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
