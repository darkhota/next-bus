import styled from "styled-components";

export const FeedBack = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600&display=swap");
  font-family: Manrope, sans-serif;
  background: rgba(15, 23, 195, 0.04);
  height: 85.5vh;
  margin-top: -1.2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h6 {
    color: #52525c;
    margin: 0;
  }

  .feedback-card {
    background: #fff;
    padding: 1.5rem;
    width: 300px;
    border-radius: 10px;
  }

  .feedback-card h2,
  h6 {
    text-align: center;
    font-weight: 600;
  }

  .feedback-card h2 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .driver-details {
    display: flex;
    margin-bottom: 1rem;
  }

  .driver-details img {
    object-fit: contain;
    margin-right: 1rem;
  }

  .driver-details h5 {
    color: #52525c;
    font-weight: lighter;
    margin: 0;
  }

  .driver-details h6 {
    margin: 0;
    display: flex;
    align-items: center;
  }
  .driver-details h6 img {
    margin-right: 0.2rem;
  }

  .trip-details {
    position: relative;
  }

  .trip-details .border {
    position: absolute;
    top: 0px;
    margin-right: 1rem;
  }

  .locations {
    margin-left: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .locations h6 {
    margin: 0;
    margin-bottom: 1.7rem;
  }

  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin: 0;
    text-align: center;
  }
  .stars {
    margin-bottom: 1rem;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
  }

  button {
    border: none;
    padding: 1rem;
    color: #fff;
    background: #0f17c3;
    width: 90%;
    border-radius: 5px;
  }
  .css-iljtu2-MuiRating-root {
    color: #0e61d9;
  }

  @media screen and (max-width: 768px) {
    .feedback-card {
      width: 80%;
    }
    .feedback-card h2 {
      font-size: 20px;
    }
    button {
      font-size: 10px;
      padding: 0.8rem;
    }
  }
  @media screen and (max-width: 768px) {
    .feedback-card h2 {
      font-size: 15px;
    }
    h6 {
      font-size: 10px;
    }
    .locations h6 {
      margin-bottom: 1.1rem;
    }
    .emoji {
      width: 20px;
    }
    .trip-details .border {
      height: 45px;
    }
  }
`;
