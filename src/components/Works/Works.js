import React from "react";
import './Works.css';
import './Works768.css';
import './Works1024.css';
import './Works1440.css';
import Copter_img from '../../images/img_1.jpg';
import tick from '../../images/checkmark.png';
import headphones from '../../images/headphones.png';
import reload from '../../images/reload.png';
import download from '../../images/download.png';
import monitor from '../../images/monitor.png';
import chat from '../../images/chat.png';


function Works() {
  return (
    <div className="Main_Works">
    <div className="Works">
      <div className="Works_left_side">
        <h2 className="Purple_title">Love our Works</h2>
        <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
          Rem possimus distinctio ex. Natus totam voluptatibus<br />
          animi aspernatur ducimus quas obcaecati mollitia<br />
          quibusdam temporibus culpa dolore molestias blanditiis<br />
          consequuntur sunt nisi.</p>

        <p className="long_paragraph">
          Aperiam neque id, illum laudantium autem vero quae<br />
          debitis tempora modi. Ipsa molestias enim in rem et<br />
          incidunt beatae fugit, ab quam optio atque maiores<br />
          facere est quidem, veritatis commodi.
        </p>
        <br />
        <p><img src={tick} width="24px" height="24px"/>Aperiam neque id illum laudantium</p>

        <p><img src={tick} width="24px" height="24px"/>Maiores facere est quidem</p>

        <p><img src={tick} width="24px" height="24px"/>Laudantium autem vero</p>
      </div>
      <div className="Works_right_side">
        <img src={Copter_img} width="500px" height="580px" />
        <div className="Purple_square" id="Purple_square">
          <img src={headphones} width="38px" height="38px"/>
          <h3>Pixel Perfect Templates</h3>
          <p className="long_paragraph">Lorem ipsum dolor sit amet,<br />
            consectetur adipisicing elit.<br />
            Obcaecati commodi<br />
            aspernatur eum eius inventore facilis.</p>
          <p>Visit <u>Colorlib</u></p>
        </div>
      </div>
    </div>
    <div className="Progress_bar" id="Progress_bar">
      <div className="Creativity">
        <div className="img_and_title">
          <img src={reload} width="36px" height="36px"/>
          <span>360</span>
        </div>
        <p>Creativity</p>
      </div>
      <div className="WordPress">
        <div className="img_and_title">
        <img src={download} width="36px" height="36px"/>
        <span>4500</span>
        </div>
        <p>WordPress Themes</p>
      </div>
        <div className="Computer">
          <div className="img_and_title">
          <img src={monitor} width="36px" height="36px"/>
          <span>120</span>
          </div>
          <p>HTML5 / CSS3</p>
        </div>
        <div className="Bootstrap">
          <div className="img_and_title">
          <img src={chat} width="36px" height="36px"/>
          <span>3913</span>
          </div>
          <p>Bootstrap</p>
        </div>
    </div>
    </div>
  )
}

export default Works;