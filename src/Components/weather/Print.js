import React from "react";
import './Print.css';


function Print(props){
  return(
    <div className="Print">
      {props.city && 
      <div>
      <p>Місто: {props.city}</p>
      <p>Температура: {props.temp}</p>
      <p>Країна: {props.country}</p>
      <p>Схід сонця: {props.sunrise}</p>
      <p>Захід Сонця {props.sunset}</p>
      </div>
      }
      
      
    </div>
  )
}

export default Print;