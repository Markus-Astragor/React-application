import React from "react";
import './Header.css';
import { useState } from "react";
import { useHref } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const [isActive, setActive] = useState("true");
   useEffect(() => {
    window.addEventListener('scroll', () => {
        setActive(!isActive)
      //  console.log('Screen')
      
    })
   }, [])
 
  return (
    <div className={isActive ? "Header active" : "Header"}>
      {/* // <div className="Header" ref={HeaderRef}> */}
          <ul className="List1">
            <li id="expert">Expert</li>
            <li><a className="link" href="#Home">Home</a></li>
            <li><a className="link" href="#Projects">Projects</a></li>
            <li><a className="link" href="#Approach">Process</a></li>
            <li><a className="link" href="#Testimonials">Testimonials</a></li>
            <li><a className="link" href="#Services">Services</a></li>
          </ul>
        
          <ul className="List2" id="list2">
            <li><a className="link" href="#Plan">Pricing</a></li>
            <li id="red-btn"><a className="link" href="#Contact" id="Contact2">Contact</a></li>
          </ul>
      
     
    </div>
  )
}


export default Header;