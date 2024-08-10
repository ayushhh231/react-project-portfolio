import profile from './../../../public/profile_pic_circular.jpg'
import './About.css'
function About(){

    return(
        <div>
            <div className="main-container">
                <div className="img">
                    <img src={profile} alt="" />
                </div>
                <div className="about-me">
                    <span>I am a driven and ambitious student who was
                        preparing for the Joint Entrance Examination (JEE), 
                        a highly competitive engineering entrance exam in India.
                        Despite the rigorous demands of JEE preparation, I have 
                        also taken on the role of a front-end engineer, showcasing 
                        an impressive ability to balance academic pursuits with 
                        real-world technical experience.</span>
                </div>
            </div>
            <hr className="horizontal"/>
            <div className="main-container" data-aos="fade-top">
                <div className="sub-main">
                    <span>In their professional capacity as a front-end engineer, 
                        I have developed a strong command over web technologies 
                        including HTML, CSS, and JavaScript and React Js. 
                        I have worked on several projects that required creating user-friendly,
                        responsive, and dynamic web interfaces. I keen eye for design and usability
                        has enabled them to deliver applications that not only meet but
                        exceed user expectations.</span>
                </div>
                <div className="about-me-1">
                    <span>Moreover, I have also gained proficiency in back-end technologies, particularly
                        Java and Spring Boot. This expertise allows them to bridge the gap between the
                        front-end and back-end, ensuring seamless integration and efficient performance 
                        of web applications. Their knowledge of Java and Spring Boot has been instrumental
                        in developing robust backend services that support the needs of modern web applications.</span>
                </div>
            </div>
                <hr className="horizontal"/>
                <div className="main-container" data-aos="fade-top">
                    <div className="sub-main">
                    <span>Balancing Back-end And Front-end with a demanding role in software development is no small feat,
                        yet I have managed to excel in both areas. This experience has not only honed their technical
                        skills but also cultivated strong time management, problem-solving,
                        and multitasking abilities. Their dedication to continuous learning 
                        and improvement is evident in both their academic and professional
                        endeavors.</span>
                    </div>
                    <div className="about-me-1">
                        <span>I am poised to make significant contributions to the
                            field of software development, leveraging their solid 
                            technical foundation and the discipline I were developed 
                            during JEE preparation. With a passion for technology and
                            a commitment to excellence, I am on a path to achieving great
                            success in my future engineering career.</span>
                    </div>
                </div>
                




        </div>
    );
}
export default About;