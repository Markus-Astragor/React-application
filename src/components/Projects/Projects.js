import React from "react";
import './Projects.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Copter from '../../images/img_1.jpg';
import Skateboarder from '../../images/img_2.jpg';
import Woman from '../../images/img_3.jpg';
import Workplace from '../../images/img_4.jpg';


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <div className="Projects" id="Projects">
      <div className="Projects_text">
        <h2 className="Purple_title">Our Projects</h2>
        <p className="long_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem<br />
          possimus distinctio ex. Natus totam voluptatibus animi aspernatur<br />
          ducimus quas obcaecati mollitia quibusdam temporibus culpa<br />
          dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
      <div className="container_slider">
        <Slider {...settings}>
          <div><img src={Copter} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Skateboarder} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Woman} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Workplace} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Copter} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Skateboarder} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Woman} width="500px" height="500px" className="img_show"/></div>
          <div><img src={Workplace} width="500px" height="500px" className="img_show"/></div>
         </Slider>

      </div>
    </div>
  )
}

export default Projects;