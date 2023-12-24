import React from "react";
import "../Stylesheets/Footer.scss";
import Logo from "../Assets/image_7.png";
import icon from '../Assets/icon.png';
import icon1 from '../Assets/icon2.png';
import fb1 from '../Assets/fb.png';
import fb2 from '../Assets/you.png';
import fb3 from '../Assets/inst.png';
import fb4 from '../Assets/twit.png'; 

export default function Footer(props) {
  return (
    <div className="Footer_Wrapper">
      <div className="Footer_Inner_Wrapper">
        <div className="row ">
          <div className="col-md-4 part_content">
            <img src={Logo} className="log"></img>
            <p className="p_cont">
              Crafting Your Ultimate Gaming Experience – Unleash Your Power!
              Smart people work with Smart Systems. Customise your Gaming PC.
            </p>
          </div>
          <div className="col-md-3 part_content active">
            <p><a>Prebuild</a></p>
            <p><a>About us</a></p>
            <p><a>Privacy Policy</a></p>
            <p><a>Terms of Service</a></p>
          </div>
          {/* <div className="col-md-3 part_content"></div> */}
          <div className="col-md-5 part_content">
            <p className="head">Reach to us</p>
            <p>Lorem  ipsum dolor sit constectutor</p>
            <div className="part_content1">
                <p className="part_inner_content"><img src={icon}></img><p><p className="m_cont">For Sales Queries</p><p className="s_cont">sales@a2dfac.com</p></p></p>
                <p className="part_inner_content"><img src={icon}></img><p><p className="m_cont">For Information</p><p className="s_cont">sales@a2dfac.com</p></p></p>
                <p className="part_inner_content"><img src={icon}></img><p><p className="m_cont">For Instant Replies</p><p className="s_cont">+12 345 6789 0</p></p></p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="full_width">
            <p className="a_content">© 2023, A2D PC FActory. All Rights Reserved.</p>
            <p>
                <img src={fb1}></img>
                <img src={fb2}></img>
                <img src={fb3}></img>
                <img src={fb4}></img>
            </p>
        </div>
      </div>
    </div>
  );
}
