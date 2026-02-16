// TODO: Replace with real chart library (Chart.js, Recharts, etc.) and API data
import { mockAnalytics } from '../data/mockData'

function ChartsPage() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Charts</h1>
      <p className="text-slate-600 mb-6">Add your chart library and bind to API data. Example: Recharts, Chart.js, or ApexCharts.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Line Chart (placeholder)</h3>
          <div className="h-72 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-lg flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-200">
            e.g. &lt;LineChart data=&#123;apiData&#125; /&gt;
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Bar Chart (placeholder)</h3>
          <div className="h-72 bg-gradient-to-b from-emerald-50/50 to-transparent rounded-lg flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-200">
            e.g. &lt;BarChart data=&#123;apiData&#125; /&gt;
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 lg:col-span-2">
          <h3 className="font-semibold text-slate-900 mb-4">Pie / Donut (placeholder)</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-200">
            Bind to API: /api/analytics/breakdown or similar
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-400">Current mock value for integration reference: totalRevenue = {mockAnalytics.totalRevenue}</p>
    </div>
  )
}

export default ChartsPage
