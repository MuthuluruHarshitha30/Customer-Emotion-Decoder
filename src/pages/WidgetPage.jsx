import { TrendingUp, TrendingDown } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/widgets/stats', fetcher)
import { mockWidgetStats } from '../data/mockData'

function WidgetPage() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Widget</h1>
      <p className="text-slate-600 mb-6">Dashboard widgets. Bind to your API for live stats.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockWidgetStats.map((widget) => (
          <div
            key={widget.label}
            className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-slate-500 font-medium">{widget.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{widget.value}</p>
            <p className={`text-sm mt-2 inline-flex items-center gap-1 ${widget.trend === 'up' ? 'text-emerald-600' : 'text-slate-500'}`}>
              {widget.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {widget.change}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Quick actions widget</h3>
          <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-200">
            Add buttons or links to key actions (e.g. from API config)
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Activity widget</h3>
          <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-200">
            Feed from /api/activity or similar
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetPage
