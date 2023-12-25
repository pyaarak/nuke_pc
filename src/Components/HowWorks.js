import React, { useEffect, useState } from "react";
import "../Stylesheets/HowWorks.scss";
import h1 from "../Assets/h1.png";
import h2 from "../Assets/h2.png";
import h3 from "../Assets/h3.png";
import Elip from "../Assets/HwEllipse.png";
import Elip1 from "../Assets/HwEllipse.png";
import Ellipse510 from '../Assets/Ellipse510.png';
import Ellipse508 from '../Assets/Ellipse508.png';
import Ellipse from '../Assets/Ellipse590.png';

export default function HowWorks(props) {
  const [State, setState] = useState(1);
  const [MobileState, setMobileState] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setMobileState(true);
    } else {
      setMobileState(false);
    }
  };
  useEffect(() => {
    handleResize();
  }, []);
  window.addEventListener("resize", handleResize);
  return (
    <div className="HowWorks_Wrapper">
      <div className="HowWorks_Inner_Wrapper">
        <img src={Ellipse510} className="o1"></img>
        <img src={Ellipse508} className="o2"></img>
        <img src={Ellipse} className="o3"></img>
        <div className="Header">
          <p className="Main_Header" style={{ margin: "0" }}>
            How it works?
          </p>
        </div>
        <div className="HowWorks_Square_Wrapper">
          {!MobileState && (
            <>
              <img
                src={h1}
                onClick={(e) => {
                  setState(1);
                }}
                className="img_1"
              ></img>
              <p className="two_images">
                <img
                  src={h2}
                  onClick={(e) => {
                    setState(2);
                  }}
                  className="img_1"
                ></img>
                <img
                  className="img_1"
                  onClick={(e) => {
                    setState(3);
                  }}
                  src={h3}
                ></img>
              </p>
            </>
          )}
          {MobileState && (
            <p className="two_images">
              <img
                src={h2}
                onClick={(e) => {
                  setState(2);
                }}
                className="img_1"
              ></img>
              <img
                src={h1}
                onClick={(e) => {
                  setState(1);
                }}
                className="img_1"
              ></img>
              <img
                className="img_1"
                onClick={(e) => {
                  setState(3);
                }}
                src={h3}
              ></img>
            </p>
          )}
          <p className="three_container">
            <img src={Elip1}></img>
            <img src={Elip}></img>
          </p>
          <div className="Semicircle_Wrapper">
            <p className="header">
              Perfection lies in the <span>details</span>
            </p>
            <p className="content">
              When it comes to achieving excellence, meticulous attention to
              detail is paramount. For PC builders and users alike, delving into
              the finer aspects ensures that their systems operate at peak
              performance, guaranteeing the desired levels of reliability and
              security. Whether embarking on a custom PC build or utilizing a
              pre-built system, the secret to optimal outcomes lies in the
              devotion to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
