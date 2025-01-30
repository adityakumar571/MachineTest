import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Flights from './pages/Flights.jsx'
import Holidays from './pages/Holidays.jsx'
import Hotels from './pages/Hotels.jsx'
import Buses from './pages/Bus.jsx'
import Trains from './pages/Trains.jsx'
import Navbar from './Components/Header/Navbar.jsx'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/flights" element={<Flights/>} />
      <Route path="/holidays" element={<Holidays/>} />
      <Route path="/hotels" element={<Hotels/>} />
      <Route path="/buses" element={<Buses/>}/>
      <Route path="/trains" element={<Trains/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
