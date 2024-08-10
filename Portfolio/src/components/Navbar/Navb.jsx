import { Link } from "react-router-dom";
import './Navb.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function Navb(){
  useEffect(() => {
    AOS.init({duration:1500})
},)
  return(

      <nav>
        <div className="container">
        <div className="container1">          
          <h2 >Ayushmaan.</h2>
          <Link to="/" className="nav-elements">Home</Link>
          <Link to="/about" className="nav-elements">About</Link>
          <Link to="/contact" className="nav-elements">Contact</Link>
          {/* <Link to="/services" className="nav-elements">Services</Link> */}
          {/* <Link to="/Contact">Hire Me</Link> */}
        </div> 
        </div>
      </nav>
      
    
  );
}
export default Navb;