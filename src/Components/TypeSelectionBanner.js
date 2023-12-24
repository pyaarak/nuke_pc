import React, { useEffect, useState } from "react";
import "../Stylesheets/TypeSelectionBanner.scss";
import Firstimg from "../Assets/Rectangle_10965.png";
import Secondimg from "../Assets/Rectangle_10966.png";
import Thirdimg from "../Assets/Rectangle_10967.png";
import Fourthimg from "../Assets/Rectangle_10968.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Line from "../Assets/linemediator.png";
import Compass from "../Assets/compass.png";
import file from "../Assets/file.png";
import game from "../Assets/game.png";
import tv from "../Assets/tv.png";
import firstmove from "../Assets/firstview.png";
import SeconView from "../Assets/Secondview.png";
import thirdView from "../Assets/thirdview.png";
import fourthview from "../Assets/fourthview.png";
import { useDispatch } from "react-redux";
import { setProductType } from "../Redux/Slice";

export default function TypeSelectionBanner(props) {
  const [MouseMove, setMouseMove] = useState(0);
  const [MouseMove1, setMouseMove1] = useState(0);
  const [MouseMove2, setMouseMove2] = useState(0);
  const [MouseMove3, setMouseMove3] = useState(0);
  const dispatch=useDispatch();

  // const handleResize=()=>{
  //   var browserZoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
  //   console.log(browserZoomLevel, (window.innerHeight), window.innerWidth)
  //   var doc = document.getElementById("l1")
  //   let zoom = (window.innerWidth / 1520) * 100
  //   console.log(Math.round(zoom))
  //   doc.style.zoom = `${Math.round(zoom)}%`
  // }
  // useEffect(()=>{
  //   handleResize()
  // },[])

  // window.addEventListener('resize', handleResize)
  return (
    <div className="TypeSelectionBanner_Wrapper" id="l1">
      <div className="TypeSelectionBanner_Inner_Wrapper">
        <div className="TypeSelectionCoverImage"></div>
        <div className="TypeSelection_BackGround_Banner">
          <p
            style={{
              position: "relative",
              zIndex: 999,
              color: "#fff",
              margin: 0,
              marginBottom: "10px",
            }}
          >
            Scroll Down
          </p>
          <p style={{ position: "relative", color: "#fff", marginTop: "0px" }}>
            <ArrowDownwardIcon></ArrowDownwardIcon>
          </p>
        </div>
        <div className="Display_img">
          <div
            onMouseOver={(e) => {
              setMouseMove(1);
              setMouseMove1(0);
              setMouseMove2(0);
              setMouseMove3(0);
            }}
            onMouseLeave={(e) => {
              setMouseMove(0);
            }}
            className={`${MouseMove == 1 ? "move" : "move1"}`}
            onClick={e=>{dispatch(setProductType("Gaming/Streaming"));window.location.href="/getquote"}}
          >
            <img src={Firstimg}></img>
            <p className="inner">
              <img src={game}></img>
              <p>
                Gaming / <p>Streaming</p>
              </p>
              <img className="line" src={Line}></img>
            </p>
          </div>
          <div
            onMouseOver={(e) => {
              setMouseMove1(1);
              setMouseMove(0);
              setMouseMove2(0);
              setMouseMove3(0);
            }}
            onMouseLeave={(e) => {
              setMouseMove1(0);
            }}
            className={`${MouseMove1 == 1 ? "move" : "move1"}`}
            onClick={e=>{dispatch(setProductType("Content Creation"));window.location.href="/getquote"}}
          >
            <img src={Secondimg}></img>
            <p className="inner">
              <img src={tv}></img>
              <p>
                Content <p>Creation</p>
              </p>
              <img className="line" src={Line}></img>
            </p>
          </div>
          <div
            onMouseOver={(e) => {
              setMouseMove2(1);
              setMouseMove1(0);
              setMouseMove(0);
              setMouseMove3(0);
            }}
            onMouseLeave={(e) => {
              setMouseMove2(0);
            }}
            className={`${MouseMove2 == 1 ? "move" : "move1"}`}
            onClick={e=>{dispatch(setProductType("Engineering Works"));window.location.href="/getquote"}}
          >
            <img src={Thirdimg}></img>
            <p className="inner">
              <img src={Compass}></img>
              <p>
                Engineering <p>Wroks</p>
              </p>
              <img className="line" src={Line}></img>
            </p>
          </div>
          <div
            onMouseOver={(e) => {
              setMouseMove3(1);
              setMouseMove(0);
              setMouseMove1(0);
              setMouseMove2(0);
            }}
            onMouseLeave={(e) => {
              setMouseMove3(0);
            }}
            className={`${MouseMove3 == 1 ? "move" : "move1"}`}
            onClick={e=>{dispatch(setProductType("Data Science and Others"));window.location.href="/getquote"}}
          >
            <img src={Fourthimg}></img>
            <p className="inner">
              <img src={file}></img>
              <p>
                Data Science <p>and others</p>
              </p>
              <img className="line" src={Line}></img>
            </p>
          </div>
        </div>
        <div className="Display_img1">
          <div className="TypeSelection_BackGround_Banner1">
            <p
              style={{
                position: "relative",
                zIndex: 999,
                color: "#fff",
                margin: 0,
                marginBottom: "10px",
              }}
            >
              Scroll Down
            </p>
            <p
              style={{ position: "relative", color: "#fff", marginTop: "0px" }}
            >
              <ArrowDownwardIcon></ArrowDownwardIcon>
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 red" onClick={e=>{dispatch(setProductType("Gaming/Streaming"));window.location.href="/getquote"}}>
              <img src={firstmove}></img>
              <p className="inner">
                <img src={game}></img>
                <p>
                  Gaming / <p>Streaming</p>
                </p>
                <img className="line" src={Line}></img>
              </p>
            </div>
            <div className="col-md-6 red" onClick={e=>{dispatch(setProductType("Content Creation"));window.location.href="/getquote"}}>
              <img src={SeconView}></img>
              <p className="inner">
                <img src={tv}></img>
                <p>
                  Content <p>Creation</p>
                </p>
                <img className="line" src={Line}></img>
              </p>
            </div>
            <div className="col-md-6 red" onClick={e=>{dispatch(setProductType("Engineering Works"));window.location.href="/getquote"}}>
              <img src={thirdView}></img>
              <p className="inner">
                <img src={Compass}></img>
                <p>
                  Engineering <p>Wroks</p>
                </p>
                <img className="line" src={Line}></img>
              </p>
            </div>
            <div className="col-md-6 red" onClick={e=>{dispatch(setProductType("Data Science and Others"));window.location.href="/getquote"}}>
              <img src={fourthview}></img>
              <p className="inner">
                <img src={file}></img>
                <p>
                  Data Science <p>and others</p>
                </p>
                <img className="line" src={Line}></img>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
