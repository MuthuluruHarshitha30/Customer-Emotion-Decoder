import { useState } from 'react'
import { Search, Plus, Building2, MapPin } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/properties', fetcher)
import { mockProperties } from '../data/mockData'

function PropertiesPage() {
  const [search, setSearch] = useState('')
  const [properties] = useState(mockProperties)

  const filtered = properties.filter(
    (p) =>
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Property Details</h1>
        <div className="flex items-center gap-2">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            Add Property
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all"
          >
            <div className="h-40 bg-slate-100 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-slate-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 mb-1">{property.title}</h3>
              <p className="text-slate-500 text-sm flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {property.address}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">{property.type}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${property.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {property.status}
                </span>
              </div>
              <p className="mt-3 text-lg font-semibold text-indigo-600">${property.price}/mo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertiesPage
