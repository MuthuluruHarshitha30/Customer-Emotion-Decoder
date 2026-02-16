import { useState } from 'react'
import { FileText, Calendar, Download } from 'lucide-react'
// TODO: Replace with API – e.g. POST /api/reports/generate with date range, then download URL

function ReportsPage() {
  const [month, setMonth] = useState('2024-02')
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => setGenerating(false), 1500)
    // In real app: await fetch('/api/reports/generate', { method: 'POST', body: JSON.stringify({ month }) })
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Generate Monthly Report</h1>
      <p className="text-slate-600 mb-6">Configure and generate reports. Hook up to your backend when ready.</p>
      <div className="max-w-md space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Report period</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
          >
            <FileText className="w-4 h-4" />
            {generating ? 'Generating…' : 'Generate report'}
          </button>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            title="Download last report – wire to API URL"
          >
            <Download className="w-4 h-4" />
            Download last
          </button>
        </div>
      </div>
      <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-600">
        <strong>Integration notes:</strong> Call your API (e.g. POST /api/reports/generate with &#123; month &#125;) to create the report, then return a download URL or stream. Use the same pattern in Next.js API routes.
      </div>
    </div>
  )
}

export default ReportsPage
