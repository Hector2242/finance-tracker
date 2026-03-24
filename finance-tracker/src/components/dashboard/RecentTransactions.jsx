import { useState } from 'react'
import { Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import AddTransactionForm from './AddTransactionForm.jsx'

function groupByDate(transactions) {
  const groups = {}
  for (const tx of transactions) {
    if (!groups[tx.date]) groups[tx.date] = []
    groups[tx.date].push(tx)
  }
  return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function RecentTransactions({ transactions }) {
  const [showForm, setShowForm] = useState(false)
  const grouped = groupByDate(transactions)

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {showForm && <AddTransactionForm onClose={() => setShowForm(false)} />}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
        <div className="flex gap-2">
          <button className="text-sm text-gray-500 hover:text-gray-700">View All</button>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus className="w-4 h-4" /> Add Transaction
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {grouped.map(([date, txs]) => (
          <div key={date}>
            <p className="text-xs font-medium text-gray-400 uppercase mb-2">{formatDate(date)}</p>
            <div className="space-y-2">
              {txs.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                      {tx.type === 'income'
                        ? <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                        : <ArrowDownRight className="w-4 h-4 text-red-600" />
                      }
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{tx.description}</p>
                      <p className="text-xs text-gray-400">{tx.category}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${tx.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {tx.type === 'income' ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
