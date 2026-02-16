import { useState } from 'react'
import { Search, Filter, RotateCw, Eye, MoreHorizontal } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/orders', fetcher) or Next.js getServerSideProps
import { mockOrders } from '../data/mockData'

const statusColors = {
  Delivered: 'bg-emerald-100 text-emerald-700',
  Shipped: 'bg-sky-100 text-sky-700',
  Processing: 'bg-amber-100 text-amber-700',
  Pending: 'bg-slate-100 text-slate-700',
}

function OrdersPage() {
  const [search, setSearch] = useState('')
  const [orders] = useState(mockOrders)

  const filtered = orders.filter(
    (o) =>
      !search ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Order List</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-1 p-1 bg-slate-100 rounded-lg w-fit">
          {['All', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50" title="Filter">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50" title="Reload">
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Amount</th>
                <th className="w-10 py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono text-indigo-600">{order.id}</td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-900">{order.customerName}</span>
                    <span className="text-slate-500 text-xs block">{order.customerId}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{order.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status] || 'bg-slate-100 text-slate-700'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-slate-900">${order.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600" title="More">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
