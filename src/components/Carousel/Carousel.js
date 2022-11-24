import React from "react";
import './Carousel.css';
import Carousel from "react-material-ui-carousel";
function Mycarousel(){
  let mycolors = ['#FF00FF', 'pink', 'red', 'yellow']
  return(
    <div className="Carousel">
      <Carousel height={'300px'}>
      {
        mycolors.map(color => (<div className="elems_carousel" style={{backgroundColor: color}}></div>))
      }

      </Carousel>
    </div>
  )
}

export default Mycarousel;