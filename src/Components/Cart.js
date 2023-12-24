import React, { useEffect, useState } from "react";
import "../Stylesheets/Cart.scss";
import { url } from "../Data/NavbarData";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Prebuild from "../Assets/get.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../Assets/nuke.png";
import { toast } from "react-toastify";

export default function Cart() {
  const [token, setToken] = useState();
  const [Id, setId] = useState();
  const [Data, setData] = useState();
  const [viewContent, setViewContent] = useState(-1);
  const [ComponentData, setComponentData] = useState([]);
  const [OrderData, setOrderData] = useState([]);
  const [Amount, SetAmount] = useState();
  const [TotalAmount, setTotalAmount] = useState();
  const [Sliderval, setSliderval] = useState(20);
  const [Decider, setDecider] = useState(false);
  const [Accdata, setAccData] = useState([]);
  const [TypeAcc, settypeAcc] = useState("Monitor");
  const [Refresh, setRefresh] = useState(false);

  const RemoveOrderClick = (e) => {
    // props.setloader(true)
    const form_data = new FormData();
    form_data.append("Postid", viewContent);
    form_data.append("TicketStatus", 2);
    form_data.append("AddOnCardStatus", 0);
    // form_data.append("",);
    axios({
      method: "put",
      url: url + "adminPanel/Assingn_Quotation_Ticket/",
      data: form_data,
      headers: { Authorization: token },
    })
      .then((response) => {
        // console.log(response);
        // setViewdetails(!);
        setViewContent(-1);
        // props.setloader(false)
      })
      .catch((error) => {
        // props.setloader(false)
      });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleRemoveClick = (e) => {
    console.log(e);
    // props.setloader(true)
    axios({
      method: "get",
      url: url + "api/DeleteComponentsAddon/" + e,
      headers: { Authorization: token },
    })
      .then((response) => {
        // setRefresh(!Refresh)
        view_pointClick(viewContent);
        //   props.setloader(false)
        // console.log(response.data.data,"lkigiffdisid");
        // setAccData(response.data.data.data);
        // setOrderData(response.data.data.OrderData)
      })
      .catch((error) => {
        //   props.setloader(false)
      });
  };

  const handleAddtocart = (e) => {
    // props.setloader(true)
    const form_data = new FormData();
    form_data.append("ComponentId", e);
    form_data.append("OrderId", viewContent);
    form_data.append("UserId", Id);
    axios({
      method: "post",
      data: form_data,
      url: url + "api/AddOnComponentSelect/",
      headers: { Authorization: token },
    })
      .then((response) => {
        //   setRefresh(!Refresh)
        view_pointClick(viewContent);
        //   props.setloader(false)
        // console.log(response.data.data,"lkigiffdisid");
        // setAccData(response.data.data.data);
        // setOrderData(response.data.data.OrderData)
      })
      .catch((error) => {
        //   props.setloader(false)
      });
  };

  useEffect(() => {
    if (localStorage.getItem("loginDetails")) {
      const val = JSON.parse(localStorage.getItem("loginDetails"));
      setToken(`Bearer ${val.session.token.access}`);
      setId(val.data.UserData.id);
      axios({
        method: "get",
        url: url + "api/AddToCardForSingleUser/" + val.data.UserData.id + "/1",
        headers: { Authorization: "Bearer " + val.session.token.access },
      })
        .then((response) => {
          console.log(response);
          setData(response.data.data);
          //   props.setloader(false);
        })
        .catch((error) => {
          //   props.setloader(false);
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loginDetails")) {
      const val = JSON.parse(localStorage.getItem("loginDetails"));
      setToken(`Bearer ${val.session.token.access}`);
      setId(val.data.UserData.id);
      axios({
        method: "get",
        url: url + "adminPanel/AddOnComponents_All/" + TypeAcc + "/" + 1,
        headers: { Authorization: "Bearer " + val.session.token.access },
      })
        .then((response) => {
          console.log(response.data.data, "lkigiffdisid");
          setAccData(response.data.data.data);
          // setPage(response.data.data.TotalPage);
          // props.setloader(false)
        })
        .catch((error) => {
          setAccData([]);
          // props.setloader(false)
        });
    }
  }, [TypeAcc]);

  async function displayRazorpay() {
    // props.setloader(true)
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    function loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    }

    // const result = await axios.post("http://localhost:5000/payment/orders");
    axios({
      method: "get",
      url: url + "api/RazerPayCreateOrderID/" + Math.round(Amount) + "/" + Id,
      headers: { Authorization: token },
    }).then((reposne) => {
      console.log(reposne.data, "ds;lsdldjasdlj");
      //   props.setloader(false)
      let Original = Math.round(Amount) * 100;
      console.log(Original);
      const options = {
        key: "rzp_test_Xz2LHw1tNmGDjI", // Enter the Key ID generated from the Dashboard
        amount: Original,
        currency: reposne.data.data.currency,
        name: "A2D",
        description: "Test Transaction",
        image: { logo },
        order_id: reposne.data.data.id,
        handler: async function (response) {
          const data = {
            orderCreationId: reposne.data.data.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          // console.log(data)
          // debugger
          // props.setloader(true)
          const form_data = new FormData();
          form_data.append("OrderID", viewContent);
          // form_data.append("TicketStatus", 4);
          form_data.append("UserId", Id);
          form_data.append("Amount", Amount);
          if (Decider) {
            form_data.append("PaymentStatus", "Full");
            form_data.append("Percentage", 100);
          } else {
            form_data.append("PaymentStatus", "Half");
            form_data.append("Percentage", Sliderval);
          }
          form_data.append("PaymentID", data.razorpayPaymentId);
          form_data.append("Active", 1);
          axios({
            method: "post",
            url: url + "api/PaymentDetails/",
            data: form_data,
            headers: { Authorization: token },
          })
            .then((response) => {
              // alert("Payment success");
              toast.success("Payemtn Success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // props.setloader(false)
              // setViewdetails(!ViewDetails);
              // debugger
              window.location.href = "/orders";
              // setViewdetails(!ViewDetails);
              // setView_Content(-1)
            })
            .catch((error) => {
              // props.setloader(false)
            });

          // const result = await axios.post("http://localhost:5000/payment/success", data);

          // alert(result.data.msg);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "A2D PC FACTORY",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });

    // if (!result) {
    //     alert("Server error. Are you online?");
    //     return;
    // }

    // const { amount, id: order_id, currency } = result.data;
  }

  const view_pointClick = (e) => {
    // props.setloader(true)
    axios({
      method: "get",
      url: url + "api/GetAddToCardComponentDetails/" + e,
      headers: { Authorization: token },
    })
      .then((response) => {
        console.log(response.data.data, "lkigiffdisid");
        // setAccData(response.data.data);
        //   props.setloader(false)
        setComponentData(response.data.data.ComponentData);
        setOrderData(response.data.data.OrderData);
        SetAmount(
          (response.data.data.OrderData[0].Total * (Sliderval / 100)).toFixed()
        );
        if (response.data.data.ComponentData.length > 0) {
          let l1 = 0;
          response.data.data.ComponentData.map((ele) => {
            l1 = l1 + Number(ele.Products_Prize);
          });
          setTotalAmount(l1);
        }
      })
      .catch((error) => {
        //   props.setloader(false)
      });
  };
  return (
    <div className="Cart_Wrapper">
      <div className="Cart_Inner_Wrapper">
        <div className="Inner_Cart">
          <div className="BaseUrl">
            <span
              onClick={(e) => {
                window.location.href = "/";
              }}
            >
              Home
            </span>
            <span>{`>`}</span>
            <span
              onClick={(e) => {
                setViewContent(-1);
              }}
            >
              My Cart
            </span>
            {viewContent != -1 && (
              <span>
                <span style={{ color: "black", opacity: "100%" }}>{`>`}</span>
                <span style={{ color: "black", opacity: "100%" }}>
                  Order Summary
                </span>
              </span>
            )}
          </div>
          <div className="Main_Header">My Cart</div>
          <div className="mycart_view">
            {viewContent == -1 && (
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="whole_card">
                    {Data &&
                      Data.length > 0 &&
                      Data.map((ele) => {
                        return (
                          <div className="inner_card">
                            <div
                              className="inner_content_card"
                              onClick={(e) => {
                                setViewContent(ele.id);
                                view_pointClick(ele.id);
                              }}
                            >
                              <img
                                src={Prebuild}
                                width={"100%"}
                                height={"100%"}
                              ></img>
                              <div className="content_card">
                                <p className="deleteicon">
                                  <span></span>
                                  <span
                                    onClick={(e) => RemoveOrderClick(ele.id)}
                                  >
                                    <DeleteOutlineIcon></DeleteOutlineIcon>
                                  </span>
                                </p>

                                <div className="head">
                                  {ele.Product_usage_type} - {ele.Domain}
                                </div>
                                <div className="description">
                                  {ele.CpuName +
                                    " " +
                                    ele.Mother_board_Name +
                                    " " +
                                    ele.Ram_name +
                                    " " +
                                    ele.Extra1_Name +
                                    " " +
                                    ele.Gpu_Name +
                                    " " +
                                    ele.Ssd_Name +
                                    " " +
                                    ele.Smps_Name +
                                    " " +
                                    ele.Cabniet_name}
                                </div>
                                <div className="price">
                                  <span></span>
                                  <span>
                                    {Number(ele.Total).toLocaleString("en-IN", {
                                      style: "currency",
                                      currency: "INR",
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            {viewContent != -1 && (
              <>
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="whole_card">
                      {Data &&
                        Data.length > 0 &&
                        Data.map((ele) => {
                          return (
                            <div
                              className={`inner_card border ${
                                viewContent != ele.id && "active"
                              }`}
                            >
                              <div className="inner_content_card">
                                <img
                                  src={Prebuild}
                                  width={"100%"}
                                  height={"100%"}
                                ></img>
                                <div className="content_card">
                                  <p className="deleteicon">
                                    <span></span>
                                    <span
                                      onClick={(e) => RemoveOrderClick(ele.id)}
                                    >
                                      <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </span>
                                  </p>
                                  <div className="head">
                                    {ele.Product_usage_type} - {ele.Domain}
                                  </div>
                                  <div className="description">
                                    {ele.CpuName +
                                      " " +
                                      ele.Mother_board_Name +
                                      " " +
                                      ele.Ram_name +
                                      " " +
                                      ele.Extra1_Name +
                                      " " +
                                      ele.Gpu_Name +
                                      " " +
                                      ele.Ssd_Name +
                                      " " +
                                      ele.Smps_Name +
                                      " " +
                                      ele.Cabniet_name}
                                  </div>
                                  <div className="price">
                                    <span></span>
                                    <span>
                                      {Number(ele.Total).toLocaleString(
                                        "en-IN",
                                        {
                                          style: "currency",
                                          currency: "INR",
                                        }
                                      )}
                                    </span>
                                  </div>
                                  <p className="FullPayment">
                                    Do you want to proceed with full Payment to
                                    the build?
                                  </p>
                                  <p className="Fullpayment_input">
                                    <span>
                                      <input
                                        type="checkbox"
                                        value={Decider}
                                        onClick={(e) => {
                                          setDecider(!Decider);
                                          console.log(Decider);
                                          if (e.target.value == "false") {
                                            SetAmount(ele.Total);
                                          } else {
                                            SetAmount(
                                              (
                                                ele.Total *
                                                (Sliderval / 100)
                                              ).toFixed(2)
                                            );
                                          }
                                        }}
                                        checked={Decider}
                                      ></input>
                                    </span>
                                    <span style={{ marginRight: "10px" }}>
                                      Yes
                                    </span>
                                    <span>
                                      <input
                                        type="checkbox"
                                        value={!Decider}
                                        onClick={(e) => {
                                          setDecider(!Decider);
                                          console.log(Decider);
                                          if (e.target.value == "true") {
                                            SetAmount(ele.Total);
                                          } else {
                                            SetAmount(
                                              (
                                                ele.Total *
                                                (Sliderval / 100)
                                              ).toFixed(2)
                                            );
                                          }
                                        }}
                                        checked={!Decider}
                                      ></input>
                                    </span>
                                    <span style={{ marginRight: "10px" }}>
                                      No
                                    </span>
                                  </p>
                                  {!Decider && (
                                    <div className="Slider_pay">
                                      <input
                                        className={`slider three`}
                                        type={"range"}
                                        min={0}
                                        max={100}
                                        value={Sliderval}
                                        step={1}
                                        style={{
                                          borderRadius: "20px",
                                          marginRight: "20px",
                                          background: `linear-gradient(90deg, #E4A025 ${Sliderval}%, #EBEBEB ${Sliderval}%)`,
                                        }}
                                        onChange={(el) => {
                                          if (el.target.value > 20) {
                                            setSliderval(el.target.value);
                                            SetAmount(
                                              Number(
                                                ele.Total *
                                                  (el.target.value / 100)
                                              )
                                            );
                                            el.target.style.background = `linear-gradient(90deg, #E4A025 ${el.target.value}%, #EBEBEB ${el.target.value}%)`;
                                          }
                                        }}
                                      ></input>
                                      <p className="cal">
                                        <span>0%</span>
                                        <span>100%</span>
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="Order_summary">
                      <p className="head">Order Summary</p>
                      <div className="orderDetails">
                        <p>
                          <span>{"Custom pc build"}</span>
                          <span>
                            {Number(Amount).toLocaleString("en-IN", {
                              style: "currency",
                              currency: "INR",
                            })}
                          </span>
                        </p>
                        {ComponentData.length > 0 &&
                          ComponentData.map((ele) => {
                            return (
                              <p className="whole_content">
                                <span>{ele.Products_Name}</span>
                                <span>
                                  {Number(ele.Products_Prize).toLocaleString(
                                    "en-IN",
                                    { style: "currency", currency: "INR" }
                                  )}
                                </span>
                              </p>
                            );
                          })}
                        <p className="Total">
                          <span>Total</span>
                          <span>
                            {Number(
                              TotalAmount + Number(Amount)
                            ).toLocaleString("en-IN", {
                              style: "currency",
                              currency: "INR",
                            })}
                          </span>
                        </p>
                        <button
                          className="Proceed_button"
                          onClick={(e) => {
                            // MakePayment(e)
                            displayRazorpay();
                          }}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="Head1">Add On</p>
                  <div className="col-lg-8 col-md-9">
                    <div className="whole_card active row">
                      {ComponentData.length > 0 &&
                        viewContent != -1 &&
                        ComponentData.map((ele) => {
                          return (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                              <div className="inner_card">
                                <div className="inner_content_card">
                                  <img
                                    src={"https://api.nukepc.in" + ele.Image}
                                    width={"100%"}
                                    height={"140"}
                                  ></img>
                                  <div className="content_card">
                                    <p className="deleteicon">
                                      <span></span>
                                      <span
                                        onClick={(e) =>
                                          handleRemoveClick(ele.Id)
                                        }
                                      >
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                      </span>
                                    </p>
                                    <div className="head">
                                      {ele.Products_Name}
                                    </div>
                                    <div className="price">
                                      <span></span>
                                      <span>
                                        {Number(
                                          ele.Products_Prize
                                        ).toLocaleString("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        })}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {viewContent != -1 && (
            <div className="Featured_Accessories">
              <p className="Header">Featured Accessories</p>
              <div className="Featured_Inner_Accessories">
                <p className="Inner_Head_Option">
                  <span
                    className={`${TypeAcc == "Monitor" && "active"}`}
                    onClick={(e) => settypeAcc("Monitor")}
                  >
                    Monitor
                  </span>
                  <span
                    className={`${TypeAcc == "Mouse" && "active"}`}
                    onClick={(e) => settypeAcc("Mouse")}
                  >
                    Mouse
                  </span>
                  <span
                    className={`${TypeAcc == "KeyBoard" && "active"}`}
                    onClick={(e) => settypeAcc("KeyBoard")}
                  >
                    KeyBoard
                  </span>
                  <span
                    className={`${TypeAcc == "Speaker" && "active"}`}
                    onClick={(e) => settypeAcc("Speaker")}
                  >
                    Speaker
                  </span>
                </p>
                <div className="Inner_Acc_Content">
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
                    //   customRightArrow={<CustomRightArrow />}
                    //   customLeftArrow={<CustomLeftArrow />}
                    //   removeArrowOnDeviceType={[
                    //   "tablet",
                    //   "mobile",
                    //   "desktop",
                    //   "superLargeDesktop",
                    // ]}
                    //   deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {Accdata.length > 0 &&
                      Accdata.map((ele) => {
                        return (
                          <div className="Accessories_card col-md-6 col-lg-4 col-xl-3 col-sm-6">
                            <div className="card">
                              <div className="card-body">
                                <img
                                  src={
                                    "https://api.nukepc.in/media/" + ele.Image
                                  }
                                  width={200}
                                  height={150}
                                ></img>
                              </div>
                              <div className="card-footer">
                                <p className="name">{ele.Products_Name}</p>
                                <p className="amount">
                                  {Number(ele.Products_Prize).toLocaleString(
                                    "en-IN",
                                    { style: "currency", currency: "INR" }
                                  )}
                                </p>
                                <button
                                  className="addcart_btn"
                                  onClick={(e) => {
                                    handleAddtocart(ele.Id);
                                  }}
                                >
                                  Add to Cart
                                  <span>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          <div className="end_page">End of Page</div>
        </div>
      </div>
    </div>
  );
}
