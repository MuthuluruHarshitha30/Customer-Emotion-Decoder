import { Link } from 'react-router-dom'
import { Search, Bell, Mail, Calendar, User } from 'lucide-react'

function DashboardHeader() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <span className="font-bold text-slate-800">Customer Emotion Decoder</span>
      </Link>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium hover:bg-indigo-100 transition-colors">
          <Calendar className="w-4 h-4" />
          Agenda (24)
        </button>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors relative" aria-label="Notifications">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
        </button>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Messages">
          <Mail className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors" aria-label="Profile">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
