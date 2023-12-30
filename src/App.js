import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBanner";
import TypeSelectionBanner from "./Components/TypeSelectionBanner";
import BandComponent from "./Components/BandComponent";
import PrebuildComponent from "./Components/PrebuildComponent";
import CustomLoop from "./Components/CustomLoop";
import Server from "./Components/Server";
import HowWorks from "./Components/HowWorks";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import GetQuote from "./Components/GetQuote";
import { useEffect } from "react";
import MyConfig from "./Components/MyConfig";
import PcView from "./Components/PcView";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Components/Orders";

// import { fetchTodos } from './Redux/Slice';

function App() {
  const handleChange = (e) => {
    var browserZoomLevel = Math.round(
      (window.outerWidth / window.innerWidth) * 100
    );
    console.log(browserZoomLevel, window.innerHeight, window.innerWidth);
    if (window.innerWidth > 1520) {
      var doc = document.getElementsByClassName("App");
      let zoom = (window.innerWidth / 1520) * 100;
      // console.log(Math.round(zoom));
      doc[0].style.zoom = `${Math.round(zoom)}%`;
    } else {
      var doc1 = document.getElementsByClassName("App");
      doc1[0].style.zoom = `100%`;
    }
  };

  window.addEventListener("resize", handleChange);

  useEffect(() => {
    handleChange("1");
  }, []);
  // const dispatch = useDispatch()
  const data ={
    "session": {
        "refresh": null,
        "token": {
            "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNDAzMDA3NiwiaWF0IjoxNzAzOTQzNjc2LCJqdGkiOiI5NmYxMzU0OTc1YTg0YTM5YmVkYWU2OTUzOTc3YzdmZCIsInVzZXJfaWQiOjd9.AUrz8RmEXe1BC-RG4FdGP6kSBQK7jSJ5_pDBYPRP2xo",
            "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0MDMwMDc2LCJpYXQiOjE3MDM5NDM2NzYsImp0aSI6ImQzYjAwMzk4YjQ2NjRjOTRhZjI0ZjdhYmY2YTc4YTI2IiwidXNlcl9pZCI6N30.fXOjYlvUzll-SOBNgo6joiG9edu0B9BcLbWeWapVNQc"
        },
        "validity": 1,
        "specialMessage": null
    },
    "data": {
        "UserData": {
            "id": 7,
            "last_login": null,
            "is_superuser": false,
            "first_name": "",
            "last_name": "",
            "date_joined": "2023-10-14T07:12:21.424361Z",
            "username": "Aakash R",
            "Address": null,
            "MobileNo": "9344097479",
            "LoginType": "customer",
            "email": "R",
            "TotalTicket": null,
            "PendingTicket": null,
            "FinishingTicket": null,
            "PostDateTime": "2023-10-14T07:12:21.424740Z",
            "Creator": "customer",
            "password": "12345",
            "Image": null,
            "OtpTime": "2023-12-30T13:41:10.881868Z",
            "active": 1,
            "groups": [],
            "user_permissions": []
        },
        "Address": [
            {
                "addressId": 14,
                "userId_id": 7,
                "apartmentNo": "Ad",
                "street": "orathanadu",
                "landmark": "",
                "city": "thanjavur",
                "state": "Tamil Nadu",
                "zipcode": "614625",
                "mobileno": null
            }
        ]
    },
    "status": {
        "code": 200,
        "status": "pass",
        "message": "User Login successfully"
    }
}
  useEffect(() => {
    localStorage.setItem("loginDetails", JSON.stringify(data));
  }, []);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeBanner></HomeBanner>
                <TypeSelectionBanner></TypeSelectionBanner>
                <BandComponent></BandComponent>
                <PrebuildComponent></PrebuildComponent>
                <CustomLoop></CustomLoop>
                <Server></Server>
                <HowWorks></HowWorks>
                <Faq></Faq>
              </>
            }
          ></Route>
          <Route path="/getquote" element={<GetQuote></GetQuote>}></Route>
          <Route path="/config" element={<MyConfig></MyConfig>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/pcdetails" element={<PcView></PcView>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
      {/* <GetQuote></GetQuote> */}
      {/* <MyConfig></MyConfig> */}
      {/* <PcView></PcView> */}
      <Footer></Footer>
      {/* <div className='button' onClick={e=>{console.log("aldsjalsjd");dispatch(fetchTodos())}}>Extracall</div> */}
    </div>
  );
}

export default App;
