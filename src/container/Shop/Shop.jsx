import react from "react";
import "./shop.css"
import femaleshoes from "../../constant/asset/femaleshoes.jpg"
import shoe from "../../constant/asset/shoe.jpg"
import shoe2 from "../../constant/asset/shoe2.jpg"
import shoe3 from "../../constant/asset/shoe3.jpg"
import shoe4 from "../../constant/asset/shoe4.jpg"
import shoe5 from "../../constant/asset/shoe5.jpg"
import shoe6 from "../../constant/asset/shoe6.jpg"
import shoe7 from "../../constant/asset/shoe7.jpg"
import shoe8 from "../../constant/asset/shoe8.jpg"
import shoe9 from "../../constant/asset/shoe9.jpg"
import shoe10 from "../../constant/asset/shoe10.jpg"
import shoe11 from "../../constant/asset/shoe11.jpg"
import shoe12 from "../../constant/asset/shoe12.jpg"
import shoe13 from "../../constant/asset/shoe13.jpg"
import shoe15 from "../../constant/asset/shoe15.jpg"
import shoe16 from "../../constant/asset/shoe16.jpg"
import { render } from "@testing-library/react";


let shoesStore =[shoe, shoe2, shoe3 , shoe4 , shoe5, shoe6, shoe7, shoe8, shoe9, shoe10,shoe11,shoe11,shoe12,shoe13,shoe15,shoe16]
const shoesStores = [
  { 
    image: <img src={shoe} alt="" />,
    name: <h4>Italian Shoe</h4> ,
    link : <p><a href="">Order Now</a></p>
  },
  {
    image: <img src={shoe2} alt="" />,
    name: <h4>Palenciaga</h4> ,
    link : <p><a href="">Order Now</a></p>
  },
  {
    image: <img src={shoe2} alt="" />,
    name: <h4>Palenciaga</h4> ,
    link : <p><a href="">Order Now</a></p>
  },
  {
    image: <img src={shoe2} alt="" />,
    name: <h4>Palenciaga</h4> ,
    link : <p><a href="">Order Now</a></p>
  },
];
let imaageIndexes = 0
imaageIndexes ++;
class Wears extends react.Component{
    return(){
        render(
           
        )
    }
}
class Shop extends react.Component{


 constructor(props){
    super(props) 
    this.state = {
      img : shoesStores[imaageIndexes], 
      imaageIndexes : 0,
      imaageIndex : 1,
      imageindex_last_images : 2
    }
  }
  
   scrollImgNext(){
    
    this.setState ({
      img : this.state.img,
      imaageIndexes :this.state.imaageIndexes +1,
      imaageIndex : this.state.imaageIndex +1,
      imageindex_last_images : this.state.imageindex_last_images+1
    })

    if (this.state.imaageIndexes >= shoesStore.length-1 || this.state.imaageIndex>= shoesStore.length-1  || this.state.imageindex_last_images>= shoesStore.length-1) {
      return this.setState ({
        imaageIndexes : 0,
        imaageIndex : 1,
        imageindex_last_images : 2
      })
    }
   }
   prevImg(){
    this.setState ({
      imaageIndexes :this.state.imaageIndexes -1,
      imaageIndex : this.state.imaageIndex -1,
      imageindex_last_images : this.imageindex_last_images -1
    })
    if (this.state.imaageIndexes <= 0 || this.state.imaageIndex  <=1 || this.state.imageindex_last_images  <=2) {
      return this.setState ({
        imaageIndex  : shoesStore.length-1,
        imaageIndexes : shoesStore.length-2,
        imageindex_last_images : shoesStore.length-3

      })
    }
   }

    
    render(){
        return(
            <div className="app__shop flex__center section__padding" id="aboutus">
                 <h1>Explore Our Enhancing Collection</h1>
                    {/* <div className="app__shop-items">
                        <button className="btn_shop">Shoe</button> 
                        <button>Clothe</button> 
                        <button>Bag</button>
                    </div> */}

                    <div className="app__shop_order-container">

                        <div className="app_shop-arrival">
                                <h3>New In</h3>
                                <p>New arrivals now dropping five day a week discover the latest
                                lunches from Monday to Friday.</p>
                        </div>

                        <div className="app_shop-ears-cont" id="app_shop-wears">
                                   
                                    <div >
                                        <p className="scrol_bar" onClick={()=>this.prevImg()}>Previous</p>
                                    </div>
                                    <div>
                                        <img src={shoesStore[this.state.imaageIndexes]} alt="" />
                                    </div>

                                    <div id="app_shop-wears_slide-mobile">
                                        <img src={shoesStore[this.state.imaageIndex]} alt="" />
                                    </div>

                                    <div id="app_shop-wears_slide-mobile">
                                        <img src={shoesStore[this.state.imageindex_last_images]} alt="" />
                                    </div>
                                    <div >
                                        <p className="scrol_bar"  onClick={()=>this.scrollImgNext()}>Next</p>  
                                    </div>
                            </div>
                            </div>
                    </div>
             
        
        )
    }
     
}

export default Shop