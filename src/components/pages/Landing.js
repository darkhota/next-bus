import React, { useState } from "react";
import { LandingP } from "../styles/LandingP.styled";
import {Link} from 'react-router-dom'
import ReorderIcon from "@mui/icons-material/Reorder";

const Landing = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <LandingP>
      <nav className="nav">
        <div className="container">
          <img className="logo" src="img/logo.png" alt="hi" />
          <div className="links">
            <ul id={showLinks ? "hidden" : ""}>
              <li>
                <Link to="#" className="current">
                  About NextBus
                </Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>

              <button className="btn btn-white">SIGN IN</button>

              <button className="btn btn-blue">SIGN UP</button>
            </ul>
          </div>

          <div className="responsive-nav">
            <button>
              <ReorderIcon
                sx={{ color: "#fff" }}
                onClick={() => setShowLinks(!showLinks)}
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <h1>Find the next bus on your route now.</h1>
          <p>Enjoy convenient commuting with friends, family or luggage.</p>
          <button className="btn btn-blue">GET STARTED</button>
        </div>
      </div>
      <section className="container content-1">
        <p>HOW NEXTBUS WORKS</p>
        <h1>
          Ready,set,go <br /> in a few quick steps.
        </h1>

        <h3>
          Whether you’re rushing to work or you have luggage to move around,
          we’ll get you there.
        </h3>
        <div className="feature-section">
          <div className="feature-card">
            <div className="card-img">
              <img src="img/Magnifying-Glass.png" alt="" />
            </div>

            <h4>Input location & destination</h4>
            <h5>Pickup from a location near you and dropoff on route</h5>
          </div>
          <div className="feature-card">
            <div className="card-img">
              <img src="img/bus.png" alt="" />
            </div>

            <h4>Include number of passengers</h4>
            <h5>Join with family and friends, they can hop in too!</h5>
          </div>
          <div className="feature-card">
            <div className="card-img">
              <img src="img/exit.png" alt="exit" />
            </div>

            <h4 className="mt-2">Hop out</h4>
            <h5>
              Simply exit the bus when you reach your destination.
              We’ll automatically charge the bill to the payment method saved{" "}
            </h5>
          </div>
        </div>
      </section>
      <section className="content-2">
        <p>WHY NEXTBUS</p>
        <div className="why">
          <h2>Convenient and Reliable</h2>
          <button className="btn btn-blue">SIGN UP</button>
        </div>
      </section>

      <section className="container content-3">
        <div className="header-section">
          <h2>We’ve partnered with Nigerias most popular bus companies.</h2>
          <p>Connecting Drivers and Riders headed in the same direction</p>
        </div>
        <div className="content-section-1">
          <div className="partners">
            <img src="/img/last-mile.png" alt="gigm" />
            <p>FIRST AND LAST-MILE TRANSPORTATION</p>
          </div>
          <div className="partners">
            <img src="/img/gigm.png" alt="gigm" />
            <p>GOD IS GOOD MOBILITY</p>
          </div>
        </div>
        <div className="content-section-2">
          <div className="perks">
            <div className="perk-container">
              <div className="icon-bg">
                <img src="img/perk1.png" alt="" />
              </div>
            </div>
            <p>Easy and accessible rides for every route. </p>
          </div>
          <div className="perks">
            <div className="perk-container">
              <div className="icon-bg">
                <img src="img/perk2.png" alt="" />
              </div>
            </div>
            <p>Guaranteed safety for your belongings.</p>
          </div>
          <div className="perks">
            <div className="perk-container">
              <div className="icon-bg">
                <img src="img/perk3.png" alt="" />
              </div>
            </div>
            <p>A comfortable riding experience, all the way </p>
          </div>
        </div>
      </section>

      <section className="content-4">
        <h1>Ready to Ride?</h1>
        <button className="btn light-btn">SIGN UP</button>
      </section>

      <footer>
        <img src="img/logo.png" alt="" />
        <div className="list-flex">
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Companies</li>
            <li>Pricing</li>
          </ul>

          <ul>
            <li>Other</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>

      <div className="footer-2">
        <div className="footer-2-container">
          <div className="social-links">
            <img src="img/twitter.png" alt="twitter" />
            <img src="img/instagram.png" alt="instagram" />
            <img src="img/linkedin.png" alt="linkedin" />
          </div>
          <div className="copyright">
            ©2021, NextBus Inc., All Rights Reserved
          </div>
        </div>
      </div>
    </LandingP>
  );
};

export default Landing;
