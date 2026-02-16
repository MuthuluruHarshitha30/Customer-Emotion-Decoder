import { Database, Brain, Layers, Zap } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: 'Collects large volumes of reviews',
    description: 'Aggregates customer feedback from multiple sources—reviews, surveys, social media—into one unified view.',
  },
  {
    icon: Brain,
    title: 'AI/NLP detects emotions & sentiment',
    description: 'Advanced natural language processing identifies emotions like happy, angry, frustrated, and satisfied from raw text.',
  },
  {
    icon: Layers,
    title: 'Groups feedback into meaningful insights',
    description: 'Automatically categorizes and clusters similar feedback so you see patterns, not isolated comments.',
  },
  {
    icon: Zap,
    title: 'Highlights love, hate & improvement areas',
    description: 'Surfaces what customers love, what frustrates them, and specific suggestions for product improvement.',
  },
]

function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
            The Solution
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            From noise to clarity in minutes
          </h2>
          <p className="text-lg text-slate-600">
            Our system transforms scattered reviews into structured, actionable intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/25">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
