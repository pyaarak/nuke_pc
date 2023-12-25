import React, { useEffect } from "react";
import "../Stylesheets/PrebuildComponent.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Ecllipse from "../Assets/Ellipse510.png";
import { useDispatch, useSelector } from "react-redux";
import { PrebuildData } from "../Redux/Slice";
import Prebuild from "../Assets/image_31.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ellipse510 from "../Assets/Ellipse510.png";
import Ellipse508 from "../Assets/Ellipse508.png";
import Ellipse from "../Assets/Ellipse590.png";
import Grand from "../Assets/Gaming/gta.png";
import Reddeadcover from "../Assets/Gaming/red.png";
import pubg from "../Assets/Gaming/pub.png";
import Adobe from "../Assets/Gaming/adobe.png";
import Premier from "../Assets/Gaming/premier.png";
import Blender from "../Assets/Gaming/Blender.png";
import Davinci from "../Assets/Gaming/Davinci.png";
import Valorant from "../Assets/Gaming/vol.png";

export default function PrebuildComponent(props) {
  const dispatch = useDispatch();
  const PrebuildHomeData = useSelector(
    (state) => state.PrebuildHome.PrebuildData.data
  );
  useEffect(() => {
    dispatch(PrebuildData());
  }, []);
  // console.log(PrebuildHomeData)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 700, min: 500 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="PrebuildComponent_Wrapper">
      {/* <img src={Ellipse510} className="o1"></img> */}
      <img src={Ellipse508} className="o2"></img>
      {/* <img src={Ellipse} className="o3"></img> */}
      {/* <img className="inner_img" src={Ecllipse}></img> */}
      <div className="PrebuildComponent_Inner_Wrapper">
        <div className="Header">
          <p className="Main_Header">
            Pre-Builds for <span>you</span>
          </p>
          <p className="Sub-content">
            Everything comes up with built-in and ready-to-go, you can take home
            a high-tech PC. "Pick & Pack" components with warranty, high-quality
            original components, No limit in terms of configuration like branded
            PCs and it is feasible to upgrade down the line. Above all there are
            continuous technical support services from the Nuke-PC engineering
            team. In addition, get our support for your software support.
          </p>
          <button>
            <p>View More</p>
            <p className="icon">
              <ArrowForwardIcon></ArrowForwardIcon>
            </p>
          </button>
        </div>
        <div className="Pc_table">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {PrebuildHomeData != undefined &&
              PrebuildHomeData.data.length > 0 &&
              PrebuildHomeData.data.map((ele) => {
                return (
                  <div className="OverAll-Card">
                    <div className="Card_Header">
                      <p className="Header1">{ele.Product_usage_type} - </p>
                      <p className="Sub_Header">{ele.Domain}</p>
                    </div>
                    <div className="card_body">
                      <img src={Prebuild} width={"100%"} height={"100%"}></img>
                    </div>
                    <div className="Card_footer">
                      <p className="color">Starts</p>
                      <p className="color1">
                        <span style={{color:"#E4A025"}}>{"₹ "}</span>{Number(ele.Budjet).toLocaleString("en-IN")}
                      </p>
                      <p className="last_sec"><span><img className={`${ele.Product_usage_type.includes("Gaming") ? "a1" :"a2"}`} src={ele.Product_usage_type.includes("Gaming") ? Reddeadcover : Davinci}></img><img className={`${ele.Product_usage_type.includes("Gaming") ? "a1" :"a2"}`} src={ele.Product_usage_type.includes("Gaming") ? Valorant : Adobe}></img></span><span className="arrow"><ArrowForwardIcon></ArrowForwardIcon></span></p>
                    </div>
                  </div>
                );
              })}
            {/* {PrebuildHomeData != undefined &&
            PrebuildHomeData.data.length > 0 &&
            PrebuildHomeData.data.map((ele) => {
              return (
                <div className="OverAll-Card">
                  <div className="Card_Header">
                    <p className="Header1">{ele.Product_usage_type} - </p>
                    <p className="Sub_Header">{ele.Domain}</p>
                  </div>
                  <div className="card_body">
                    <img src={Prebuild} width={"100%"} height={"100%"}></img>
                  </div>
                  <div className="Card_footer">
                    <p className="color">Starts</p>
                    <p className="color1">{Number(ele.Budjet).toLocaleString('en-IN',{style:"currency",currency:"INR"})}</p>
                  </div>
                </div>
              );
            })}
             {PrebuildHomeData != undefined &&
            PrebuildHomeData.data.length > 0 &&
            PrebuildHomeData.data.map((ele) => {
              return (
                <div className="OverAll-Card">
                  <div className="Card_Header">
                    <p className="Header1">{ele.Product_usage_type} - </p>
                    <p className="Sub_Header">{ele.Domain}</p>
                  </div>
                  <div className="card_body">
                    <img src={Prebuild} width={"100%"} height={"100%"}></img>
                  </div>
                  <div className="Card_footer">
                    <p className="color">Starts</p>
                    <p className="color1">{Number(ele.Budjet).toLocaleString('en-IN',{style:"currency",currency:"INR"})}</p>
                  </div>
                </div>
              );
            })}
             {PrebuildHomeData != undefined &&
            PrebuildHomeData.data.length > 0 &&
            PrebuildHomeData.data.map((ele) => {
              return (
                <div className="OverAll-Card">
                  <div className="Card_Header">
                    <p className="Header1">{ele.Product_usage_type} - </p>
                    <p className="Sub_Header">{ele.Domain}</p>
                  </div>
                  <div className="card_body">
                    <img src={Prebuild} width={"100%"} height={"100%"}></img>
                  </div>
                  <div className="Card_footer">
                    <p className="color">Starts</p>
                    <p className="color1">{Number(ele.Budjet).toLocaleString('en-IN',{style:"currency",currency:"INR"})}</p>
                  </div>
                </div>
              );
            })} */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
