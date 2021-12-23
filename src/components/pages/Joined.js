import React from "react";
import { Link } from "react-router-dom";
import { Join } from "../styles/Join.styled";

const Joined = () => {
  return (
    <Join>
      <h2>
        {" "}
        <img src="img/Success!.png" alt="success" /> &nbsp;You’ve joined the
        next bus!
      </h2>
      <p>
        Get ready to meet your driver and board the bus. You can also share your
        ride details now
      </p>

      <div className="ride-details">
        <div className="bus-desc">
          <div>
            <h3>GIGM Jet Mover</h3>
            <p>IKJ-456CV</p>
          </div>

          <img src="img/gig.png" alt="gigm" />
        </div>

        <div className="trip-desc">
          <div>
            <p>Pickup from</p>
            <h3>Ikotun Market</h3>
          </div>
          <img src="img/next.png" alt="next" />
          <div>
            <p className="right-align">Dropoff at</p>
            <h3>12, Moloney Street</h3>
          </div>
        </div>

        <div className="driver-desc">
          <div>
            <h3>GIGM Jet Mover</h3>
            <p>IKJ-456CV</p>
          </div>

          <img src="img/driver.png" alt="gigm" />
        </div>

        <div className="price-desc">
          <p>Amount paid</p>
          <p>NGN 3,200</p>
        </div>

        <div className="options">
          <Link to="#"> Skip</Link>
          <Link to="/share-ride">
            {" "}
            Share ride details &nbsp; <img src="img/share.png" alt="share" />
          </Link>
        </div>
      </div>
    </Join>
  );
};

export default Joined;
