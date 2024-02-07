import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home"
import About from './pages/About/About';
import Services from './pages/Services';
import Navbar from './Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contactus from './pages/Contactus'
import Contact from './components/Contact'
import Scroll from './components/Scroll';
import './App.css'
import { Toaster } from 'react-hot-toast';
import Privacy from './components/Privacy';
import Comingsoon from './Comingsoon';
import PrivacyPolicy from './pages/Policy';
import { Disclaimer } from './pages/Disclaimer';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  useEffect(()=>{
      console.clear()
  },[])

  return (
    <div className='font-opensans'>
      {/* <Scroll /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solutions' element={<Services />} />
        <Route path='/contact' element={<Contactus />} />
        {/* <Route path='/privacy' element={<Privacy />} /> */}
        <Route path='/insights' element={<Comingsoon />} />
        <Route path='/career' element={<Comingsoon />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {location.pathname === "/privacy-policy" || location.pathname === "/disclaimer" || location.pathname === "/insights" || location.pathname === "/career" ?
        <></>
        : <Contact />
      }
      {location.pathname === "/insights" || location.pathname === "/career" ?
        <></>
        : <Footer />
      }

    </div>
  )
}

export default App
