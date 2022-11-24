import React from "react";
import './Headline.css';

function Headline(props) {
  return (
    <div className="main">
      <div className="first_component">
      <div style={{ width: "100px", height: "100px", backgroundImage: `url(${props.image})` }} className="image"> </div>
      <h3>{props.title}
      <p style={{fontWeight: 100, width: "600px", fontSize: 14}}>{props.description}
        <br/>
        {props.description2}
        <br/>
        <br/>
        <u className="underline">{props.topic}</u>
        </p>
      </h3>
      </div>
      <div className="second_component">
      <div style={{ width: "100px", height: "100px", backgroundImage: `url(${props.image})` }} className="image"> </div>
      <h3>{props.title}
      <p style={{fontWeight: 100, width: "600px", fontSize: 14}}>{props.description}
        <br/>
        {props.description2}
        <br/>
        <br/>
        <u className="underline">{props.topic}</u>
        </p>
      </h3>
      </div>
      <div className="third_component">
      <div style={{ width: "100px", height: "100px", backgroundImage: `url(${props.image})` }} className="image"> </div>
      <h3>{props.title}
      <p style={{fontWeight: 100, width: "600px", fontSize: 14}}>{props.description}
        <br/>
        {props.description2}
        <br/>
        <br/>
        <u className="underline">{props.topic}</u>
        </p>
      </h3>
      </div>
      <div className="fourth_component">
      <div style={{ width: "100px", height: "100px", backgroundImage: `url(${props.image})` }} className="image"> </div>
      <h3>{props.title}
      <p style={{fontWeight: 100, width: "600px", fontSize: 14}}>{props.description}
        <br/>
        {props.description2}
        <br/>
        <br/>
        <u className="underline">{props.topic}</u>
        </p>
      </h3>
      </div>
    </div>
  )
}

export default Headline;