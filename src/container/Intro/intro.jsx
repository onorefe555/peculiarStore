import react, { useState } from "react"
import "./intro.css"
import chefjeremy from "../../asset/chefjeremy.mp4"
import {BsFillPlayfill, BsPauseFill} from "react"

const Intro =()=>{
    const [playvideo, setplayvideo] = react.useState(false)
    const VidRef = react.useRef();
    // const handlevideo =()=>{
    //   setplayvideo((prevplayvideo)=> !prevplayvideo
    //   if(playvideo){
    //     VidRef.current.pause();
    //   }
    //   else{
    //     VidRef.current.play();
    //   }
    //   )}
    return(
        <div className="app__video">
            <video className="video"
            ref={VidRef}
            src={chefjeremy}
            type="video/mp4"
            loop
            controls
            muted
            />
            <div className="app__video-overlay flex__center">
              <div className="app__video-overlay-center flex-center" >
                
                {/* {playvideo ?(<BsPauseFill/>): 
                <BsFillPlayfill/>
                 } */}
              </div>
            </div>
        </div>
        
    ) 
}
export default Intro