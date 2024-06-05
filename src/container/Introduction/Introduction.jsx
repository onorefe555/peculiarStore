import react from "react";
import "./introduction.css"

const introduction =()=>{
    return(
        <div className="App_introduction-container">
                   <h1 className="app__header-introduction">Welcome to peculiar Treasure Store</h1> 
                    <p className="p__opensans" style={{margin:"2rem 0"}}>Our wears are not 
                    only stylish but also comfortable, durable, and affordable. We've got something
                        for everyone. So, what are you waiting for? Visit us today and discover your new favorite wear</p>
                    <button type="button" className="custom__button">Contact Us</button>
        </div>
    )
}
export default introduction