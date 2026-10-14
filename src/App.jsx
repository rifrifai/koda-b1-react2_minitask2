// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Link } from 'react-router'
import Routess from './Components/Routess'

function App() {

	return (
		<>
			<header className="sticky bg-gray-400 text-white px-1 py-0.5 flex justify-between items-center shadow-sm">
				<h1 className="hover:text-blue-200">dev</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<Routess>Ini tidak bisa di isi ditengah</Routess>
				</nav>
			</header>

		</>
	)
}

export default App
