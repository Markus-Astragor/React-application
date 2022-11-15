import React from "react";
import './style.css'
function Card(props){
  return(
    <div className="first-card">
    <div className="blog-image" style={{
          backgroundImage: `url(${props.image})`}}></div>
    <div className="content">
  <h1>{props.title}</h1>
  <p>{props.content}
    <br/>
    <br/>
     {props.date} | <u className="topic">{props.topic}</u>
     </p>
     </div>
     </div>
  )
}
export default Card;