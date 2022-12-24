import React from "react";
import './Services.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import monitor from '../../images/monitor.png';
import chat from '../../images/chat.png';
import glasses from '../../images/glasses.png';
import operation from '../../images/operation.png';

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="Services" id="Services">
      <div className="Services_text">
        <h2 className="Purple_title">Services</h2>
        <p className="long_paragraph">Natus totam voluptatibus animi aspernatur<br />
          ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
          dolore molestias blanditiis consequuntur sunt nisi.</p>

      </div>
      <div className="Services_container">
        <Slider {...settings}>
          <div className="Cards_info">
            <img src={monitor} width="50px" height="50px" className="img_in_slider" />
            <h2 className="Purple_title small">Web Development</h2>
            <p className="long_paragraph">Natus totam voluptatibus animi aspernatur<br />
              ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
              dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>
          <div className="Cards_info">
          <img src={chat} width="50px" height="50px" className="img_in_slider" />
            <h2 className="Purple_title small">HTML5/CSS3</h2>
            <p className="long_paragraph">Natus totam voluptatibus animi aspernatur<br />
              ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
              dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>
          <div className="Cards_info">
          <img src={glasses} width="50px" height="50px" className="img_in_slider" />
            <h2 className="Purple_title small">Web Templates</h2>
            <p className="long_paragraph">Natus totam voluptatibus animi aspernatur<br />
              ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
              dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>
          <div className="Cards_info">
          <img src={operation} width="50px" height="50px" className="img_in_slider" />
            <h2 className="Purple_title small">Creative Design</h2>
            <p className="long_paragraph">Natus totam voluptatibus animi aspernatur<br />
              ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
              dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Services;