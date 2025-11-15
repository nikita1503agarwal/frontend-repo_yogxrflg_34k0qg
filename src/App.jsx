import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function Footer(){
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} I’m an Artist. All rights reserved.</p>
        <div className="text-white/60 text-sm">Built with love, code and caffeine.</div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-black selection:bg-indigo-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
