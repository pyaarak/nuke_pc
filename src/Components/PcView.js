import React, { useEffect, useState } from "react";
import "../Stylesheets/PcView.scss";
import { url } from "../Data/NavbarData";
import axios from "axios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Prebuild from "../Assets/get.png";
import board from "../Assets/Pcview/board.png";
import cas from "../Assets/Pcview/cas.png";
import cpucooler from "../Assets/Pcview/cpucooler.png";
import ram from "../Assets/Pcview/ram1.png";
import smp from "../Assets/Pcview/smp.png";
import store from "../Assets/Pcview/store.png";
import GPU from "../Assets/Pcview/gpu1.png";
import sig from "../Assets/Pcview/sig.png";
import dmark from "../Assets/Pcview/dmark.png";
import Grand from "../Assets/Gaming/gta.png";
import Reddeadcover from "../Assets/Gaming/red.png";
import pubg from "../Assets/Gaming/pub.png";
import Adobe from "../Assets/Gaming/adobe.png";
import Premier from "../Assets/Gaming/premier.png";
import Blender from "../Assets/Gaming/Blender.png";
import Davinci from "../Assets/Gaming/Davinci.png";
import Valorant from "../Assets/Gaming/vol.png";
import intel from "../Assets/Pcview/Intel-Inside-Logo.png";
import amd from "../Assets/Pcview/amd.png";
import { useSelector } from "react-redux";

