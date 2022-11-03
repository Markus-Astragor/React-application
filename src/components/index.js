import React from "react";
import './style.css';
import image1 from './images/facebook.svg';
import image2 from './images/instagram.svg';
import image3 from './images/twitter.svg';
import image4 from './images/linkedin.svg';
import image5 from './images/email.svg';

function Navigation() {
  return (
    <div className="left-side">
      <h1> Milton </h1>
      <hr />
      <p>
        Denali is a simple responsive blog template.<br/>
        Easily add new posts using the Editor or change<br/> layout and design using the Designer.
      </p>
      <hr />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <hr/>
      <div className="images">
      <img src={image1} width="4%"/>
      <img src={image2} width="4.9%"/>
      <img src={image3} width="5%"/>
      <img src={image4} width="4%"/>
      <img src={image5} width="4%"/>
      </div>
     <p className="p">Built with <span className="span">Webflow</span></p>
    </div>
  );
}

export default Navigation;