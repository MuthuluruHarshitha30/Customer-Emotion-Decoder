/**
 * Mock data for dashboard pages.
 * Replace with API calls when integrating backend/Next.js:
 * - REST: fetch('/api/orders').then(r => r.json())
 * - SWR/React Query: useSWR('/api/orders', fetcher)
 * - Next.js: getServerSideProps or getStaticProps, pass as props
 */

export const mockOrders = [
  { id: 'ORD-001', customerName: 'John Doe', customerId: '#C01234', date: '2024-02-15', status: 'Delivered', amount: 129.99, items: 3 },
  { id: 'ORD-002', customerName: 'Sarah Chen', customerId: '#C01235', date: '2024-02-14', status: 'Shipped', amount: 89.50, items: 1 },
  { id: 'ORD-003', customerName: 'Alex Rivera', customerId: '#C01236', date: '2024-02-14', status: 'Processing', amount: 256.00, items: 5 },
  { id: 'ORD-004', customerName: 'Emma Wilson', customerId: '#C01237', date: '2024-02-13', status: 'Pending', amount: 45.99, items: 2 },
  { id: 'ORD-005', customerName: 'James Kim', customerId: '#C01238', date: '2024-02-12', status: 'Delivered', amount: 199.00, items: 1 },
]

export const mockProperties = [
  { id: 1, title: 'Modern Apartment, Downtown', address: '123 Main St, City', type: 'Apartment', status: 'Active', price: 1200, image: null },
  { id: 2, title: 'Family House with Garden', address: '456 Oak Ave, Suburb', type: 'House', status: 'Active', price: 2200, image: null },
  { id: 3, title: 'Studio Near University', address: '789 Campus Rd', type: 'Studio', status: 'Pending', price: 800, image: null },
]

export const mockCustomers = [
  { id: '#C01234', name: 'John Doe', email: 'john@example.com', orders: 12, totalSpent: 1250, status: 'Active' },
  { id: '#C01235', name: 'Sarah Chen', email: 'sarah@example.com', orders: 5, totalSpent: 420, status: 'Active' },
  { id: '#C01236', name: 'Alex Rivera', email: 'alex@example.com', orders: 8, totalSpent: 890, status: 'Active' },
  { id: '#C01237', name: 'Emma Wilson', email: 'emma@example.com', orders: 3, totalSpent: 180, status: 'Inactive' },
  { id: '#C01238', name: 'James Kim', email: 'james@example.com', orders: 15, totalSpent: 2100, status: 'Active' },
]

export const mockAnalytics = {
  totalRevenue: 45230,
  totalOrders: 342,
  avgOrderValue: 132.25,
  newCustomers: 28,
}

export const mockTasks = [
  { id: 1, title: 'Review Q1 analytics report', dueDate: '2024-02-20', status: 'pending', priority: 'high' },
  { id: 2, title: 'Follow up with top 10 customers', dueDate: '2024-02-22', status: 'in_progress', priority: 'medium' },
  { id: 3, title: 'Update product descriptions', dueDate: '2024-02-25', status: 'pending', priority: 'low' },
  { id: 4, title: 'Prepare monthly report', dueDate: '2024-02-28', status: 'completed', priority: 'high' },
]

export const mockApps = [
  { id: 'slack', name: 'Slack', description: 'Team communication', category: 'Communication', enabled: true },
  { id: 'stripe', name: 'Stripe', description: 'Payments', category: 'Finance', enabled: true },
  { id: 'mailchimp', name: 'Mailchimp', description: 'Email campaigns', category: 'Marketing', enabled: false },
  { id: 'zendesk', name: 'Zendesk', description: 'Customer support', category: 'Support', enabled: true },
]

export const mockTableData = [
  { id: 1, name: 'Item A', category: 'Electronics', value: 1200, date: '2024-02-01' },
  { id: 2, name: 'Item B', category: 'Clothing', value: 85, date: '2024-02-05' },
  { id: 3, name: 'Item C', category: 'Electronics', value: 340, date: '2024-02-10' },
  { id: 4, name: 'Item D', category: 'Home', value: 210, date: '2024-02-12' },
  { id: 5, name: 'Item E', category: 'Clothing', value: 55, date: '2024-02-14' },
]

export const mockEmails = [
  { id: 1, from: 'support@service.com', subject: 'Your order has shipped', date: '2024-02-15 10:30', unread: true },
  { id: 2, from: 'team@company.com', subject: 'Weekly digest', date: '2024-02-14 09:00', unread: false },
  { id: 3, from: 'noreply@platform.com', subject: 'Password reset request', date: '2024-02-13 14:20', unread: true },
  { id: 4, from: 'billing@service.com', subject: 'Invoice #1234', date: '2024-02-12 16:45', unread: false },
]

export const mockWidgetStats = [
  { label: 'Total Reviews', value: '1,234', change: '+12%', trend: 'up' },
  { label: 'Avg. Rating', value: '4.2', change: '+0.2', trend: 'up' },
  { label: 'Pending Moderation', value: '23', change: '-5', trend: 'down' },
  { label: 'Resolved Today', value: '18', change: '+8', trend: 'up' },
]
