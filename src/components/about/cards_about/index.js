import React from "react";
import './style.css';
import {NavLink} from 'react-router-dom';


function New_about(props){
  return(
    <div className="first-card">
        <div className="blog-image" style={{
          backgroundImage: `url(${props.image})`}}></div>
    <div className="content">
     <h1>{props.title}</h1>
    
     <br/> 
     <p>{props.description}</p>
    
     <br/> 
     <h3>{props.title2}</h3>
     
    <p>{props.description2}</p>
    <NavLink to='/contact'><button id="btn_touch">Get in touch</button></NavLink>
    </div>
    
    </div>
  )
}
export default New_about;