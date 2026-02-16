import { MessageSquare, Search, AlertTriangle, Target } from 'lucide-react'

const problems = [
  {
    icon: MessageSquare,
    title: 'Thousands of reviews',
    description: 'Businesses receive an overwhelming volume of customer feedback across platforms—impossible to read manually.',
    iconClasses: 'bg-gradient-to-r from-amber-500 to-orange-500',
  },
  {
    icon: Search,
    title: 'Hard to identify real emotions',
    description: 'Text alone hides the true sentiment. Sarcasm, nuance, and emotion get lost in raw text analysis.',
    iconClasses: 'bg-gradient-to-r from-rose-500 to-pink-500',
  },
  {
    icon: AlertTriangle,
    title: 'Important feedback gets lost',
    description: 'Critical complaints and suggestions drown in the noise. The most valuable insights never reach decision-makers.',
    iconClasses: 'bg-gradient-to-r from-red-500 to-rose-500',
  },
  {
    icon: Target,
    title: 'Struggle to know what to improve',
    description: 'Without clear patterns, companies guess at priorities. Resources go to the wrong places.',
    iconClasses: 'bg-gradient-to-r from-violet-500 to-purple-500',
  },
]

function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-medium text-sm mb-4">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Reviews are loud. Insights are quiet.
          </h2>
          <p className="text-lg text-slate-600">
            Businesses drown in customer feedback but lack the tools to surface what truly matters.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map(({ icon: Icon, title, description, iconClasses }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${iconClasses} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
