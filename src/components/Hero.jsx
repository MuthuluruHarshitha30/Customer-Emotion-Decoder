import { Sparkles, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 shadow-sm shadow-indigo-500/5 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-700">AI-Powered Customer Insights</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Customer Emotion{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Decoder
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 font-medium mb-4">
            Turning customer voices into clear business insights
          </p>
          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            Customers speak through reviews but businesses hear only noise. Our system translates thousands 
            of reviews into actionable insights—helping you understand what customers truly love, 
            hate, and want improved.
          </p>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            View Insights
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
