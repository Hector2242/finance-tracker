import { Plus, Target } from 'lucide-react'

function SavingsGoals({ goals }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Savings Goals</h2>
        <button className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Add Goal
        </button>
      </div>
      <div className="space-y-4">
        {goals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100)
          return (
            <div key={goal.name} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-gray-800">{goal.name}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                ~{goal.monthsLeft} months remaining
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SavingsGoals
