import React from "react";
import './Header.css';
import MenuItem from "../menu-item";

function Header(){
  const menu = [
    { text: 'homepage' },
    {
     text: 'Pages',
     items: [
      { text: 'Full with content', items:[ {text: 'Full with content1'}] },
      { text: 'Content + left side-bar' },
      { text: 'Content + right side-bar' },
      { text: 'Content + both side-bars' },
      { text: 'Contact' },
     ]
    },
    {
     text: 'Elements',
     items: [
      { text: 'Buttons' },
      { text: 'Alert messages' },
      { text: 'Font Icons' },
      { text: 'Call to action' },
      { text: 'Columns' },
      { text: 'Lists' },
      { text: 'Accordions' },
      { text: 'Tabs' },
      { text: 'Toggles' },
      { text: 'Pricing Tables' },
     ]
    }
   ];
  return(
    <header>
   {
    menu.map(elem => <MenuItem elem={elem} />)
   }
  </header>
 );
}
export default Header;