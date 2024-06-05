import react, { Component } from "react"
import React, {useRef} from "react"
import "./gallary.css"
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import { Subheading } from "../../component"
// import {food1, food2, food3, food4, food5,food6, food7} from "../../constant/asset"
import food1 from "../../constant/asset/food1.png"
import img1 from "../../constant/asset/img1.jpg"
import img2 from "../../constant/asset/img2.png"
import img3 from "../../constant/asset/img3.png"
import img4 from "../../constant/asset/img4.png"
import img5 from "../../constant/asset/img5.png"
import img6 from "../../constant/asset/img6.png"
import img7 from "../../constant/asset/img7.png"

let images =[food1,img2,img3,img4,img5,img6,img7 ]
let  imaageIndex =0;
let imaageIndexes
imaageIndex++
imaageIndexes++
 class Gallarys extends react.Component{

  constructor(props){
    super(props) 
    this.state = {
      img : images[imaageIndexes], 
      imaageIndexes : 0,
      imaageIndex : 1
    }
  }
  
   scrollImgNext(){
    
    this.setState ({
      img : this.state.img,
      imaageIndexes :this.state.imaageIndexes +1,
      imaageIndex : this.state.imaageIndex +1
    })

    if (this.state.imaageIndexes >= images.length-1 || this.state.imaageIndex>= images.length-1 ) {
      return this.setState ({
        imaageIndexes : 0,
        imaageIndex : 1
      })
    }
   }
   prevImg(){
    this.setState ({
      imaageIndexes :this.state.imaageIndexes -1,
      imaageIndex : this.state.imaageIndex -1
    })
    if (this.state.imaageIndexes <= 0 || this.state.imaageIndex  <=0) {
      return this.setState ({
        imaageIndex  : images.length-1,
        imaageIndexes : images.length-2

      })
    }
   }
  render(){
    return(
      // <div>
      //   <span >{this.state.img}</span>
      //     <img id="" src={images[this.state.imaageIndexes]} alt="" />
      //     <button onClick={()=> this.scrollImgNext()}>Next</button>
      //     <button onClick={()=> this.prevImg()}>Previous</button>
      // </div>

      <div className="app__gallary flex__center">
      <div className="app__gallary-content">
           <Subheading title="Instagram"/>
           <h1 className="headtext__comorrant" style={{color:"#dcca87"}}>Photo Gallary</h1>
           <p className="p__opensans" style={{color: "#aaaa", marginTop :"2rem", fontSize:"18px", lineHeight: "33px", letterSpacing:"1"}}>Winding
            up, we can go over the main points of this unit. The Structured Query 
            Language (SQL) is regarded as the standard relational data
           base language. A typical SQL consists of several parts which include: Data definition
            language (DDL), Interactive data manipulation language (DML), Embedded data 
            manipulation language</p>
            <button className="custom__button" type="button">View More</button>
      </div>

      <div className="app__gallary-images">

            <div className="app__gallary-images_container" ref=""> 
                
                  <div className="app__gallary-images-card flex__centekey={gallary_image-${index +1}}">
                     <h2>Gallary</h2>
                    <img id="" src={images[this.state.imaageIndex]} alt="gallary images" />
                  </div>
                
                <img id="" src={images[this.state.imaageIndexes]} alt="" />
            </div>

            <div className="app__gallary-images_arrow">
                 <BsArrowLeftShort className="gallary-arrow-icon" onClick={()=> this.prevImg()}/>
                 {/* <BsArrowRightShort className="gallary-arrow-icon" onClick={()=> this.scrollImgNext()}/> */}
                 
            </div>
            {/* <BsArrowLeftShort className="gallary-arrow-icon" onClick={()=> this.prevImg()}/> */}
            <BsArrowRightShort className="gallary-arrow-icon" onClick={()=> this.scrollImgNext()}/>
      </div>
 </div>
    )
  }
}
// const Gallary =()=>{

//   function Next() {
//     const scrollRef = react.useRef(null)
//     imaageIndex++
//     // slide = images[imaageIndex]
//     const slide =images[imaageIndex]
//     if (imaageIndex >= images.length) {
//       return imaageIndex = 0
//     }
//      scrollRef.src=slide
//   }
//     const scrollRef = react.useRef(null)
//     const scroll = (direction )=>{
//      const {current} = scrollRef

//      if (direction === "left"){
//         current.scrollLeft -=300;
//      }
//      else{
//         current.scrollLeft +=300;
//      }
//     }
//     return(
       
//     )
// }

 export default Gallarys