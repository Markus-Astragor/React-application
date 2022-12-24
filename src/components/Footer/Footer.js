import React from "react";
import './Footer.css';
import './smallscreen768.css';
import './smallscreen1024.css';
import './smallscreen1440.css';

function Footer(){
  return(
    <div className="Footer">
        <div className="Footer_content">
          <div className="About_us">
            <h3>About us</h3>
            <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur<br/>
             adipisicing elit. Porro consectetur ut hic ipsum et<br/>
              veritatis corrupti. Itaque eius soluta optio<br/> 
              dolorum temporibus in, atque, quos fugit sunt sit<br/>
               quaerat dicta.</p>
          </div>
          <div className="Links">
          <h3>Links</h3>
          <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Approach">Process</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#Services">Services</a></li>
          </ul>
          </div>
          <div className="Subscribe">
            <h3>Subscribe</h3>
            <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur<br/>
             adipisicing elit. Nesciunt incidunt iure iusto<br/>
              architecto? Numquam, natus?</p>
              <div className="Subscribe_btn_input">
              <input placeholder="Email"></input>
              <button id="Subscribe">Subscribe</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;