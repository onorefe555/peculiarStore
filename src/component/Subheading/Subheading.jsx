import react from "react";
import "./subheading.css";
import { Images } from "../../constant";
import spoon from "../../constant/asset/spoon.png"
import spoon2 from "../../constant/asset/spoon2.png"

const Subheading =({title})=>{
    return(
        <div style={{marginBottom:'1rem'}}>
             <p className="p__cormorant">{title}</p>
        </div>
    )
}
export default Subheading
