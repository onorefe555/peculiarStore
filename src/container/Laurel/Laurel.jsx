import react from "react";
import "./laurel.css";
import chefjeremy from "../../asset/chefjeremy.mp4"
import { Subheading, Menuitem} from "../../component";
import { Data  } from "../../constant/";
import one from "../../constant/asset/one.png"
import four from "../../constant/asset/four.png"
import three from "../../constant/asset/three.png"
import eight from "../../constant/asset/eight.png"
import salmon from "../../constant/asset/salmon.jpg"


const AwardCard =({Award:{imgURL, title, subtitle}})=>{
    <div className="app__laurel-award-card">
         <img src={imgURL} />
    </div>
}
const AwardCards =({Award, Awardtext})=>{
    return(
        <div>   
            <h3 style={{color:"#ddca87"}}>{Award}</h3>
            <p className="award-text">{Awardtext}</p>
        </div>
    )
}

const Laurel =()=>{
    return(
        <div className="app__bg app__wrapper section__padding " id="Awards">
            <div className="app__wrapper-info">
                  <Subheading  title="Award and recongnition"/>

                  <div className="app__award-award-num">

                      <div className="app__award-testimon-rowone">
                            
                             <div className="app__ward-testimony">
                                   <div className="app__laurel-img">
                                       <img src={one} alt="ONE" />
                                   </div>
                                         <AwardCards  Award="Laurel" Awardtext="The course presented the fundamental of 
                                          programing language, evolution of programming
                                            language, programming paradigm, language structure, syntax and semantics,
                                           lexical analysis, and
                                           language processing."/>
                               </div> 

                               <div className="app__ward-testimony">
                                   <div className="app__laurel-img">
                                   <img src={three} alt="" />
                                   </div>
                                         <AwardCards Award="Laurel" Awardtext="The course presented the fundamental of 
                                          programing language, evolution of programming
                                            language, programming paradigm, language structure, syntax and semantics,
                                           lexical analysis, and
                                           language processing."/>
                               </div>    
                      </div>

                      <div className="app__award-testimon-rowtwo">

                               <div className="app__ward-testimony-rowtwo-text">
                                          <div className="app__laurel-img">
                                              <img src={four} alt="four" />
                                           </div>
                                                <AwardCards Award="Laurel" Awardtext="The course presented the fundamental of 
                                                programing language, evolution of programming
                                                language, programming paradigm, language structure, syntax and semantics,
                                                lexical analysis, and
                                                 language processing."/>
                               </div> 

                               <div className="app__ward-testimony-rowtwo-text">
                                   <div className="app__laurel-img">
                                       <img src={eight} alt="" />
                                   </div>
                                         <AwardCards Award="Laurel" Awardtext="The course presented the fundamental of 
                                          programing language, evolution of programming
                                            language, programming paradigm, language structure, syntax and semantics,
                                           lexical analysis, and
                                           language processing."/>
                               </div>    
                      </div>
                  </div>
            </div>
            <div className="app__wraper-img">
                  <img src={salmon} alt="salman image" />
            </div>
        </div>
    )
}
export default Laurel

