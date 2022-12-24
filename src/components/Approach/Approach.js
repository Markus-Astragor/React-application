import React from "react";
import './Approach.css';
import './Approach768.css';
import './Approach1024.css';
import './Approach1440.css';
import monitor from '../../images/monitor.png';
import implementation from '../../images/operation.png';
import glasses from '../../images/glasses.png';
function Approach() {
  // let p = 'Lorem ipsum dolor sit amet\n consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.';
  // const chuncs2 = p.split("\n"); 
  return (
    <div className="Approach" id="Approach">
      <div className="Approach_text">
        <h2 className="Purple_title">Our Approach</h2>
        <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem<br />
          possimus distinctio ex. Natus totam voluptatibus animi aspernatur<br />
          ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
          dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
      <div className="Approach_container">
        <div className="Data">
          <div>
          <img src={monitor} width="36px" height="36px"/>
          </div>
          <span className="h3">Data Gathering</span>
          <p className="long_paragraph">Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. Rem<br/>
              possimus distinctio ex. Natus totam<br/> 
              voluptatibus animi aspernatur<br/>
               ducimus quas obcaecati mollitia<br/>
                quibusdam temporibus culpa dolore<br/>
                 molestias blanditiis consequuntur<br/> 
                 sunt nisi.</p>
        </div>
        <div className="Implementation">
          <div>
          <img src={implementation} width="36px" height="36px"/>
          </div>
          <span className="h3">Implementation</span>
          <p className="long_paragraph">Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. Rem<br/>
              possimus distinctio ex. Natus totam<br/> 
              voluptatibus animi aspernatur<br/>
               ducimus quas obcaecati mollitia<br/>
                quibusdam temporibus culpa dolore<br/>
                 molestias blanditiis consequuntur<br/> 
                 sunt nisi.</p>
          </div>
        <div className="Launch">
          <div>
          <img src={glasses} width="36px" height="36px"/>
          </div>
          <span className="h3">Launch</span>
          <p className="long_paragraph">Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. Rem<br/>
              possimus distinctio ex. Natus totam<br/> 
              voluptatibus animi aspernatur<br/>
               ducimus quas obcaecati mollitia<br/>
                quibusdam temporibus culpa dolore<br/>
                 molestias blanditiis consequuntur<br/> 
                 sunt nisi.</p>
        </div>
      </div>
    </div>
  )
}
export default Approach;