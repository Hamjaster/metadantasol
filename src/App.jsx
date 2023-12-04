import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import About from './pages/About/About';
import Services from './pages/Services';
import Navbar from './Navbar/Navbar';
import Footer from './components/Footer/Footer';
import YouBusiness from './components/YouBusiness'
import Contact from './components/Contact'

function App() {


  return (
    <div className='font-opensans'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <YouBusiness />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
