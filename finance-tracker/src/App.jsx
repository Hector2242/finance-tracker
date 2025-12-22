import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  	<div syle={{ padding: '20px' }}>
		<h1>Finance Tracker</h1>
		<p>Hello Hector! Let's build this.</p>
	</div>
  )
}

export default App
