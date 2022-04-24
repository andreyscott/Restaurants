import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Section from './pages/Section'
import Home from './pages/Home/Home'

function App() {
	return (
		<div className="App">
	<BrowserRouter>
		<div>
		<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="section" element={<Section />} />

			</Routes>
		</div>
	</BrowserRouter>
		</div>
	)
}

export default App
