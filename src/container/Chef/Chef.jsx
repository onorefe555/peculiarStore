import react from "react";
import "./chef.css"
import mrchef from "../../constant/asset/mrchef.png"
import { Subheading } from "../../component";
const Chef =()=>{
    return(
        <div className="app__bg app__wrapper section__padding"> 
            <div className="app__chef-img">
                <img src={mrchef} alt="mr chef" />
            </div>
            <div className="app__chef-specialtext">
                <p>We are committed to produce and market a range of culinart product which include seassoning 
                    cube and powdered seassoning that meet and exceed customer and statutory requirement.
                    We are committed to continually improve the effectiveness of our operations through
                    the implementation of the required of ISO. The range of product for GERICHT is seassoning
                    cubes (beef and chicken), and seasoning powders (Jollof Rice, Pepper soup, Goat meet, Curly
                    , Stew, Ginger-Onions-Garlic & Crayfish), was base on the outcome of consumer research the comp
                    any conducted across the countryand the need to give nigeria a completed meal. We have best
                    people working in the research and development team to ensure utmost quality and our quality
                    controls is of international standardwhich show we have the finest product in the market at
                    an affordable price.
                </p>
            </div>
        </div>
    )
}
export default Chef
