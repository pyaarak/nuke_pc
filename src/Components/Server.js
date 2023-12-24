import React, { useEffect, useState } from "react";
import "../Stylesheets/Server.scss";
import PC_Image from "../Assets/image44.png";
import DownArrow from '../Assets/Group_781.png'
import { useInViewport } from "react-in-viewport";


export default function Server(props) {
  const countUpRef1 = React.useRef(null);
  const [State, setState] = useState(false);
  const { inViewport, enterCount, leaveCount } = useInViewport(countUpRef1);

  useEffect(() => {
    if (enterCount == 1) {
      setState(true);
    }
  }, [enterCount]);
  return (
    <div className="Server_Wrapper">
        {/* <img src={DownArrow} className="arrow_image"></img> */}
      <div className="CustomeLoop_Wrapper">
        <div className="Container_Content" ref={countUpRef1}>
          <div className={`Content ${State && "animate"}`}>
            <div>
            <p className="Main_Header">Server<span></span></p>
            <p>Sample Text : When it comes to achieving excellence, meticulous
            attention to detail is paramount. For PC builders and users alike,
            delving into the finer aspects ensures that their systems operate at
            peak performance, guaranteeing the desired levels of reliability and
            security. Whether embarking on a custom PC build or utilizing a
            pre-built system, the secret to optimal outcomes lies in the
            devotion to detail.</p>
            </div>
          </div>
          <div className={`Img_Content ${State && "animate"}`}>
            <img src={PC_Image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
