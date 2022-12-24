import React, { Component } from "react";
import './Intro.css';
import copter from '../../images/img_1.jpg';
import skateboarder from '../../images/img_2.jpg';
import woman from '../../images/img_3.jpg';
import table from '../../images/img_4.jpg';
import Slider from "react-slick";
import './Intro1440.css';
import './Intro1024.css';
import './Intro768.css';
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
    let Myh2 = 'myH2';
    return (
      <div className="Intro" id="Home">
        <div className="Card">
          <div className="First_slider">
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              arrows={false}
              speed= {1500}
            >
              <div>
                <h2 className={Myh2}>We do right things.</h2>
                <p className="long_paragraph">Lorem ipsum dolor sit amet consectecur<br />
                  adipisicing elit. Maxime ipsa nulla sed quis return<br />
                  armet natus quas neccessittatibys</p>
                <button className="btn_slider">Get started</button>

              </div>
              <div>
                <h2 className={Myh2}>We do awesome<br /> things</h2>
                <p className="long_paragraph">Lorem ipsum dolor sit amet consectecur<br />
                  adipisicing elit. Maxime ipsa nulla sed quis return<br />
                  armet natus quas neccessittatibys</p>
                <button className="btn_slider">Get started</button>

              </div>
              <div>
                <h2 className={Myh2}>Welcome</h2>
                <p className="long_paragraph">Lorem ipsum dolor sit amet consectecur<br />
                  adipisicing elit. Maxime ipsa nulla sed quis return<br />
                  armet natus quas neccessittatibys</p>
                <button className="btn_slider">Get started</button>
              </div>
              <div>
                <h2 className={Myh2}>High quality<br/> website templates</h2>
                <p className="long_paragraph">Lorem ipsum dolor sit amet consectecur<br />
                  adipisicing elit. Maxime ipsa nulla sed quis return<br />
                  armet natus quas neccessittatibys</p>
                <button className="btn_slider">Get started</button>

              </div>
            </Slider>
          </div>
          <div className="Second_slider">
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
              dots={true}
              arrows={false}
              autoplay = {true}
              speed= {1500}
              autoplaySpeed = {2000}
              pauseOnHover = {true}
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
