import React, { useDeferredValue, useEffect, useState } from "react";
import "../Stylesheets/GetQuote.scss";
import Prebuild from "../Assets/get.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Gaming, url } from "../Data/NavbarData";
import ec from "../Assets/ec.png";
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Righta from "../Assets/Gaming/righta.png";
import Lefta from "../Assets/Gaming/lefta.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grand from "../Assets/Gaming/gta.png";
import Reddeadcover from "../Assets/Gaming/red.png";
import pubg from "../Assets/Gaming/pub.png";
import Adobe from "../Assets/Gaming/adobe.png";
import Premier from "../Assets/Gaming/premier.png";
import Blender from "../Assets/Gaming/Blender.png";
import Davinci from "../Assets/Gaming/Davinci.png";
import Valorant from "../Assets/Gaming/vol.png";
import Ellipse510 from "../Assets/Ellipse510.png";
import Ellipse508 from "../Assets/Ellipse508.png";
import Ellipse from "../Assets/ellipse.png";
import { useDispatch, useSelector } from "react-redux";
import { setProductType } from "../Redux/Slice";
import axios from "axios";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

export default function GetQuote() {
  const [activeState, setActiveState] = useState(0);
  const [token, setToken] = useState("");
  const [Id, setId] =useState("");
  const addressId = 14;
  const [Range1, setRange1] = useState(70);
  const [Range2, setRange2] = useState(62);
  const [Range3, setRange3] = useState(50);
  const [Range4, setRange4] = useState(90);
  const [Budget, setBudget] = useState(1000);
  const [Original, setOriginal] = useState(1000);
  const [Remarks, setRemarks] = useState("");
  const [Domain, setDomain] = useState("");
  const [yes, setyes] = useState(0);
  const dispatch = useDispatch();
  const Product_Type = useSelector((state) => state.QuoteData.ProductType);
  const [Zoom, setZoom] = useState(true);

  useEffect(() => {
    if (Product_Type.includes("Engineering")) {
      setActiveState(8);
      setDomain("Engineering Works")
    } else if (Product_Type.includes("Data Science")) {
      setActiveState(9);
      setDomain("Data Science")
    } else if (Product_Type.includes("Gaming")) {
      setActiveState(1);
      setDomain("Casual Gaming")
    } else if (Product_Type.includes("Content")) {
      setActiveState(4);
      setDomain("Photo/Video Editing")
    }
  }, []);



  useEffect(() => {
    
    if (localStorage.getItem("loginDetails")) {
      const val = JSON.parse(localStorage.getItem("loginDetails"));
      setToken(`Bearer ${val.session.token.access}`);
      setId(val.data.UserData.id);
    }
  }, []);

  const handleResize=()=>{
    if(window.innerWidth < 1200){
      setZoom(false)
    }
    else{
      setZoom(true)
    }
  }

  window.addEventListener("resize",handleResize)

  const handleSubmit = () => {
    const form_data = new FormData();
    form_data.append("TicketStatus", 1);
    form_data.append("Active", 1);
    form_data.append("Product_usage_type", Product_Type);
    form_data.append("Domain", Domain);
    form_data.append("Budjet", Number(Original.replaceAll(",","")));
    form_data.append("Remarks", Remarks);
    form_data.append("UserId", Id);
    form_data.append(
      "Softwaretools",
      `{"Adobe":${Range1},"Premier":${Range4},"Photoshop":${Range3},"Davinci":${Range2}}`
    );
    form_data.append("addressId", addressId);
    axios({
      method: "post",
      url: url + "api/Create_New_Orders/",
      data: form_data,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (response.data.status.code == 208) {
        } else {
          window.location.href = "/config";
        }
      })
      .catch((error) => {
      });
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="right_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Righta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="left_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Lefta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };

  const CustomRightArrow1 = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="right_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Righta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };

  const CustomLeftArrow1 = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className="left_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Lefta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };

  const CustomRightArrow2 = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className="right_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Righta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };

  const CustomLeftArrow2 = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className="left_arrow"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img src={Lefta} width={"100%"} height={"100%"}></img>
      </button>
    );
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 700, min: 500 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };
  return (
    <div className="getquote_wrapper">
      <div className="getquote_inner_Wrapper">
        <div className="Domain">
          <div className="BaseUrl">
            <span onClick={e=>{window.location.href="/"}}>Home</span>
            <span>{`>`}</span>
            <span>Get Quote</span>
          </div>
          <div className="Main_Header">Get Quote</div>
          <div className="Sub_header">Choose Your Domain</div>
          <div className="Inner_Container">
            <div className={`config_Summary ${!Zoom && "active"}`}>
              <div className="config_inner_summary">
                <div className="header"><span>Configuration Summary</span><span onClick={e=>{setZoom(!Zoom)}}>{Zoom ? <CloseFullscreenIcon></CloseFullscreenIcon> : <ZoomOutMapIcon></ZoomOutMapIcon>}</span></div>
                <div className="inner">
                  <div className="domainname">
                    <p style={{ marginBottom: "10px" }}>Domain</p>
                    <div className="inner_domain">
                      <img src={Prebuild} width={"100%"} height={"100%"}></img>
                      <p>
                        {activeState == 1 && "Casual Gaming"}
                        {activeState == 2 && "E- Sports / Competitive Gaming"}
                        {activeState == 3 && "AAA Gaming"}
                        {activeState == 4 && "Photo / Video Editing"}
                        {activeState == 5 && "3D/VFX"}
                        {activeState == 6 &&
                          "Game Development / Real-Time Rendering"}
                        {activeState == 7 && "App/Web Development"}
                        {activeState == 8 && "Engineering Works"}
                        {activeState == 9 && "Data Science"}
                      </p>
                    </div>
                  </div>
                  {Product_Type.includes("Gaming") && (
                    <div className="domainname">
                      <p>Will you stream?</p>
                      <p className="state">
                        {yes == 0 && "Yes"}
                        {yes == 1 && "No"}
                      </p>
                    </div>
                  )}
                  <div className="domainname">
                    <p>Usage Level</p>
                    <p className="state">
                      <span>
                        {Product_Type.includes("Gaming")
                          ? "Grand theft auto"
                          : "Adobe"}
                      </span>
                      <span>{Range1 + "%"}</span>
                    </p>
                    <p className="state">
                      <span>
                        {Product_Type.includes("Gaming")
                          ? "Red dead cover"
                          : "Premier Pro"}
                      </span>
                      <span>{Range2 + "%"}</span>
                    </p>
                    <p className="state">
                      <span>
                        {Product_Type.includes("Gaming")
                          ? "Davinci"
                          : "Blender"}
                      </span>
                      <span>{Range3 + "%"}</span>
                    </p>
                    <p className="state">
                      <span>
                        {Product_Type.includes("Gaming")
                          ? "Valorant"
                          : "Davinci"}
                      </span>
                      <span>{Range4 + "%"}</span>
                    </p>
                  </div>
                  <div className="domainname">
                    <p>Budget</p>
                    <p className="state">
                      ₹ {Number(String(Original).replaceAll(",","")).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="domainname">
                    <p>Remarks</p>
                    <p className="state remarks">{Remarks}</p>
                  </div>
                  <div className="button">
                    <button onClick={e=>{handleSubmit(e)}}>
                      <p>Submit</p>
                      <p className="icon">
                        <ArrowForwardIcon></ArrowForwardIcon>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {Product_Type.includes("Gaming") ? (
              <div className="row">
                <div className="col-xl-9 col-lg-12 checklist">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 1 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(1);
                          setDomain("Casual Gaming")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 1 && "active"
                            }`}
                          >
                            {activeState == 1 && <p className="color"></p>}
                          </p>
                          {/* <p className="Sub_Header"></p> */}
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow />}
                              customLeftArrow={<CustomLeftArrow />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.casual.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">Casual Gaming</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 2 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(2);
                          setDomain("E- Sports / Competitive Gaming")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          {/* <p className="Sub_Header"></p> */}
                          <p
                            className={`Sub_Header ${
                              activeState == 2 && "active"
                            }`}
                          >
                            {activeState == 2 && <p className="color"></p>}
                          </p>
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow1 />}
                              customLeftArrow={<CustomLeftArrow1 />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.esport.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">
                            E- Sports / Competitive Gaming
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 3 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(3);
                          setDomain("AAA Gaming")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 3 && "active"
                            }`}
                          >
                            {activeState == 3 && <p className="color"></p>}
                          </p>
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              customRightArrow={<CustomRightArrow2 />}
                              customLeftArrow={<CustomLeftArrow2 />}
                              containerClass="carousel-container"
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.aaa.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">AAA Gaming</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : Product_Type.includes("Content") ? (
              <div className="row">
                <div className="col-xl-9 col-lg-12 checklist">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 4 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(4);
                          setDomain("Photo/Video Editing")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 4 && "active"
                            }`}
                          >
                            {activeState == 4 && <p className="color"></p>}
                          </p>
                          {/* <p className="Sub_Header"></p> */}
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow />}
                              customLeftArrow={<CustomLeftArrow />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.casual.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">Photo/Video Editing</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 5 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(5);
                          setDomain("3D/VFX")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          {/* <p className="Sub_Header"></p> */}
                          <p
                            className={`Sub_Header ${
                              activeState == 5 && "active"
                            }`}
                          >
                            {activeState == 5 && <p className="color"></p>}
                          </p>
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow1 />}
                              customLeftArrow={<CustomLeftArrow1 />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.esport.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">3D/VFX</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 6 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(6);
                          setDomain("Game Development/Real-Time Rendering")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 6 && "active"
                            }`}
                          >
                            {activeState == 6 && <p className="color"></p>}
                          </p>
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              customRightArrow={<CustomRightArrow2 />}
                              customLeftArrow={<CustomLeftArrow2 />}
                              containerClass="carousel-container"
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.aaa.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">
                            Game Development/Real-Time Rendering
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 7 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(7);
                          setDomain("App/Web Development")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 7 && "active"
                            }`}
                          >
                            {activeState == 7 && <p className="color"></p>}
                          </p>
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              customRightArrow={<CustomRightArrow2 />}
                              customLeftArrow={<CustomLeftArrow2 />}
                              containerClass="carousel-container"
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.aaa.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">App/Web Development</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : Product_Type.includes("Engineering") ? (
              <div className="row">
                <div className="col-xl-9 col-lg-12 checklist">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 8 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(8);
                          setDomain("Engineering Works")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 8 && "active"
                            }`}
                          >
                            {activeState == 8 && <p className="color"></p>}
                          </p>
                          {/* <p className="Sub_Header"></p> */}
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow />}
                              customLeftArrow={<CustomLeftArrow />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.casual.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">Engineering Works</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-xl-9 col-lg-12 checklist">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div
                        className={`OverAll-Card ${
                          activeState == 9 && "active"
                        }`}
                        onClick={(e) => {
                          setActiveState(9);
                          setDomain("Data Science")
                        }}
                      >
                        <div className="Card_Header">
                          <p className="Header1"></p>
                          <p
                            className={`Sub_Header ${
                              activeState == 9 && "active"
                            }`}
                          >
                            {activeState == 9 && <p className="color"></p>}
                          </p>
                          {/* <p className="Sub_Header"></p> */}
                        </div>
                        <div className="card_body">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <img src={ec} width={"100%"} height={"100%"}></img>
                        </div>
                        <div className="Card_footer">
                          <div className="filter">
                            <Carousel
                              swipeable={true}
                              draggable={false}
                              showDots={false}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              infinite={true}
                              //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              customRightArrow={<CustomRightArrow />}
                              customLeftArrow={<CustomLeftArrow />}
                              // removeArrowOnDeviceType={[
                              //   "tablet",
                              //   "mobile",
                              //   "desktop",
                              //   "superLargeDesktop",
                              // ]}
                              //   deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {Gaming.casual.map((ele) => {
                                return (
                                  <div className="Gaming_Wrapper">
                                    <img
                                      src={ele}
                                      width={"100%"}
                                      height={"100%"}
                                    ></img>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="content">Data Science</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {Product_Type.includes("Gaming") && (
          <div className="willstream">
            <div className="willstream_inner">
              <img src={Ellipse} width={"100%"} height={"100%"}></img>
              <img src={Ellipse508} width={"100%"} height={"100%"}></img>
              <img src={Ellipse510} width={"100%"} height={"100%"}></img>
              <div className="original_card">
                <div className="row">
                  <div className="col-md-9">
                    <p className="main_font">Will you stream on this pc?</p>
                    <p className="sub_font">
                      <span
                        className={`${yes == 0 && "active"}`}
                        onClick={(e) => {
                          setyes(0);
                        }}
                      >
                        Yes
                      </span>
                      <span
                        className={`${yes == 1 && "active"}`}
                        onClick={(e) => {
                          setyes(1);
                        }}
                      >
                        No
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="SoftwareUsage">
          <div className="row">
            <div className="col-md-9">
              <p className="header">Software Usage Level</p>
              {Product_Type.includes("Gaming") ? (
                <div className="Software_inner_Usage">
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Grand Theft Auto</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider one`}
                          type={"range"}
                          min={0}
                          max={100}
                          value={Range1}
                          orient="vertical"
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #457118 ${Range1}%, #EBEBEB ${Range1}%)`,
                          }}
                          onChange={(el) => {
                            setRange1(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #457118 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range1 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Grand} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Reddeadcover</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider two`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range2}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #EE0000 ${Range2}%, #EBEBEB ${Range2}%)`,
                          }}
                          onChange={(el) => {
                            setRange2(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #EE0000 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range2 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Reddeadcover} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>PUBG</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider three`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range3}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #D57E18 ${Range3}%, #EBEBEB ${Range3}%)`,
                          }}
                          onChange={(el) => {
                            setRange3(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #D57E18 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range3 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={pubg} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Valorant</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider four`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range4}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #FF4655 ${Range4}%, #EBEBEB ${Range4}%)`,
                          }}
                          onChange={(el) => {
                            setRange4(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #FF4655 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range4 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Valorant} width={40} height={40}></img>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="Software_inner_Usage">
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Grand Theft Auto</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider five`}
                          type={"range"}
                          min={0}
                          max={100}
                          value={Range1}
                          orient="vertical"
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #00005B ${Range1}%, #EBEBEB ${Range1}%)`,
                          }}
                          onChange={(el) => {
                            setRange1(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #00005B ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range1 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Adobe} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Reddeadcover</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider six`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range2}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #2D083C ${Range2}%, #EBEBEB ${Range2}%)`,
                          }}
                          onChange={(el) => {
                            setRange2(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #2D083C ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range2 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Premier} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>PUBG</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider seven`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range3}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #EB7700 ${Range3}%, #EBEBEB ${Range3}%)`,
                          }}
                          onChange={(el) => {
                            setRange3(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #EB7700 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range3 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Blender} width={40} height={40}></img>
                    </p>
                  </div>
                  <div className="software_inner_test">
                    <p className="slider_Content">
                      {/* <p>Valorant</p> */}
                      <div className="Input_filed">
                        <input
                          className={`slider four`}
                          type={"range"}
                          min={0}
                          max={100}
                          orient="vertical"
                          value={Range4}
                          step={1}
                          style={{
                            background: `linear-gradient(90deg, #FF4655 ${Range4}%, #EBEBEB ${Range4}%)`,
                          }}
                          onChange={(el) => {
                            setRange4(el.target.value);
                            el.target.style.background = `linear-gradient(90deg, #FF4655 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                          }}
                        ></input>
                        <p>{Range4 + "%"}</p>
                      </div>
                    </p>
                    <p className="Img_Content">
                      <img src={Davinci} width={40} height={40}></img>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="Budget">
          <div className="Budget_Inner_Wrapper">
            <p className="Main_Header">Budget & Remarks</p>
            <p className="Sub_header">Set Your Budget</p>
            <div className="Input_filed">
              <div className="Text-field">
                <p>₹ </p>
                <input
                  type="text"
                  value={Original}
                  onChange={(e) => {
                    setOriginal(Number(e.target.value.replaceAll(",","")).toLocaleString('en-IN'));
                  }}
                ></input>
                <span>in Approx</span>
              </div>
              <input
                className={`slider`}
                type={"range"}
                min={0}
                max={100}
                value={Budget}
                step={1}
                style={{
                  borderRadius: "20px",
                  marginRight: "20px",
                  background: `linear-gradient(90deg, #4c9eff ${Budget}%, #EBEBEB ${Budget}%)`,
                }}
                onChange={(el) => {
                  setBudget(el.target.value);
                  setOriginal(Number(el.target.value * 5000).toLocaleString("en-IN"));
                  el.target.style.background = `linear-gradient(90deg, #4c9eff ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                }}
              ></input>
              <p className="content">
                <span>₹ 0</span>
                <span>₹ {Number(500000).toLocaleString('en-IN')}</span>
              </p>
              {/* <span>{Original + "/-"}</span> */}
            </div>
            <div className="Text_filed">
              <p>Remarks</p>
              <textarea
                placeholder="Enter your Remarks"
                value={Remarks}
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
              ></textarea>
            </div>
            <button onClick={e=>{handleSubmit(e)}}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
