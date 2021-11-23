import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import { Layout, DashContainer, Sidebar, Nav } from "../styles/Nav.styled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = props => {
  return (
    <Layout>
      <DashContainer>
        <Sidebar>
          <div className="logo">
            <img src="img/logo.png" alt="" />
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
        </Sidebar>
        <Nav>
          <div className="img-container">
            <img src="img/bell.png" alt="notification" />
          </div>
          <h3>
            Adebukola Ibirogba <ArrowDropDownIcon />
          </h3>
        </Nav>
      </DashContainer>
      <div className="inner-container">{props.children}</div>
    </Layout>
  );
};

export default NavBar;
