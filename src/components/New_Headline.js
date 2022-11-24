import React from "react";
import './New_Headline.css'

function NewHeadline(props2){
  return(
    <div className="first_component2" style={{flexDirection: props2.orientation == "left"? "row": "row-reverse"}}>
   
   
    <h3>{props2.title2}
    <p style={{fontWeight: 100, width: "600px", fontSize: 14}}>
      {props2.description3}
      <br/>
      {props2.description4}
      <br/>
      {props2.description5}
      </p>
    </h3>
    <div style={{ width: "500px", height: "200px", backgroundImage: `url(${props2.image2})` }} className="big_image"> </div>
    
    </div>
  )
}

export default NewHeadline;