import StatCard from '../components/dashboard/StatCard'
import SpendingChart from '../components/dashboard/SpendingChart'
import BudgetProgress from '../components/dashboard/BudgetProgress'
import SavingsGoals from '../components/dashboard/SavingsGoals'
import RecentTransactions from '../components/dashboard/RecentTransactions'
import SavingsCalculator from '../components/dashboard/SavingsCalculator'
import { quickStats, spendingData, budgets, savingsGoals, transactions } from '../data/mockData'

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Your financial overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Charts & Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingChart data={spendingData} />
        <BudgetProgress budgets={budgets} />
      </div>

      {/* Goals & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SavingsGoals goals={savingsGoals} />
        <RecentTransactions transactions={transactions} />
      </div>

      {/* Savings Calculator */}
      <SavingsCalculator goals={savingsGoals} />
    </div>
  )
}

export default Dashboard