export default function PcView() {
  const [token, setToken] = useState();
  const [Id, setId] = useState();
  const [Data, setData] = useState();
  const [whole, setWhole] = useState(34);
  const [viewContent, setViewContent] = useState(0);
  const pcviewindex = useSelector((state) => state.QuoteData.pcviewindex);

  useEffect(() => {
    if (localStorage.getItem("loginDetails")) {
      const val = JSON.parse(localStorage.getItem("loginDetails"));
      setToken(`Bearer ${val.session.token.access}`);
      setId(val.data.UserData.id);
      axios({
        method: "get",
        url: url + "adminPanel/Get_Single_Ticket_Data/" + pcviewindex,
        headers: { Authorization: "Bearer " + val.session.token.access },
      }).then((response) => {
        console.log(response);
        setData(response.data.data);
      });
    }
  }, []);

  const HandleCartClick = (e) => {
    const form_data = new FormData();
    form_data.append("Postid", pcviewindex);
    form_data.append("AddOnCardStatus", 1);
    form_data.append("TicketStatus", 4);
    axios({
      method: "put",
      url: url + "adminPanel/Assingn_Quotation_Ticket/",
      data: form_data,
      headers: { Authorization: token },
    })
      .then((response) => {
        window.location.href = "/cart";
      })
      .catch((error) => {
      });
  };
  return (
    <div className="View_Wrapper">
      <div className="View_inner_Wrapper">
        <div className="View_Contents">
          <div className="BaseUrl">
            <span
              onClick={(e) => {
                window.location.href = "/";
              }}
            >
              Home
            </span>
            <span>{`>`}</span>
            <span>PC View</span>
          </div>
          <div className="Main_Header">Pc View</div>
          <div className="config">
            <div
              className={`Config_Details ${viewContent == 0 && "active"}`}
              onClick={(e) => {
                if (viewContent == 0) {
                  setViewContent(0);
                } else {
                  setViewContent(0);
                }
              }}
            >
              {Data && (
                <>
                  <div className="Config_Details_inner">
                    <div className="row">
                      <div className="col-xl-4 col-md-6 three">
                        <div className="purpose img">
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          {/* <p>{ele.Domain}</p> */}
                          {/* </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6 three">
                        <p className="Header">{Data.Product_usage_type}</p>
                        <p className="Budjet">
                          {Number(Data.Total).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </p>
                        <p className="Budjet_sub">
                          {"Inclusive of GST. (Free Delivery)"}
                        </p>
                        <div className="button">
                          {Data.TicketStatus >= 4 ? (
                            <>
                              <button
                                onClick={(e) => {
                                  HandleCartClick(e);
                                }}
                              >
                                <p>MakePayment</p>
                                <p className="icon">
                                  <ArrowForwardIcon></ArrowForwardIcon>
                                </p>
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={(e) => {
                                  HandleCartClick(e);
                                }}
                              >
                                <p>Add to Cart</p>
                                <p className="icon">
                                  <ArrowForwardIcon></ArrowForwardIcon>
                                </p>
                              </button>
                              <button>
                                <p>Customize</p>
                                <p className="icon">
                                  <ArrowForwardIcon></ArrowForwardIcon>
                                </p>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-4 none">
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="purpose">
                              <p>Purpose</p>
                              <p className="content">
                                {Data.Product_usage_type}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="purpose">
                              <p>Domain</p>
                              <p className="content">{Data.Domain}</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="purpose">
                              <p>Processor</p>
                              <p className="inner_domain">
                                <img
                                  src={
                                    Data.CpuName.toLowerCase().includes("intel")
                                      ? intel
                                      : amd
                                  }
                                ></img>
                                <p className="content">{Data.CpuName}</p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6 two">
                        <div className="purpose img">
                          {/* <p>Domain</p> */}
                          {/* <div className="inner_domain"> */}
                          <img
                            src={Prebuild}
                            width={"100%"}
                            height={"100%"}
                          ></img>
                          {/* <p>{ele.Domain}</p> */}
                          {/* </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6 two">
                        <p className="Header">{Data.Product_usage_type}</p>
                        <p className="Budjet">
                          {Number(Data.Total).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </p>
                        <p className="Budjet_sub">
                          {"Inclusive of GST. (Free Delivery)"}
                        </p>
                        <div className="button">
                          {Data.TicketStatus >= 4 ? (
                            <>
                              {Data.FullPayment == null && (
                                <button
                                  onClick={(e) => {
                                    HandleCartClick(e);
                                  }}
                                >
                                  <p>MakePayment</p>
                                  <p className="icon">
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                  </p>
                                </button>
                              )}
                            </>
                          ) : (
                            <>
                              <button
                                onClick={(e) => {
                                  HandleCartClick(e);
                                }}
                              >
                                <p>Add to Cart</p>
                                <p className="icon">
                                  <ArrowForwardIcon></ArrowForwardIcon>
                                </p>
                              </button>
                              <button>
                                <p>Customize</p>
                                <p className="icon">
                                  <ArrowForwardIcon></ArrowForwardIcon>
                                </p>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Techspec">
                    <p className="Header">Tech spec</p>
                    <div className="Content_view">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="spec_card">
                            <div className="first_spec">
                              <img
                                src={board}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="conts">
                                <p className="name">Mother Board</p>
                                <p className="namecont">
                                  {Data.Mother_board_Name}
                                </p>
                              </div>
                            </div>
                            <div className="modify">Modify</div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="spec_card">
                            <div className="first_spec">
                              <img
                                src={ram}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="conts">
                                <p className="name">Ram</p>
                                <p className="namecont">{Data.Ram_name}</p>
                              </div>
                            </div>
                            <div className="modify">Modify</div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="spec_card">
                            <div className="first_spec">
                              <img
                                src={cpucooler}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="conts">
                                <p className="name">CPU Cooler</p>
                                <p className="namecont">{Data.Extra1_Name}</p>
                              </div>
                            </div>
                            <div className="modify">Modify</div>
                          </div>
                        </div>
                        {Data.Gpu_Name != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={GPU}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">GPU</p>
                                  <p className="namecont">{Data.Gpu_Name}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Gpu_Name1 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={GPU}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">GPU</p>
                                  <p className="namecont">{Data.Gpu_Name1}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Gpu_Name2 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={GPU}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">GPU</p>
                                  <p className="namecont">{Data.Gpu_Name2}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Gpu_Name3 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={GPU}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">GPU</p>
                                  <p className="namecont">{Data.Gpu_Name3}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Gpu_Name4 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={GPU}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">GPU</p>
                                  <p className="namecont">{Data.Gpu_Name4}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Ssd_Name != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={store}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">Storage</p>
                                  <p className="namecont">{Data.Ssd_Name}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Ssd_Name1 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={store}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">Storage</p>
                                  <p className="namecont">{Data.Ssd_Name1}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Ssd_Name2 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={store}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">Storage</p>
                                  <p className="namecont">{Data.Ssd_Name2}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Ssd_Name3 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={store}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">Storage</p>
                                  <p className="namecont">{Data.Ssd_Name3}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        {Data.Ssd_Name4 != null && (
                          <div className="col-md-6">
                            <div className="spec_card">
                              <div className="first_spec">
                                <img
                                  src={store}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="conts">
                                  <p className="name">Storage</p>
                                  <p className="namecont">{Data.Ssd_Name4}</p>
                                </div>
                              </div>
                              <div className="modify">Modify</div>
                            </div>
                          </div>
                        )}
                        <div className="col-md-6">
                          <div className="spec_card">
                            <div className="first_spec">
                              <img
                                src={smp}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="conts">
                                <p className="name">SMPS</p>
                                <p className="namecont">{Data.Smps_Name}</p>
                              </div>
                            </div>
                            <div className="modify">Modify</div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="spec_card">
                            <div className="first_spec">
                              <img
                                src={cas}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="conts">
                                <p className="name">CASE</p>
                                <p className="namecont">{Data.Cabniet_name}</p>
                              </div>
                            </div>
                            <div className="modify">Modify</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Techspec">
                    <p className="Header">Estimated Benchmarks</p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="purpose">
                          <p className="head">Synthetic Benchmarks</p>
                          <div className="row">
                            <div className="col-sm-6 tow">
                              <div className="full_score one">
                                <img src={sig}></img>
                                <div className="inner_score">
                                  <p className="head">Single-Core</p>
                                  <p className="score">
                                    {Data.CinebenchSingleCore}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="full_score one">
                                <img src={sig}></img>
                                <div className="inner_score">
                                  <p className="head">Multi-Core</p>
                                  <p className="score">
                                    {Data.CinebenchMultiCore}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 tow">
                              <div className="full_score">
                                <img src={dmark}></img>
                                <div className="inner_score">
                                  <p className="head">Single-Core</p>
                                  <p className="score">{Data.Passmark}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="full_score">
                                <img src={dmark}></img>
                                <div className="inner_score">
                                  <p className="head">Multi-Core</p>
                                  <p className="score">{Data.FPS}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                      {/* <div className="row"> */}
                      <div className="col-lg-6">
                        {Data.Product_usage_type.includes("Gaming") && (
                          <div className="purpose">
                            <p className="head">Synthetic Benchmarks</p>
                            <div className="row">
                              <div className="col-sm-6 tow">
                                <div className="full_score one">
                                  <img src={Grand}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score1}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="full_score one">
                                  <img src={Reddeadcover}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score2}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6 tow">
                                <div className="full_score">
                                  <img src={pubg}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score3}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="full_score">
                                  <img src={Valorant}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score4}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {Data.Product_usage_type.includes("Content") && (
                          <div className="purpose">
                            <p className="head">Synthetic Benchmarks</p>
                            <div className="row">
                              <div className="col-sm-6 tow">
                                <div className="full_score one">
                                  <img src={Adobe}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score1}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="full_score one">
                                  <img src={Premier}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score2}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6 tow">
                                <div className="full_score">
                                  <img src={Blender}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score3}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="full_score">
                                  <img src={Davinci}></img>
                                  <div className="inner_score">
                                    <p className="head">FPS</p>
                                    <p className="score">{Data.Score.Score4}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
