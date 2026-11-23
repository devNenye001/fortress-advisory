import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import PageTransition from './components/PageTransition/PageTransition'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

function AnimatedAppRoutes() {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
