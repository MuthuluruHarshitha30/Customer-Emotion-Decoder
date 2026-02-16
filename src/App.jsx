import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import KeyFeatures from './components/KeyFeatures'
import HowItWorks from './components/HowItWorks'
import ExpectedImpact from './components/ExpectedImpact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Safelist: ensures Tailwind includes gradient classes used dynamically in Problem & KeyFeatures */}
      <div className="hidden from-amber-500 to-orange-500 from-rose-500 to-pink-500 from-red-500 to-rose-500 from-violet-500 to-purple-500 from-emerald-500 to-teal-500 from-indigo-500 to-violet-500 from-rose-500 to-red-500 from-blue-500 to-cyan-500" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <KeyFeatures />
        <HowItWorks />
        <ExpectedImpact />
      </main>
      <Footer />
    </div>
  )
}

export default App
