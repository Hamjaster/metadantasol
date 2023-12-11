import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import About from './pages/About/About';
import Services from './pages/Services';
import Navbar from './Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contactus from './pages/Contactus'
import Contact from './components/Contact'
import Scroll from './components/Scroll';
import './App.css'
function App() {

  return (
    <div className='font-opensans'>
      {/* <Scroll /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
