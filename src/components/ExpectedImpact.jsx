import { Users, Zap, Award, Heart } from 'lucide-react'

const impacts = [
  {
    icon: Users,
    title: 'Better understanding of customer needs',
    description: 'Uncover what customers truly want—beyond what they explicitly say.',
  },
  {
    icon: Zap,
    title: 'Faster decision-making',
    description: 'Skip manual review reading. Get insights in minutes, not weeks.',
  },
  {
    icon: Award,
    title: 'Improved product quality',
    description: 'Act on real feedback. Fix what matters most to your customers.',
  },
  {
    icon: Heart,
    title: 'Increased customer satisfaction',
    description: 'Respond to emotions, address pain points, and build loyalty.',
  },
]

function ExpectedImpact() {
  return (
    <section id="impact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">
            Expected Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Drive growth with customer intelligence
          </h2>
          <p className="text-lg text-slate-600">
            Organizations that decode customer emotions make smarter decisions and delight more users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpectedImpact
