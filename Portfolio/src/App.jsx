import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navb from './components/Navbar/Navb'
import './App.css'
import Homes from './components/Home/Homes'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Services from './components/Services'
import Thanks from './thanks'
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navb/>
      
      <Routes>
        <Route path='/' element={<Homes/>}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/services' element={<Services/>}>Services</Route>
        <Route path='/thanks' element={Thanks}></Route>
       
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
