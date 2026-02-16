# API integration guide

This folder is for your API layer when you connect a backend or move to Next.js.

## Current setup

- **Mock data**: All dashboard pages use `src/data/mockData.js`. Each page imports the shape it needs (e.g. `mockOrders`, `mockCustomers`).
- **Replacement pattern**: In each page you’ll see a comment like:
  - `// TODO: Replace with API – e.g. useSWR('/api/orders', fetcher)`
  - or `getServerSideProps` (Next.js) and pass data as props.

## Suggested API shapes (REST)

Use these as a reference when building your backend or Next.js API routes:

| Page       | Suggested endpoint   | Response shape (array of)                          |
|-----------|----------------------|----------------------------------------------------|
| Orders    | `GET /api/orders`    | `{ id, customerName, customerId, date, status, amount, items }` |
| Properties| `GET /api/properties`| `{ id, title, address, type, status, price, image }` |
| Customers | `GET /api/customers` | `{ id, name, email, orders, totalSpent, status }`  |
| Reviews   | `GET /api/reviews`   | (see ReviewsPage / mock reviews shape)             |
| Analytics | `GET /api/analytics` | `{ totalRevenue, totalOrders, avgOrderValue, newCustomers }` |
| Tasks     | `GET /api/tasks`     | `{ id, title, dueDate, status, priority }`         |
| Table     | `GET /api/table`     | array of objects with consistent keys            |
| Email     | `GET /api/emails`    | `{ id, from, subject, date, unread }`              |
| Widgets   | `GET /api/widgets/stats` | `{ label, value, change, trend }`[]            |
| Reports   | `POST /api/reports/generate` | body: `{ month }`, response: download URL or stream |

## Next.js migration

1. **API routes**: Create `pages/api/orders.js`, etc. Return JSON that matches the mock shapes.
2. **Data fetching**: In each dashboard page, replace `useState(mockX)` with:
   - `getServerSideProps`: fetch in `getServerSideProps` and pass as props.
   - Or keep client-side: `useSWR('/api/orders', fetcher)` or `useQuery` and use the same component structure.
3. **Keep components**: The existing page components can stay; only the data source (props or SWR/Query) changes.

## Optional: central API client

You can add `src/api/client.js`:

```js
const base = process.env.REACT_APP_API_URL || '/api'
export async function get(path) {
  const res = await fetch(`${base}${path}`)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
export async function post(path, body) {
  const res = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
```

Then in a page: `const orders = await get('/orders')` or use with SWR: `useSWR('/orders', get)`.
