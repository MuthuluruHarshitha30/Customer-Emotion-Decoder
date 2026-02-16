import { MessageSquare, Cpu, Heart, BarChart2, Target } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Collect customer reviews',
    description: 'Ingest reviews from your platforms—ecommerce, apps, social media—into one pipeline.',
  },
  {
    icon: Cpu,
    step: 2,
    title: 'Process text using AI',
    description: 'Natural language processing cleans, normalizes, and prepares text for analysis.',
  },
  {
    icon: Heart,
    step: 3,
    title: 'Detect emotions & sentiment',
    description: 'AI models identify emotions and sentiment at scale with high accuracy.',
  },
  {
    icon: BarChart2,
    step: 4,
    title: 'Convert into visual insights',
    description: 'Transform structured data into dashboards, charts, and reports.',
  },
  {
    icon: Target,
    step: 5,
    title: 'Help businesses make better decisions',
    description: 'Prioritize actions, track improvements, and drive customer satisfaction.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            From reviews to decisions in 5 steps
          </h2>
          <p className="text-lg text-slate-600">
            A simple, powerful pipeline that turns customer voice into business action.
          </p>
        </div>
        <div className="relative">
          {/* Connection line - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200 -translate-y-1/2 rounded-full" style={{ top: '50%', width: '100%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map(({ icon: Icon, step, title, description }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-indigo-200 flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 group-hover:border-indigo-400 group-hover:shadow-xl group-hover:shadow-indigo-200/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-indigo-600" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
