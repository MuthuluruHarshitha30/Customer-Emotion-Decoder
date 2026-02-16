import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardLayout from './components/dashboard/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import ReviewsPage from './pages/ReviewsPage'
import OrdersPage from './pages/OrdersPage'
import PropertiesPage from './pages/PropertiesPage'
import CustomersPage from './pages/CustomersPage'
import AnalyticsPage from './pages/AnalyticsPage'
import TaskPage from './pages/TaskPage'
import AppsPage from './pages/AppsPage'
import ChartsPage from './pages/ChartsPage'
import TablePage from './pages/TablePage'
import EmailPage from './pages/EmailPage'
import WidgetPage from './pages/WidgetPage'
import ReportsPage from './pages/ReportsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="charts" element={<ChartsPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="email" element={<EmailPage />} />
          <Route path="widget" element={<WidgetPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
