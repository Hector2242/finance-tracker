import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react'

const icons = { Wallet, TrendingUp, TrendingDown, PiggyBank }

const colorStyles = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', iconBg: 'bg-emerald-100' },
  red: { bg: 'bg-red-50', text: 'text-red-600', iconBg: 'bg-red-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', iconBg: 'bg-violet-100' },
}

function StatCard({ icon, label, value, color }) {
  const Icon = icons[icon]
  const styles = colorStyles[color]

  return (
    <div className={`${styles.bg} rounded-xl p-5`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className={`text-2xl font-bold ${styles.text} mt-1`}>{value}</p>
        </div>
        <div className={`${styles.iconBg} p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${styles.text}`} />
        </div>
      </div>
    </div>
  )
}

export default StatCard
