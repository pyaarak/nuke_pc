import React, { useEffect, useState } from "react";
import "../Stylesheets/Navbar.scss";
import Logo from "../Assets/nuke.png";
import Mycartlogo from "../Assets/mycart.png";
import { NavBarMenu } from "../Data/NavbarData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar(props) {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [Mobilemenu, setMobileMenu] = useState(false);
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenu = () => {
    if (window.innerWidth < 915) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    handleMenu();
  }, []);

  window.addEventListener("resize", handleMenu);
  return (
    <div className="Navbar_Wrapper">
      <div className="Navbar_inner_Wrapper">
        <div className="LeftBar">
          <img src={Logo} width={100} height={70}></img>
        </div>
        {!Mobilemenu && (
          <>
            <div>
              {NavBarMenu.map((ele) => {
                return (
                  <span>
                    <a href={ele.path}>{ele.Name}</a>
                  </span>
                );
              })}
            </div>
            <div className="rightbar">
              <span>
                <a
                  href="/cart"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Mycartlogo} width={20} height={20}></img>My Cart
                </a>
              </span>
              <button
                className="Button_log"
                onClick={(e) => {
                  setOpenMenu(!OpenMenu);
                }}
              >
                UserName
              </button>
              {OpenMenu && (
                <div className={`Open_Menu`}>
                  <ul>
                    <li>My Config</li>
                    <li>My Orders</li>
                    <li>My Profile</li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
        {Mobilemenu && (
          <div className="style_menu">
            {!ShowMobileMenu && <MenuIcon onClick={e=>{setShowMobileMenu(true)}}></MenuIcon>}
            {ShowMobileMenu && (
              <div className="Mobile_Menu">
                <div className="Inner_Mobile_Menu">
                  <>
                    <p style={{textAlign:"right",paddingRight:"10px"}} onClick={e=>{setShowMobileMenu(false)}}><CloseIcon></CloseIcon></p>
                    <div>
                      {NavBarMenu.map((ele) => {
                        return (
                          <p>
                            <a href={ele.path}>{ele.Name}</a>
                          </p>
                        );
                      })}
                    </div>
                    <div className="rightbar">
                      <p>
                        <a
                          href="/cart"
                        >
                          <img src={Mycartlogo} width={20} height={20}></img>My
                          Cart
                        </a>
                      </p>
                      <button
                        className="Button_log"
                        onClick={(e) => {
                          setOpenMenu(!OpenMenu);
                        }}
                      >
                        UserName
                      </button>
                      {OpenMenu && (
                        <div className={`Open_Menu`}>
                          <ul>
                            <li>My Config</li>
                            <li>My Orders</li>
                            <li>My Profile</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
