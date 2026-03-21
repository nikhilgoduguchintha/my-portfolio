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
  return (
    <div className='App'>
      <div className='layout'>
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
