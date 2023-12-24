import React, { useEffect, useState } from "react";
import "../Stylesheets/CustomLoop.scss";
import PC_Image from "../Assets/image44.png";
import DownArrow from "../Assets/Group_781.png";
import { useInViewport } from "react-in-viewport";

export default function CustomLoop(props) {
  const countUpRef1 = React.useRef(null);
  const [State, setState] = useState(false);
  const { inViewport, enterCount, leaveCount } = useInViewport(countUpRef1);
  const handleClick = (e) => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    if (enterCount == 1) {
      setState(true);
    }
  }, [enterCount]);

  return (
    <div className="CustomLoop_Wrapper">
      <img
        src={DownArrow}
        className="arrow_image"
        onClick={(e) => {
          handleClick(e);
        }}
      ></img>
      <div className="CustomeLoop_Wrapper">
        <div className="Container_Content" ref={countUpRef1}>
          <div className={`Img_Content ${State && "animate"}`}>
            <img src={PC_Image}></img>
          </div>
          <div className={`Content ${State && "animate"}`}>
            <div>
              <p className="Main_Header">
                Custom <span>Loop</span>
              </p>
              <p>
                Sample Text : When it comes to achieving excellence, meticulous
                attention to detail is paramount. For PC builders and users
                alike, delving into the finer aspects ensures that their systems
                operate at peak performance, guaranteeing the desired levels of
                reliability and security. Whether embarking on a custom PC build
                or utilizing a pre-built system, the secret to optimal outcomes
                lies in the devotion to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
