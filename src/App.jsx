import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='App'>
      {/* Cursor glow */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(100, 255, 218, 0.07), transparent 80%)`,
          transition: 'background 0.1s ease',
        }}
      />

      <div className='layout' style={{ position: 'relative', zIndex: 1 }}>
        <div className='sidebarWrapper'>
          <div className='sidebar'>
            <Sidebar />
          </div>
        </div>
        <main className='mainContent'>
          <About />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
          <Footer />
        </main>
      </div>
      <Analytics />
    </div>
  )
}

export default App
