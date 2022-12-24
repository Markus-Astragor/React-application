
import React from "react";

import './Plan.css';
import './Plan1440.css';
import './Plan1024.css';
import './Plan768.css';
function Plan() {
  return (
    <div className="Plan" id="Plan">
      <div className="Plan_text">
        <h2>Choose Your Plan</h2>
        <p className="long_paragraph">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia<br />
          quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
      <div className="Plan_container">
        <div className="Starters">
          <h2 className="small_purple_title">Starters</h2>
          <p className="long_paragraph">Lorem ipsum dolor sit amet consectetur<br />
            adipisicing elit.</p>
          <h3>Starting at</h3>
          <h2 className="Purple_title">$7</h2>
          <h3>Per Month</h3>
          <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur<br />
            adipisicing elit. Cum enim nobis aspernatur<br />
            saepe dolores?</p>
          <button className="Pricing_buttons">Get Started</button>
        </div>
        <div className="Premium">
          <h2 className="small_purple_title">Premium</h2>
          <p className="long_paragraph">Lorem ipsum dolor sit amet consectetur<br />
            adipisicing elit.</p>
          <h3>Starting at</h3>
          <h2 className="Purple_title">$75</h2>
          <h3>Per Month</h3>
          <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur<br />
            adipisicing elit. Cum enim nobis aspernatur<br />
            saepe dolores?</p>
            <button className="Pricing_buttons" id="Premium_btn">Get Started</button>
        </div>
        <div className="Enterprise">
          <h2 className="small_purple_title">Enterprise</h2>
          <p className="long_paragraph">Lorem ipsum dolor sit amet consectetur<br />
            adipisicing elit.</p>
          <h3>Starting at</h3>
          <h2 className="Purple_title">$390</h2>
          <h3>Per Month</h3>
          <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur<br />
            adipisicing elit. Cum enim nobis aspernatur<br />
            saepe dolores?</p>
            <button className="Pricing_buttons">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Plan;