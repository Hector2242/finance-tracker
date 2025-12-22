import { Link, useLocation } from 'react-router-dom'
import { Wallet, LayoutDashboard, PiggyBank, Target, Settings, User } from 'lucide-react'

function Header() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/budgets', label: 'Budgets', icon: PiggyBank },
    { path: '/goals', label: 'Goals', icon: Target },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Wallet className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">FinanceTracker</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </nav>

          {/* User icon */}
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <User className="w-6 h-6 text-gray-600" />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
