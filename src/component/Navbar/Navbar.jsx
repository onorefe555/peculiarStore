import react, { useState } from "react";
import "./navbar.css";
// import { GiHamburgerMenu} from "react-icons/gi"
// import {MdOutlineRestaurantMenu} from "react-icons/md"
import Images from "../../constant/Images"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import Footers from "../Footers/Footers";


const Navbar=()=>{

    const [toggleMenu, setTogglemenu] = useState(false)
     const  Menu=()=>{
        return(
            <>
               <ul className="app__navbar-smallscreen-links">
                 <li className="p__opensans"><a href="#home">Home</a></li>
                 <li className="p__opensans"><a href="#aboutus">About</a></li>
                 <li className="p__opensans"><a href="#menu">Menu</a></li>
                 <li className="p__opensans"><a href="#Awards">Award</a></li>
                 <li className="p__opensans"><a href="#contact">Contact</a></li>
              </ul>
            </>
        )
     }
    return(
        <nav className="app__navbar section__padding ">
             <div className="App__navbar-logo">
                {/* <img src={Images.gericht} alt="logo App" /> */}
                <h1 className="logo">T.VENTURE</h1>
             </div>

             <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#aboutus">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#Awards">Award</a></li>
                <li className="p__opensans"><a href="#Contact">Contact</a></li>
             </ul>
             <div className="app__navbar-login">
                    <a href="#login" className="p__opensans">Login / Register</a>
                        <div/>

                    <a href="/" className="p__opensans"> Book Table</a>
             </div>
             
             <div className="app__navbar-smallscreen" id="app__navbar-smallscreen">
             {toggleMenu 
                       ? <RiCloseLine color="#fff" size={30} onClick={()=>setTogglemenu(false)  } className="toggle" />
                       : <RiMenu3Line color="#fff" size={30} onClick={()=>setTogglemenu(true) } className="toggle" />
                }

                      
                     {toggleMenu && (
                      <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
                               <Menu/>
                      </div>
                     )}

             </div>
        </nav>
    )
}
export default Navbar





