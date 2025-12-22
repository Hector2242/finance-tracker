import { Link, useLocation} from 'react-router-dom'
import { Wallet, LayoutDashboard, PiggyBank, Target, Settings, User } from'lucide-react'

function Header() {
	const location = useLocation()

	const navItems = [
		{ path: '/', label: 'Dashboard', icon: LayoutDashboard },
		{ path: '/'}
	]

}
