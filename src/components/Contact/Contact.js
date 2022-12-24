import React from "react";
import './Contact.css';
import './Contact_smallscreen768.css';
import  './Contact_smallscreen1024.css';
import './Contact_smallscreen1440.css';
import About from '../../images/about_1.jpg';


function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="Flex_container">
      <div className="Contact_text_forms">
        <div className="Text_Contact">
        <h2 className="Purple_title">Contact Us</h2>
        <p className="long_paragraph">Natus totam voluptatibus animi aspernatur ducimus quas<br/>
         obcaecati mollitia quibusdam temporibus culpa dolore molestias<br/>
          blanditiis consequuntur sunt nisi.</p>
          </div>
          <div className="inputs-flex">
          <input placeholder="First name" id="First_name"></input>
          <input placeholder="Last name" id="Last_name"></input>
          </div>
          <input placeholder="Subject" id="Subject"></input>
          <input placeholder="Email" id="Email"></input>
          <input placeholder="Write your message here" id="Your_message"></input>
          <button id="Send_message">Send message</button>
      </div>
      <div className="Right_side_image">
      <img src={About} width="80%" height="80%"/>
      </div>
      </div>
    </div>
  )
}

export default Contact;