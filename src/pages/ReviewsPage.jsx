import { useState } from 'react'
import { Search, Filter, RotateCw, Archive, CheckCircle, Star } from 'lucide-react'

const MOCK_REVIEWS = [
  {
    id: 1,
    date: '22/03/2022',
    time: '12:00 PM',
    customerId: '#C01234',
    name: 'Mohn Due',
    sentimentTitle: 'Friendly service',
    rating: 4.0,
    tags: ['Excellent', 'Amazing'],
    reviewText: 'Josn Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.',
    status: 'published',
  },
  {
    id: 2,
    date: '21/03/2022',
    time: '02:30 PM',
    customerId: '#C01235',
    name: 'Sarah Chen',
    sentimentTitle: 'Bad service',
    rating: 2.0,
    tags: ['Not good'],
    reviewText: 'Delivery was very late and the product arrived damaged. Customer support was unhelpful. Very disappointed with the experience.',
    status: 'published',
  },
  {
    id: 3,
    date: '20/03/2022',
    time: '09:15 AM',
    customerId: '#C01236',
    name: 'Alex Rivera',
    sentimentTitle: 'Great product quality',
    rating: 5.0,
    tags: ['Excellent', 'Amazing'],
    reviewText: 'Exactly what I was looking for. Fast shipping and the quality exceeded my expectations. Will definitely order again!',
    status: 'published',
  },
  {
    id: 4,
    date: '19/03/2022',
    time: '05:45 PM',
    customerId: '#C01237',
    name: 'Emma Wilson',
    sentimentTitle: 'Average experience',
    rating: 3.0,
    tags: ['Normal'],
    reviewText: 'Product is okay. Nothing special but does the job. Price is fair. Could improve on packaging.',
    status: 'pending',
  },
  {
    id: 5,
    date: '18/03/2022',
    time: '11:20 AM',
    customerId: '#C01238',
    name: 'James Kim',
    sentimentTitle: 'Outstanding support',
    rating: 5.0,
    tags: ['Excellent', 'Amazing'],
    reviewText: 'The team went above and beyond to resolve my issue. Quick response and very professional. Highly recommend.',
    status: 'published',
  },
]

const TAG_STYLES = {
  Excellent: 'bg-emerald-100 text-emerald-700',
  Amazing: 'bg-sky-100 text-sky-700',
  'Not good': 'bg-rose-100 text-rose-700',
  Normal: 'bg-amber-100 text-amber-700',
}

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-slate-700 font-medium">{rating.toFixed(1)}</span>
      <span className="inline-flex text-amber-400" role="img" aria-label={`${rating} stars`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i <= full ? 'fill-amber-400' : ''} ${i === full + 1 && hasHalf ? 'fill-amber-400 opacity-70' : ''}`}
            strokeWidth={i <= full || (i === full + 1 && hasHalf) ? 0 : 1.5}
          />
        ))}
      </span>
    </span>
  )
}

function ReviewsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [search, setSearch] = useState('')
  const [reviews, setReviews] = useState(MOCK_REVIEWS)

  const tabs = [
    { id: 'all', label: 'All Reviews' },
    { id: 'published', label: 'Publish' },
    { id: 'deleted', label: 'Deleted' },
  ]

  const filteredReviews = reviews.filter((r) => {
    const matchTab =
      activeTab === 'all' ||
      (activeTab === 'published' && r.status === 'published') ||
      (activeTab === 'deleted' && r.status === 'deleted')
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.reviewText.toLowerCase().includes(search.toLowerCase()) ||
      r.sentimentTitle.toLowerCase().includes(search.toLowerCase())
    return matchTab && matchSearch
  })

  const handleArchive = (id) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'deleted' } : r)))
  }

  const handleApprove = (id) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'published' } : r)))
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Reviews</h1>

        {/* Tabs + Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex gap-1 p-1 bg-slate-100 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:flex-initial max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" title="Filter">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" title="Reload">
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Review list */}
        <div className="space-y-4">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
              No reviews match your filters.
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0 text-slate-400 text-sm">
                      {review.date}<br />{review.time}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-slate-500 text-sm font-mono">{review.customerId}</span>
                        <span className="font-semibold text-slate-900">{review.name}</span>
                      </div>
                      <p className="font-medium text-slate-800 mb-2">{review.sentimentTitle}</p>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <StarRating rating={review.rating} />
                        <div className="flex flex-wrap gap-1.5">
                          {review.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${TAG_STYLES[tag] || 'bg-slate-100 text-slate-700'}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{review.reviewText}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 lg:ml-4">
                    <button
                      onClick={() => handleArchive(review.id)}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
                    >
                      <Archive className="w-4 h-4" />
                      Archive
                    </button>
                    <button
                      onClick={() => handleApprove(review.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        review.status === 'pending'
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
  )
}

export default ReviewsPage
