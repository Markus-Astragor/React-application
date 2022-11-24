import React from "react";
import image1 from './images/100x100.gif'
import Headline from "./components/Headline";
import NewHeadline from "./components/New_Headline";
let data = [
  {image: image1, title: "Headline Text", description: "Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.", description2: "Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.", topic: "Read More »"}
]

let data2 = [
  {image2: image1, title2: "Headline Text", description3: "Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.", description4: "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.", description5: "Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus."},
  {image2: image1, title2: "Headline Text", description3: "Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.", description4: "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.", description5: "Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus."},
]

let dataarray = data.map(
  card => <Headline
  image = {card.image}
  title = {card.title}
  description = {card.description}
  description2 = {card.description2}
  topic = {card.topic}
  />
)

let dataarray2 = data2.map(
  (card2, i) => <NewHeadline
  image2 = {card2.image2}
  title2 = {card2.title2}
  description3 = {card2.description3}
  description4 = {card2.description4}
  description5 = {card2.description5}
  orientation = {i % 2 ? "left": "right"}
  />
)



function MyHeadline(){

  return(
    <div className="prop">{dataarray}
    {dataarray2}
  
    </div>
  )
}

export default MyHeadline;