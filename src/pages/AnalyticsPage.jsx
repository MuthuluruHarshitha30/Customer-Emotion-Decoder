import { TrendingUp, ShoppingCart, DollarSign, Users } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/analytics', fetcher)
import { mockAnalytics } from '../data/mockData'

const statCards = [
  { label: 'Total Revenue', value: `$${mockAnalytics.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'bg-indigo-500' },
  { label: 'Total Orders', value: mockAnalytics.totalOrders.toLocaleString(), icon: ShoppingCart, color: 'bg-emerald-500' },
  { label: 'Avg. Order Value', value: `$${mockAnalytics.avgOrderValue.toFixed(2)}`, icon: TrendingUp, color: 'bg-amber-500' },
  { label: 'New Customers', value: mockAnalytics.newCustomers.toString(), icon: Users, color: 'bg-rose-500' },
]

function AnalyticsPage() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Revenue Overview</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-sm">
            Chart placeholder – integrate with Chart.js, Recharts, or your API
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Orders by Status</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-sm">
            Chart placeholder – integrate with your analytics API
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
