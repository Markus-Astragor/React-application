import React from "react";
import './style2.css';
import image1 from '../images/camcorder.jpg'
import image2 from '../images/mountains.jpg'
import image3 from '../images/baloons.jpg'
import image4 from '../images/flower.jpg'
import image5 from '../images/flower2.jpg'

import Card from './card/index'

let cardData = [
  {image: image1, title: "Coffee variety macchiato, as organic ut variety caffeine americano", content:"Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.", date:"JUNE 25, 2020", topic:"Travel"},
  {image: image2, title: "Overlaid the jeepers uselessly much excluding", content:"Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish. ", date:"JUNE 25, 2020", topic:"Tech"},
  {image: image3, title: "Wherever far wow thus a squirrel raccoon jeez jaguar this from along", content:"Cup, caramelization viennese, cultivar macchiato flavour percolator ristretto frappuccino. Lungo extra macchiato cream chicory turkish caramelization.", date:"JUNE 25, 2020", topic:"Art"},
  {image: image4, title: "According a funnily until pre-set or arrogant well cheerful", content:"Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.", date:"JUNE 25, 2020", topic:"Music"},
  {image: image5, title: "Coffee sugar, chicory seasonal espresso barista americano", content:"Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings, whipped kopi-luwak body cortado seasonal. Mug roast, café au lait affogato lungo viennese decaffeinated. Cultivar, redeye brewed seasonal, java as french press et sweet cup mazagran.", date:"JUNE 25, 2020", topic:"Music"}
]
let cardArray = cardData.map (
  card => <Card 
   image = {card.image}
   title = {card.title} 
   content = {card.content}
   date = {card.date}
   topic = {card.topic}
    />
)

function Main_page(){
  return(
    <div className="right-side">
     {cardArray}
     <br/>
     <button id="all_posts">All posts-&#62;</button>
      </div>
  )
}


export default Main_page;