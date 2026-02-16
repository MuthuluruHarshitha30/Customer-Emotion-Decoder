import { Outlet } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import { LayoutDashboard, ListOrdered, Building2, Users, BarChart3, MessageSquare, CheckSquare, Grid3X3, PieChart, Table2, Mail, LayoutGrid, ChevronDown, Cloud } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', hasDropdown: true },
  { label: 'Order List', icon: ListOrdered, href: '/dashboard/orders' },
  { label: 'Property Details', icon: Building2, href: '/dashboard/properties' },
  { label: 'Customers', icon: Users, href: '/dashboard/customers' },
  { label: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { label: 'Reviews', icon: MessageSquare, href: '/dashboard/reviews' },
  { label: 'Task', icon: CheckSquare, href: '/dashboard/tasks' },
  { label: 'Apps', icon: Grid3X3, href: '/dashboard/apps', hasDropdown: true },
  { label: 'Charts', icon: PieChart, href: '/dashboard/charts', hasDropdown: true },
  { label: 'Table', icon: Table2, href: '/dashboard/table', hasDropdown: true },
  { label: 'Email', icon: Mail, href: '/dashboard/email', hasDropdown: true },
  { label: 'Widget', icon: LayoutGrid, href: '/dashboard/widget', hasDropdown: true },
]

function DashboardLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-50/80 flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-slate-800 text-sm">Emotion Decoder</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map(({ label, icon: Icon, href, hasDropdown }) => {
            const isActive = location.pathname === href
            return (
              <Link
                key={href}
                to={href}
                className={`flex items-center justify-between gap-2 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {label}
                </span>
                {hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-4 text-white shadow-lg">
            <Cloud className="w-8 h-8 mb-3 opacity-90" />
            <p className="font-semibold text-sm mb-1">Generate Monthly Report</p>
            <p className="text-xs text-white/90 mb-3">Get insights at a glance</p>
            <Link
              to="/dashboard/reports"
              className="inline-flex items-center text-xs font-medium text-white hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
