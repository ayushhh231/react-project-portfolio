import "./Home.css";
import { Link } from "react-router-dom";
import Hire from "./Hire";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profilePhoto from "../../../public/profile_pic_circular.jpg";
import java from "../../../public/java.jpg";
import frontend from "../../../public/download.png";
import canva from "/canva.jpg";

function Homes() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div className="heading" data-aos="fade-right">
        <h1>Hii !</h1>
        <h1>I am Ayushmaan Sharma</h1>
        <h1>Front-End Developer</h1>
      </div>
      <br />

      <div className="img-content" data-aos="fade-right">
        <img src={profilePhoto} alt="" />
        <div className="para-content" data-aos="fade-right">
          <b>
            {" "}
            <p style={{ color: "#758694" }}>Who I am ?</p>
          </b>
          <p>
            Myself Ayushmaan Sharma A front-end developer specializing in React
            is responsible for designing and implementing the visual and
            interactive elements of a web application. This role focuses on
            creating a seamless user experience by leveraging the capabilities
            of the React library.
          </p>{" "}
          <br />
          <a href="ayushmaan_resume.pdf" download="resume" className="button">
            Download CV
          </a>
        </div>
      </div>
      <div className="service" data-aos="fade-right">
        <b>
          {" "}
          <p style={{ color: "#758694" }}>What I Do ?</p>
        </b>
        <h3>Service</h3>
        <img src={java} alt="" height="200px" width="250px" />
        <img src={frontend} alt="" height="200px" width="250px" />
        <img src={canva} alt="" height="200px" width="250px" />
      </div>
      <div className="hire-content" data-aos="fade-right">
        <h5>Want to work with me ?</h5>
        <Link to="/Contact" >
         <p className="btn-1"> Hire Me </p>
        </Link>
      </div>
      <div className="hire-para" data-aos="fade-right">
        <p>Always free to feel contact & Hire me</p>
      </div>
      <div className="communicate" data-aos="fade-right">
        <p>How can you Communicate ?</p>
        <h5>Contact Me</h5>
        <i className="fa-brands fa-instagram">insta</i>
        <i className="fa-solid fa-envelope">gmail</i>
        <i className="fa-solid fa-phone">Phone</i>
        <i className="fa-brands fa-twitter">Twitter</i>
      </div>
    </>
  );
}
export default Homes;
