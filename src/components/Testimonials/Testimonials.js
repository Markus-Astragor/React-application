
import React, { Component } from "react";
import './Testimonials.css';
import copter from '../../images/person_1.jpg';
import skateboarder from '../../images/person_2.jpg';
import woman from '../../images/person_3.jpg';
import table from '../../images/person_4.jpg';
import Slider from "react-slick";
import './Testimonials768.css';
import './Testimonials1024.css';


export default class AsNavFor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    let mywidth_height = '500px';
    let img_class = 'img_class';
    let My_p = 'MyH2';
    return (
      <div className="Testimonials" id="Testimonials">
        <div className="Testimonials_text">
          <h2 className="Purple_title">Testimonials</h2>
          <p className="long_paragraph">Natus totam voluptatibus animi aspernatur ducimus quas<br />
            obcaecati mollitia quibusdam temporibus culpa dolore molestias<br />
            blanditiis consequuntur sunt nisi.</p>
          <div className="First_slider_Testimonials">
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              arrows={false}
              speed={1500}
            >
              <div>
              <p className={My_p}>"Lorem ipsum dolor sit amet, <br/>
                consectecur adipisicing elit.<br/>
                Dignimissimos corrupti, abcaecati<br/>
                repudiandae, animi ad quos. Eius<br/>
                expedita ipsa qui autem."<br/>
                <b>-Greg Pollach</b></p>
              </div>
              <div>
              <p className={My_p}>"Lorem ipsum dolor sit amet, <br/>
                consectecur adipisicing elit.<br/>
                Dignimissimos corrupti, abcaecati<br/>
                repudiandae, animi ad quos. Eius<br/>
                expedita ipsa qui autem."<br/>
                <b>-Rober Kenneth</b></p>
              </div>
              <div>
              <p className={My_p}>"Lorem ipsum dolor sit amet, <br/>
                consectecur adipisicing elit.<br/>
                Dignimissimos corrupti, abcaecati<br/>
                repudiandae, animi ad quos. Eius<br/>
                expedita ipsa qui autem."<br/>
                <b>-Joshua Smith</b></p>
              </div>
              <div>
                <p className={My_p}>"Lorem ipsum dolor sit amet, <br/>
                consectecur adipisicing elit.<br/>
                Dignimissimos corrupti, abcaecati<br/>
                repudiandae, animi ad quos. Eius<br/>
                expedita ipsa qui autem."<br/>
                <b>-Jean Doe</b></p>
              </div>
            </Slider>
          </div>
          <div className="Second_slider_Testimonials">
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
              dots={true}
              arrows={false}
              autoplay={true}
              speed={1500}
              autoplaySpeed={2000}
              pauseOnHover={true}
              slidesToScroll = {2}
            >
              <div>
                <img src={copter} width={mywidth_height} height={mywidth_height} className={img_class} />
              </div>
              <div>
                <img src={skateboarder} width={mywidth_height} height={mywidth_height} className={img_class} />
              </div>
              <div>
                <img src={woman} width={mywidth_height} height={mywidth_height} className={img_class} />
              </div>
              <div>
                <img src={table} width={mywidth_height} height={mywidth_height} className={img_class} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}



