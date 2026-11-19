import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function AnimatedAppRoutes() {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        {/* All other routes show 404 Not Found since design is not yet provided */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-1">
          <AnimatedAppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
