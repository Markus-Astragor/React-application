import React from "react";
import './Input.css';


function Input(props) {
  return (
    <div className="Input">
      <form onSubmit={props.getWeather_Method}>
        <input type="text" name="city" placeholder="Your town" />
        <button>Receive Weather</button>
      </form>
    </div>
  )
}

export default Input;