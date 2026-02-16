import { Smile, Angry, Frown, ThumbsUp, BarChart3, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Smile,
    title: 'Emotion Detection',
    description: 'Identify emotions like Happy, Angry, Frustrated, and Satisfied across all customer feedback.',
    iconClasses: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Sentiment Analysis Dashboard',
    description: 'Visual dashboards showing positive, negative, and neutral sentiment distribution at a glance.',
    iconClasses: 'bg-gradient-to-r from-indigo-500 to-violet-500',
  },
  {
    icon: AlertCircle,
    title: 'Top Complaints Identification',
    description: 'Automatically surface the most common complaints so you can prioritize fixes.',
    iconClasses: 'bg-gradient-to-r from-rose-500 to-red-500',
  },
  {
    icon: Lightbulb,
    title: 'Product Improvement Suggestions',
    description: 'AI-generated recommendations based on recurring feedback themes and customer wishes.',
    iconClasses: 'bg-gradient-to-r from-amber-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Trend Tracking Over Time',
    description: 'Monitor how sentiment and emotions evolve across weeks and months for continuous improvement.',
    iconClasses: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  },
]

function KeyFeatures() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium text-sm mb-4">
            Key Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to decode customer emotions
          </h2>
          <p className="text-lg text-slate-600">
            Powerful tools to transform raw feedback into clear, actionable intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, description, iconClasses }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${iconClasses} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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

export default KeyFeatures
