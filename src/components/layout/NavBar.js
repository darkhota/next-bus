import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import {
  Layout,
  DashContainer,
  Sidebar,
  Nav,
  MainContent
} from "../styles/Nav.styled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = props => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(active => !active);
  };
  return (
    <Layout>
      <DashContainer>
        <div className={` sidebar ${active === true ? "active" : ""}`}>
          <div className="logo">
            <img src="img/logo.png" alt="" />
            <MenuIcon className="menu-icon" onClick={toggleMenu} />
          </div>
          <ul className="sidebar-items">
            {navItems.map(item => {
              return (
                <li key={item.id} className={item.sName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="sign-out">
              <Link to="#">
                <img src="img/sign-out.png" alt="sign out" />
                <span>Sign out</span>
              </Link>
            </div>
          </ul>
        </div>

        <div className="main-content">
          <div className="nav">
            <div className="img-container">
              <img src="img/bell.png" alt="notification" />
            </div>
            <h3>
              Adebukola Ibirogba <ArrowDropDownIcon />
            </h3>
          </div>

          <div className="inner-container">{props.children}</div>
        </div>
      </DashContainer>
    </Layout>
  );
};

export default NavBar;
