import React from "react";
import './Footer.css';
import image2 from '../../images/80x80.gif';
function Footer() {
  return (
    <div className="footer_background">
      <div className="main_footer">
        <div className="footer_nav">
          <h3 className="h3">Footer Navigation</h3>
          <hr />

          <div className="li">Home Page</div>
          <div className="li">Our Services</div>
          <div className="li">Meet the Team</div>
          <div className="li">Blog</div>
          <div className="li">Contact Us</div>
          <div className="li">Gallery</div>
          <div className="li">Portfolio</div>
          <div className="li">Online Shop</div>

        </div>
        <div className="footer_gallery">
          <h3 className="h3">Latest Gallery</h3>
          <hr />
          <div>
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
          </div>
          <div>
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
          </div>
          <div>
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
            <img src={image2} className="image2" />
          </div>
        </div>
        <div className="Twitter">
          <h3 className="h3">From Twitter</h3>
          <hr />
          <p className="p"><u className="u"><b>@name RT</b></u> <u className="u">@name</u> Donec suscipit<br /> vehicula turpis sed lutpat Quisque vitae<br /> quam neque. <u className="u">about 9 hours ago</u></p>
          <p className="p"><u className="u"><b>@name RT</b></u> <u className="u">@name</u> Donec suscipit<br /> vehicula turpis sed lutpat Quisque vitae<br /> quam neque. <u className="u">about 9 hours ago</u></p>
          <p className="p"><u className="u"><b>@name RT</b></u> <u className="u">@name</u> Donec suscipit<br /> vehicula turpis sed lutpat Quisque vitae<br /> quam neque. <u className="u">about 9 hours ago</u></p>
          <p className="p"><u className="u"><b>@name RT</b></u> <u className="u">@name</u> Donec suscipit<br /> vehicula turpis sed lutpat Quisque vitae<br /> quam neque. <u className="u">about 9 hours ago</u></p>
        </div>
        <div className="contact_us">
          <h3 className="h3">Contact Us</h3>
          <hr />
          <p className="p">Name</p>
          <input className="input"/>
          <p className="p">Email</p>
          <input className="input"/>
          <div>
          <textarea></textarea>
          </div>
          <button id="submit_btn">Submit</button>
          <button id="reset_btn">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;