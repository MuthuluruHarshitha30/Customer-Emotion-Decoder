import { Navigate } from 'react-router-dom'

function DashboardHome() {
  return <Navigate to="/dashboard/reviews" replace />
}

export default DashboardHome
