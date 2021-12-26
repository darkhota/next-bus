import React, { useState } from "react";
import { FeedBack } from "../styles/FeedBack.styled";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: (
    <div>
      <img className="emoji" src="img/bad.png" alt="bad" /> <p>bad</p>
    </div>
  ),
  1: (
    <div>
      <img className="emoji" src="img/bad.png" alt="bad" /> <p>bad</p>
    </div>
  ),
  1.5: (
    <div>
      <img className="emoji" src="img/bad.png" alt="bad" /> <p>bad</p>
    </div>
  ),
  2: (
    <div>
      <img className="emoji" src="img/bad.png" alt="bad" /> <p>bad</p>
    </div>
  ),
  2.5: (
    <div>
      <img className="emoji" src="img/ok.png" alt="ok" /> <p>ok</p>
    </div>
  ),
  3: (
    <div>
      <img className="emoji" src="img/ok.png" alt="ok" /> <p>ok</p>
    </div>
  ),
  3.5: (
    <div>
      <img className="emoji" src="img/ok.png" alt="ok" /> <p>ok</p>
    </div>
  ),
  4: (
    <div>
      <img className="emoji" src="img/ok.png" alt="ok" /> <p>ok</p>
    </div>
  ),
  4.5: (
    <div>
      <img className="emoji" src="img/great.png" alt="great" /> <p>Great</p>
    </div>
  ),
  5: (
    <div>
      <img className="emoji" src="img/great.png" alt="great" /> <p>Great</p>
    </div>
  )
};

const Feedback = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <FeedBack>
      <div className="feedback-card">
        <h2>You arrived!</h2>
        <div className="driver-details">
          <img src="img/driver-small.png" alt="driver" />
          <div>
            <h5>Ikechukwu Onyia</h5>
            <h6>
              <img src="img/star.png" alt="star" /> 4.8
            </h6>
          </div>
        </div>
        <h5>Trip</h5>
        <div className="trip-details">
          <img className="border" src="img/location-border.png" alt="border" />
          <div className="locations">
            <h6>Ikotun Market</h6>
            <h6>9.40 am</h6>
          </div>
          <div className="locations">
            <h6>12, Moloney Street</h6>
            <h6>10.25 am</h6>
          </div>
        </div>
        <h2>How was your trip?</h2>
        <h6>Your feedback will help us improve driving experience better</h6>
        <div className="ratings">
          <Rating
            className="stars"
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55 }}
                fontSize="inherit"
                color="#0e61d9"
              />
            }
          />
          {value !== null && (
            <div className="rating-desc" sx={{ ml: 2 }}>
              {labels[hover !== -1 ? hover : value]}
            </div>
          )}
        </div>
        <div className="btn-container">
          <button>Submit feedback</button>
        </div>
      </div>
    </FeedBack>
  );
};

export default Feedback;
