import react from "react";
import "./footers.css";
import Subheading from "../Subheading/Subheading";

const Newsletter =()=>{
    return(
        <div className="app__newsletter-container">
              <div className="app__newsletter">
                          <div className="app__newsletter-heading">
                                        <Subheading title="News Letter"/>
                                        <h1 className="headtext__comorant">Subscribe to our news letter</h1>
                                        <p className="p__opensan">And never miss any of our update</p>
                            </div>
                            <div className="app__newsletter-input flex__center">
                                        <input type="email" placeholder="Enter your email" required />
                                        <button className="custom__button">Subscribe</button>
                            </div>
              </div>     
        </div>
    )
}
export default Newsletter