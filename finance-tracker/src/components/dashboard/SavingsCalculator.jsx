import { useState } from 'react'
import { Calculator } from 'lucide-react'

function SavingsCalculator({ goals }) {
  const [hourlyWage, setHourlyWage] = useState(25)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)
  const [taxRate, setTaxRate] = useState(22)
  const [savePercent, setSavePercent] = useState(20)
  const [selectedGoal, setSelectedGoal] = useState(0)

  const weeklyGross = hourlyWage * hoursPerWeek
  const weeklyNet = weeklyGross * (1 - taxRate / 100)
  const weeklySavings = weeklyNet * (savePercent / 100)

  const goal = goals[selectedGoal]
  const remaining = goal ? goal.target - goal.current : 0
  const weeksToGoal = weeklySavings > 0 ? Math.ceil(remaining / weeklySavings) : Infinity

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg font-semibold text-gray-800">Savings Calculator</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-500 mb-1">Hourly Wage ($)</label>
          <input
            type="number"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Hours / Week</label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Save (%)</label>
          <input
            type="number"
            value={savePercent}
            onChange={(e) => setSavePercent(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Weekly Savings (after tax)</p>
          <p className="text-xl font-bold text-emerald-600">${weeklySavings.toFixed(2)}</p>
        </div>
        <div className="text-center">
          <label className="block text-sm text-gray-500 mb-1">Goal</label>
          <select
            value={selectedGoal}
            onChange={(e) => setSelectedGoal(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {goals.map((g, i) => (
              <option key={g.name} value={i}>
                {g.name} (${(g.target - g.current).toLocaleString()} left)
              </option>
            ))}
          </select>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Weeks to Goal</p>
          <p className="text-xl font-bold text-emerald-600">
            {weeksToGoal === Infinity ? '—' : `${weeksToGoal} weeks`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SavingsCalculator
