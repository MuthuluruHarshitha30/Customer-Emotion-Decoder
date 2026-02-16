import { useState } from 'react'
import { Search, Filter, RotateCw, Mail, User } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/customers', fetcher)
import { mockCustomers } from '../data/mockData'

function CustomersPage() {
  const [search, setSearch] = useState('')
  const [customers] = useState(mockCustomers)

  const filtered = customers.filter(
    (c) =>
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Customers</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-1 p-1 bg-slate-100 rounded-lg w-fit">
          {['All', 'Active', 'Inactive'].map((tab) => (
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
              placeholder="Search customers..."
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
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Orders</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Total Spent</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium text-slate-900">{customer.name}</span>
                        <span className="text-slate-500 text-xs block font-mono">{customer.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {customer.email}
                  </td>
                  <td className="py-3 px-4 text-slate-600">{customer.orders}</td>
                  <td className="py-3 px-4 text-right font-medium text-slate-900">${customer.totalSpent}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${customer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                      {customer.status}
                    </span>
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

export default CustomersPage
