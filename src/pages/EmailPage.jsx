import { useState } from 'react'
import { Search, Mail, Inbox } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/emails', fetcher)
import { mockEmails } from '../data/mockData'

function EmailPage() {
  const [emails] = useState(mockEmails)
  const [selectedId, setSelectedId] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = emails.filter(
    (e) =>
      !search ||
      e.from.toLowerCase().includes(search.toLowerCase()) ||
      e.subject.toLowerCase().includes(search.toLowerCase())
  )
  const selected = emails.find((e) => e.id === selectedId)

  return (
    <div className="flex-1 p-6 overflow-auto flex flex-col">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Email</h1>
      <div className="mb-4 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col lg:col-span-1">
          <div className="p-3 border-b border-slate-100 flex items-center gap-2 text-slate-600">
            <Inbox className="w-4 h-4" />
            <span className="text-sm font-medium">Inbox</span>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {filtered.map((email) => (
              <button
                key={email.id}
                onClick={() => setSelectedId(email.id)}
                className={`w-full text-left p-4 hover:bg-slate-50 transition-colors ${selectedId === email.id ? 'bg-indigo-50 border-l-2 border-indigo-600' : ''}`}
              >
                <p className={`text-sm truncate ${email.unread ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                  {email.from}
                </p>
                <p className="text-sm text-slate-600 truncate mt-0.5">{email.subject}</p>
                <p className="text-xs text-slate-400 mt-1">{email.date}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 lg:col-span-2 flex flex-col">
          {selected ? (
            <>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <h2 className="font-semibold text-slate-900">{selected.subject}</h2>
                <p className="text-sm text-slate-500 mt-1">From: {selected.from}</p>
                <p className="text-xs text-slate-400 mt-1">{selected.date}</p>
              </div>
              <div className="flex-1 text-slate-600 text-sm">
                Email body placeholder. Replace with content from API (e.g. /api/emails/:id).
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                <p>Select an email</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailPage
