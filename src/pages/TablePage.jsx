import { useState } from 'react'
import { Search, ChevronUp, ChevronDown } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/table', fetcher). Sort/filter can stay client-side or move to API.
import { mockTableData } from '../data/mockData'

function TablePage() {
  const [data] = useState(mockTableData)
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState(null)
  const [sortAsc, setSortAsc] = useState(true)

  const filtered = data.filter(
    (row) =>
      !search ||
      Object.values(row).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
  )

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0
    const va = a[sortKey]
    const vb = b[sortKey]
    const cmp = typeof va === 'number' ? va - vb : String(va).localeCompare(String(vb))
    return sortAsc ? cmp : -cmp
  })

  const toggleSort = (key) => {
    setSortKey(key)
    setSortAsc((prev) => (sortKey === key ? !prev : true))
  }

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'value', label: 'Value' },
    { key: 'date', label: 'Date' },
  ]

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Table</h1>
      <div className="mb-6 max-w-xs">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search table..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                {headers.map(({ key, label }) => (
                  <th key={key} className="text-left py-3 px-4 font-semibold text-slate-700">
                    <button
                      onClick={() => toggleSort(key)}
                      className="inline-flex items-center gap-1 hover:text-indigo-600"
                    >
                      {label}
                      {sortKey === key ? (sortAsc ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />) : null}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                  {headers.map(({ key }) => (
                    <td key={key} className="py-3 px-4 text-slate-700">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TablePage
