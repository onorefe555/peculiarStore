import react from "react";
import "./header.css"
import { Images } from "../../constant";
import { Subheading } from "../../component";
import femalewears from "../../constant/asset/femalewears.jpg" 
import femaleshoes from "../../constant/asset/femaleshoes.jpg"
import shoe from "../../constant/asset/shoe.jpg"
import wear5 from "../../constant/asset/wears5.jpg"
import wears2 from "../../constant/asset/wears2.jpg"
import wears3 from "../../constant/asset/wears3.jpg"
import wears4 from "../../constant/asset/wears4.jpg"

const images = [femalewears, femaleshoes, shoe]

class Header extends react.Component{
    
    
    render(){
        return(
     <div className="app__header app__wrapper section__padding" id="home">
                <div className="app__wrapper_info">
                    <Subheading title="peculiar treasure store"/>
                    <h1 className="app__header-h1">Explore the unique delights of Peculiar Treasure Store</h1> 
                    <p className="p__opensans" style={{margin:"2rem 0"}}>We're thrilled to have you explore our
                     collection of trendy and high-quality clothing, shoes, and accessories. Whether you're looking
                      to upgrade your wardrobe or simply treat yourself to something
                       new, we've got you covered</p>
                    <button type="button" className="custom__button">Explore Menu</button>
                </div>

                <div className="app__wrapper-img">
                        <figure>
                                <img src={wear5} alt="wears images" />
                                <img src={femalewears} alt="wears images" />
                                <img src={wears2} alt="wears images" />
                                <img src={wears3} alt="wears images" />
                                {/* <img src={wears4} alt="wears images" /> */}
                        </figure>

                </div>
    </div> 
        )
    }
}
export default Header