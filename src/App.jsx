// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Link } from 'react-router'
import Routess from './Components/Routess'
import Jumbotron from './Components/Jumbotron'

function App() {

	return (
		<>
			{/* <header className="sticky bg-gray-400 text-white px-1 py-0.5 flex justify-between items-center shadow-sm">
				<h1 className="hover:text-blue-200">dev</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					
				</nav>
			</header> */}
		<Jumbotron />
		<div className="bg-[#f4f4f4] text-[#333] font-mono leading-relaxed min-h-screen flex flex-col justify-between">
			<header className="sticky top-0 bg-[#2c3e50] text-white px-5 py-4 flex justify-between items-center z-9999 shadow-md">
				<h1 className="text-lg font-bold cursor-pointer hover:text-[#3498db] transition">
					_dev
				</h1>
				<nav>
					<ul className="flex list-none gap-8 font-bold">
						<li>
							<Link to="/" className="hover:text-[#3498db] transition">Home</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-[#3498db] transition">About</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-[#3498db] transition">Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Routess className="grow">Ini tidak bisa di isi ditengah</Routess>
			<a
			href="https://wa.me/6233445678910"
			target="_blank"
			className="fixed bottom-7 right-5 bg-[#25d366] text-white px-4 py-3 rounded-full font-bold shadow-lg hover:bg-[#20ba5a] transition z-999"
			>
				chat whatsapp
			</a>

				{/* Footer */}
			<footer className="text-center py-5 bg-[#2c3e50] text-white text-sm">
				<p>&copy; 2026 Java .NET developer. All right reserved</p>
			</footer>
		</div>
		</>
	)
}

export default App
