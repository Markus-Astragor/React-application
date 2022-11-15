import React from "react";
import './style.css';
import image1 from '../images/woman.jpg';
import New_about from './cards_about/index'

let data = [
  {image: image1, title: "About me", description: "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.", title2: "Static and dynamic content editing", description2: "A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"}
]

let dataarray = data.map(
  card => <New_about
  image = {card.image}
  title = {card.title}
  description = {card.description}
  title2 = {card.title2}
  description2 = {card.description2}
  />
)

function About () {
 return (
 <div className="prop">{dataarray}</div>


 );
}

export default About;