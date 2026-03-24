import { Plus } from 'lucide-react'

const barColors = {
  blue: '#3b82f6',
  emerald: '#10b981',
  amber: '#f59e0b',
  red: '#ef4444',
  violet: '#8b5cf6',
}

function getStatusColor(percentage) {
  if (percentage >= 90) return '#ef4444'
  if (percentage >= 70) return '#f59e0b'
  return '#10b981'
}

function BudgetProgress({ budgets }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Budget Progress</h2>
        <button className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Add Budget
        </button>
      </div>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = Math.round((budget.spent / budget.limit) * 100)
          const statusColor = getStatusColor(percentage)
          return (
            <div key={budget.category}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{budget.category}</span>
                <span className="text-gray-500">
                  ${budget.spent} / ${budget.limit} ({percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                    backgroundColor: statusColor,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BudgetProgress
