import react from "react"
import "./findus.css"

import { Subheading, Menuitem} from "../../component";
import { Data  } from "../../constant/";
import flower from "../../constant/asset/flower.png"


const Findus =()=>{
    return(
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper-info">
                <h3 className="contact_us">Contact Us</h3>
                <h1 className="headtext_comorant" style={{marginBottom: "2rem", color:"#dcca87",  fontSize : "60px"}}>Find Us</h1>
                    <div className="app__wrapper_content">
                       <p className="p__opensan" style={{color:"#fff", fontSize : "18px"}} > BLOCK K 4767 Apapa Express Way Isolo Oshodi</p> 

                         <p className="p__comorant" style={{color:"#dcca87",fontSize : "20px",fontWeight:"bold" }}> Opening Hours</p>

                         <p className="p__opensan"> Monday - Friday 10am : 6:00pm</p>

                         <p className="p__comorant"> Saturday - Sunday 10am - 3:00pm </p>
                    </div>
                    <button className="custom_button">Visit Us</button>
            </div>

            <div className="app__wrapper_info">
                  <img src={flower} alt="" />
            </div>
        </div>
    )
}
export default Findus