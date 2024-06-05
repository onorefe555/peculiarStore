import react from "react";
import  "./App.css"
import { Footers, Menuitem, Navbar, Subheading } from "./component";
import {Data, Images} from "./constant";
import Introduction from "./container/Introduction/Introduction";
import {Shop, Chef,  Findus, Footer, Gallary, Header, Menu, Specialmenu, Intro, Laurel  } from "./container"
// import {BrowserRouter, Routes, Route} from "react-dom"
import {BrowserRouter, useRoutes, Routes, Route} from "react-router-dom"
import  Gallarys  from "./container/Gallary/Gallary";  
const App =()=>{
    return(
        <div>
             <Navbar />
             <Introduction/>
             <Header/>
             <Shop/>
             {/* <Specialmenu/>
             <Chef/>
             <Intro/>
             <Laurel/>
             <Gallary/>
             <Gallarys/>
            <Findus />
            <Footers/>
            <Footer/> */}
        </div>
    )
}
export default App