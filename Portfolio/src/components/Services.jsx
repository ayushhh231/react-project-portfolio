import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
function Services(){
    useEffect(() => {
        AOS.init({duration:2000})
    },)
    return(
        <>
            
        </>
    );
}
export default Services;