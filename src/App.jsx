import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpaceBackground from './components/SpaceBackground'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="app">
      <SpaceBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
