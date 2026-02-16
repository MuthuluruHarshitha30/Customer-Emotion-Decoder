import { useState } from 'react'
import { MessageSquare, CreditCard, Mail, Headphones, ToggleLeft, ToggleRight } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/integrations', fetcher)
import { mockApps } from '../data/mockData'

const iconMap = {
  slack: MessageSquare,
  stripe: CreditCard,
  mailchimp: Mail,
  zendesk: Headphones,
}

function AppsPage() {
  const [apps, setApps] = useState(mockApps)

  const toggleApp = (id) => {
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)))
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Apps & Integrations</h1>
      <p className="text-slate-600 mb-6">Connect your tools. Replace this data with your API when ready.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => {
          const Icon = iconMap[app.id] || MessageSquare
          return (
            <div
              key={app.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-between hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{app.name}</h3>
                  <p className="text-sm text-slate-500">{app.description}</p>
                  <span className="text-xs text-slate-400 mt-1 inline-block">{app.category}</span>
                </div>
              </div>
              <button
                onClick={() => toggleApp(app.id)}
                className="flex items-center gap-2 text-sm font-medium"
                aria-pressed={app.enabled}
              >
                {app.enabled ? (
                  <>
                    <ToggleRight className="w-8 h-8 text-indigo-600" />
                    <span className="text-indigo-600">On</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-8 h-8 text-slate-300" />
                    <span className="text-slate-400">Off</span>
                  </>
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AppsPage
