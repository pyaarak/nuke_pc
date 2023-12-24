import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../Data/NavbarData";
import "../Stylesheets/MyConfig.scss";
import Prebuild from "../Assets/get.png";
import Grand from "../Assets/Gaming/gta.png";
import Reddeadcover from "../Assets/Gaming/red.png";
import pubg from "../Assets/Gaming/pub.png";
import Adobe from "../Assets/Gaming/adobe.png";
import Premier from "../Assets/Gaming/premier.png";
import Blender from "../Assets/Gaming/Blender.png";
import Davinci from "../Assets/Gaming/Davinci.png";
import Valorant from "../Assets/Gaming/vol.png";
import { useDispatch, useSelector } from "react-redux";
import { setPcviewindex } from "../Redux/Slice";

export default function MyConfig() {
  const [token, setToken] = useState();
  const [Id, setId] = useState();
  const [Data, setData] = useState();
  const [whole, setWhole] = useState(34);
  const [viewContent, setViewContent] = useState(0);
  const dispatch=useDispatch();

  useEffect(() => { 
    if (localStorage.getItem("loginDetails")) {
      const val = JSON.parse(localStorage.getItem("loginDetails"));
      setToken(`Bearer ${val.session.token.access}`);
      setId(val.data.UserData.id);
      axios({
        method: "get",
        url:
          url +
          "api/Get_Specific_UserConfigurationTicket/" +
          val.data.UserData.id +
          "/1",
        headers: { Authorization: "Bearer " + val.session.token.access },
      }).then((response) => {
        console.log(response);
        setData(response.data.data.data);
      });
    }
  }, []);


  return (
    <div className="myconfig_wrapper">
      <div className="myconfig_inner_wrapper">
        <div className="Inner_config_Content">
          <div className="BaseUrl">
            <span onClick={e=>{window.location.href="/"}}>Home</span>
            <span>{`>`}</span>
            <span>My Configuration</span>
          </div>
          <div className="Main_Header">My Configuration</div>
          <div className="configs">
            {Data != undefined &&
              Data.length > 0 &&
              Data.map((ele) => {
                return (
                  <div
                    className={`Config_Details ${
                      viewContent == ele.id && "active"
                    }`}
                    onClick={(e) => {
                      if (viewContent == ele.id) {
                        setViewContent(0);
                      } else {
                        if(ele.TicketStatus >=2)
                        {
                          setViewContent(ele.id);
                          dispatch(setPcviewindex(ele.id))
                          window.location.href="/pcdetails";
                        }
                        else{
                          setViewContent(ele.id);
                        }
                      }
                    }}
                  >
                    <div className="row Config_Details_inner">
                      <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="purpose">
                        <p>Purpose</p>
                        <p className="content">{ele.Product_usage_type}</p>
                      </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="purpose">
                        <p>Domain</p>
                        <div className="inner_domain">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          <p>{ele.Domain}</p>
                        </div>
                      </div>
                      </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="purpose">
                        <p>Budget</p>
                        <p className="content">
                          {Number(ele.Budjet).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </p>
                      </div>
                     </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="status">
                        <p>
                          <span>Status</span>
                          <span>
                            {ele.TicketStatus == 1 && "New Enquiry"}
                            {ele.TicketStatus == 2 && "Quote Ready"}
                            {ele.TicketStatus == 3 && "Changes Asked"}
                            {ele.TicketStatus == 4 && "Order Confirmed"}
                            {ele.TicketStatus == 5 && "Under Assembly"}
                            {ele.TicketStatus == 6 && "Build Done"}
                            {ele.TicketStatus == 7 && "Under Testing"}
                            {ele.TicketStatus == 8 && "Ready To Dispatch"}
                            {ele.TicketStatus == 9 && "In Transit"}
                            {ele.TicketStatus == 10 && "Delivered"}
                          </span>
                        </p>
                      </div>
                      </div>
                    </div>
                    <div className="Divider">
                      <div className="Slider_Work1">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: `${ele.TicketStatus == 1 ? 0 : ele.TicketStatus == 2 ? 16 : ele.TicketStatus == 3 ? 16 : ele.TicketStatus == 4 ? 20 : ele.TicketStatus == 5 ? 32 : ele.TicketStatus == 6 ? 42 : ele.TicketStatus == 7 ? 52 : ele.TicketStatus == 8 ? 64 : ele.TicketStatus == 9 ? 78 : 100}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div className="name1">
                            <p className={`${ele.TicketStatus >= 1 && "active"}`}></p>
                            <p className={`${ele.TicketStatus >= 5 && "active"}`}></p>
                            <p className={`${ele.TicketStatus >= 8 && "active"}`}></p>
                            <p className={`${ele.TicketStatus >= 10 && "active"}`}></p>
                          </div>
                        </div>
                        <div className="name">
                          <p>New Enquiry</p>
                          <p>In Build</p>
                          <p>Out for Delivery</p>
                          <p>Delivered</p>
                        </div>
                        <div></div>
                      </div>
                      <div className="row Devider1">
                        <div className="col-lg-6 Divider_Content">
                          <p className="cont">Software Usage Level</p>
                          {ele.Product_usage_type.includes("Gaming") ? (
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
                                      value={ele.Softwaretools.Adobe}
                                      orient="vertical"
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #457118 ${ele.Softwaretools.Adobe}%, #fff ${ele.Softwaretools.Adobe}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Adobe(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #457118 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Adobe + "%"}</p>
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
                                      value={ele.Softwaretools.Davinci}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #EE0000 ${ele.Softwaretools.Davinci}%, #fff ${ele.Softwaretools.Davinci}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Davinci(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #EE0000 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Davinci + "%"}</p>
                                  </div>
                                </p>
                                <p className="Img_Content">
                                  <img
                                    src={Reddeadcover}
                                    width={40}
                                    height={40}
                                  ></img>
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
                                      value={ele.Softwaretools.Photoshop}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #D57E18 ${ele.Softwaretools.Photoshop}%, #fff ${ele.Softwaretools.Photoshop}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Photoshop(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #D57E18 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Photoshop + "%"}</p>
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
                                      value={ele.Softwaretools.Premier}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #FF4655 ${ele.Softwaretools.Premier}%, #fff ${ele.Softwaretools.Premier}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Premier(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #FF4655 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Premier + "%"}</p>
                                  </div>
                                </p>
                                <p className="Img_Content">
                                  <img
                                    src={Valorant}
                                    width={40}
                                    height={40}
                                  ></img>
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
                                      value={ele.Softwaretools.Adobe}
                                      orient="vertical"
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #00005B ${ele.Softwaretools.Adobe}%, #fff ${ele.Softwaretools.Adobe}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Adobe(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #00005B ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Adobe + "%"}</p>
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
                                      value={ele.Softwaretools.Davinci}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #2D083C ${ele.Softwaretools.Davinci}%, #fff ${ele.Softwaretools.Davinci}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Davinci(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #2D083C ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Davinci + "%"}</p>
                                  </div>
                                </p>
                                <p className="Img_Content">
                                  <img
                                    src={Premier}
                                    width={40}
                                    height={40}
                                  ></img>
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
                                      value={ele.Softwaretools.Photoshop}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #EB7700 ${ele.Softwaretools.Photoshop}%, #fff ${ele.Softwaretools.Photoshop}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Photoshop(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #EB7700 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Photoshop + "%"}</p>
                                  </div>
                                </p>
                                <p className="Img_Content">
                                  <img
                                    src={Blender}
                                    width={40}
                                    height={40}
                                  ></img>
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
                                      value={ele.Softwaretools.Premier}
                                      step={1}
                                      style={{
                                        background: `linear-gradient(90deg, #FF4655 ${ele.Softwaretools.Premier}%, #fff ${ele.Softwaretools.Premier}%)`,
                                      }}
                                      //   onChange={(el) => {
                                      //     setele.Softwaretools.Premier(el.target.value);
                                      //     el.target.style.background = `linear-gradient(90deg, #FF4655 ${el.target.value}%, #fff ${el.target.value}%)`;
                                      //   }}
                                    ></input>
                                    <p>{ele.Softwaretools.Premier + "%"}</p>
                                  </div>
                                </p>
                                <p className="Img_Content">
                                  <img
                                    src={Davinci}
                                    width={40}
                                    height={40}
                                  ></img>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="col-lg-6 Divider_Content1">
                          <div className="Text_filed">
                            <p>Remarks</p>
                            <p style={{fontSize:"16px", color:"black"}}>{ele.Remarks}</p>
                          </div>
                          <div className="Slider_Work">
                            <div class="progress">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                // style={{ width: `${whole}%` }}
                                style={{ width: `${ele.TicketStatus == 1 ? 0 : ele.TicketStatus == 2 ? 16 : ele.TicketStatus == 3 ? 16 : ele.TicketStatus == 4 ? 20 : ele.TicketStatus == 5 ? 32 : ele.TicketStatus == 6 ? 42 : ele.TicketStatus == 7 ? 52 : ele.TicketStatus == 8 ? 64 : ele.TicketStatus == 9 ? 78 : 100}%` }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                              <div className="name1">
                                <p className={`${ele.TicketStatus >= 1 && "active"}`}></p>
                                <p className={`${ele.TicketStatus >= 5 && "active"}`}></p>
                                <p className={`${ele.TicketStatus >= 8 && "active"}`}></p>
                                <p
                                  className={`${ele.TicketStatus >= 10 && "active"}`}
                                ></p>
                              </div>
                            </div>
                            <div className="name">
                              <p>New Enquiry</p>
                              <p>In Build</p>
                              <p>Out for Delivery</p>
                              <p>Delivered</p>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="end_page">End of Page</div>
        </div>
      </div>
    </div>
  );
}
