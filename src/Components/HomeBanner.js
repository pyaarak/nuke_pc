import React, { useState } from "react";
import "../Stylesheets/HomeBanner.scss";
import Video from "../Assets/video.mp4";
import animategif from "../Assets/Gif.gif";
import Ellipse510 from "../Assets/Ellipse510.png";
import Ellipse508 from "../Assets/Ellipse508.png";
import Ellipse from "../Assets/Ellipse590.png";
import Ellipse4 from "../Assets/Ellipse590.png";
import MainFont from "../Assets/Group_758.png";
import MainFont1 from "../Assets/Group_758_min.png";
import gif1 from "../Assets/back1.gif";

export default function HomeBanner(props) {
  const [ViewContent, setViewContent] = useState(1);
  const [videoEnd, setVideoEnd] = useState(false);
  const [animateend, setanimateEnd] = useState(false);
  const [contentview, setcontentView] = useState(0);
  const [Viewmore, setViewMore] = useState(0);
  const [PrebuildData, setPrebuildData] = useState([]);

  const myCallback = (e) => {
    setVideoEnd(true);
    console.log("liiililili");
    setTimeout(() => {
      setanimateEnd(true);
    }, 3500);
  };

  const func = (e) => {
    if (e.target.currentTime > e.target.duration - 3) {
      console.log("lililillilililili");
      setVideoEnd(true);
      setTimeout(() => {
        setanimateEnd(true);
      }, 3000);
    }
  };

  return (
    <div className="HomeBanner_Wrapper">
      <div className="HomeBanner_Inner_Wrapper">
        <div className="HomeBanner_Video_Container">
          {
            <video
              className={`Banner_0 ${videoEnd ? "animate" : ""}`}
              src={Video}
              style={animateend ? { display: "none" } : {}}
              controls={false}
              autoPlay={true}
              muted
              playsInline
              width={"100%"}
              onEnded={(e) => myCallback(e)}
              onTimeUpdate={(e) => func(e)}
              onAnimationEnd={(e) => {
                setanimateEnd(true);
              }}
            ></video>
          }
        </div>
        <div className="Banner_2">
          {videoEnd && (
            <>
              <div className="Left_Side">
                <img className="Mainfont" src={MainFont}></img>
                <p>
                  Crafting Your Ultimate Gaming Experience – Unleash Your Power!
                  Smart people work with Smart Systems. Customise your Gaming PC
                </p>
                <button
                  className="getQuote"
                  onClick={(e) => {
                    if (localStorage.getItem("loginDetails")) {
                      if (
                        JSON.parse(localStorage.getItem("loginDetails")).data
                          .Address.length > 0
                      ) {
                        props.setShowget(true);
                      } else {
                        props.setsignin(true);
                      }
                    } else {
                      props.setsignin(true);
                    }
                  }}
                >
                  Get Quote
                </button>
              </div>
              <div className="Right_side">
                <img className="Ellipseleft" src={Ellipse508}></img>
                <img className="Ellipseright" src={Ellipse510}></img>
                <img className="ellipse" src={Ellipse}></img>
                <img src={animategif}></img>
              </div>
            </>
          )}
        </div>

        <div className="Banner_3">
          {/* {videoEnd && ( */}
          <>
            <div className="Left_Side">
              <img className="Mainfont" src={MainFont1}></img>
              <p>
                Crafting Your Ultimate Gaming Experience – Unleash Your Power!
                Smart people work with Smart Systems. Customise your Gaming PC
              </p>
              <button
                className="getQuote"
                onClick={(e) => {
                  if (localStorage.getItem("loginDetails")) {
                    if (
                      JSON.parse(localStorage.getItem("loginDetails")).data
                        .Address.length > 0
                    ) {
                      props.setShowget(true);
                    } else {
                      props.setsignin(true);
                    }
                  } else {
                    props.setsignin(true);
                  }
                }}
              >
                Get Quote
              </button>
            </div>
            <div className="Right_side">
              {/* <img className="ellipse1" src={Ellipse4}></img> */}
              <img className="Ellipseleft" src={Ellipse508}></img>
              <img className="Ellipseright" src={Ellipse510}></img>
              {/* <img className="ellipse" src={Ellipse}></img> */}
              <img src={gif1}></img>
            </div>
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
