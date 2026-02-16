import { useState } from 'react'
import { Search, Plus, CheckCircle, Circle, Flag } from 'lucide-react'
// TODO: Replace with API – e.g. useSWR('/api/tasks', fetcher)
import { mockTasks } from '../data/mockData'

const priorityColors = { high: 'text-rose-600', medium: 'text-amber-600', low: 'text-slate-500' }

function TaskPage() {
  const [tasks, setTasks] = useState(mockTasks)
  const [search, setSearch] = useState('')

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t))
    )
  }

  const filtered = tasks.filter(
    (t) => !search || t.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Task</h1>
        <div className="flex items-center gap-2">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 hover:bg-slate-50/50 transition-colors"
          >
            <button
              onClick={() => toggleComplete(task.id)}
              className="flex-shrink-0 text-slate-400 hover:text-indigo-600"
              aria-label={task.status === 'completed' ? 'Mark incomplete' : 'Mark complete'}
            >
              {task.status === 'completed' ? (
                <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-500" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${task.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                {task.title}
              </p>
              <p className="text-sm text-slate-500 mt-0.5">Due {task.dueDate}</p>
            </div>
            <span className={`flex items-center gap-1 text-xs font-medium ${priorityColors[task.priority]}`}>
              <Flag className="w-3.5 h-3.5" />
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskPage
