import styled from "styled-components";

export const Cards = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600&display=swap");
  font-family: Manrope, sans-serif;
  margin-top: -1.2rem;

  .container {
    height: 82vh;
    display: flex;
  }

  .left {
    height: 100%;
    width: 50%;
    background: rgba(15, 23, 195, 0.04);
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    width: 440px;
    font-size: 25px;
    margin-left: 2rem;
    padding: 1rem;
  }

  .image-container {
    display: flex;
    justify-content: center;
  }
  .image-container img {
    width: 250px;
    object-fit: cover;
  }

  h3 {
    font-weight: 600;
    color: #000;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row img {
    width: 100px;
    object-fit: cover;
  }
  h5 {
    margin: 0.5rem;
  }

  .right {
    padding: 2rem;
    height: 100%;
    width: 50%;
  }

  .method {
    display: flex;
  }

  .method span {
    margin-right: 10px;
    margin-left: 10px;
  }

  .method img {
    width: 20px;
    margin-right: 1rem;
  }

  .form {
    margin-top: 2rem;
  }

  .form h1 {
    font-size: 20px;
  }

  .form p {
    font-size: 12px;
  }

  .formWrapper_3lgagk {
    max-width: 100% !important;
    border: none !important;
  }

  .formBody_1hyhy3p {
    padding: 0 !important;
    width: 75%;
  }
  .inputGroup_c7qll8-o_O-splitInputGroup_rd1twh {
    flex-wrap: wrap;
  }
  .inputGroup_c7qll8 {
    margin-top: 1rem;
    width: 100% !important;
  }
  .payButton_5jrfs2 {
    background-color: #0f17c3 !important;
  }

  .input-group {
    margin-bottom: 1rem;
  }

  .input-group h5 {
    margin: 0;
    font-weight: 100;
    font-size: 12px;
  }
  .input-group input {
    margin-top: 0.5rem;
    width: 70%;
    padding: 12px;
    border: 1px solid rgb(225, 229, 238) !important;
    border-radius: 5px;
  }

  .input-group input:focus-visible {
    outline: 1px solid #0f17c3 !important;
  }

  .pay-btn {
    width: 75%;
    height: 50px;
    background-color: #0f17c3;
    border-width: 0;
    color: #fff;
    font-size: 17px;
    letter-spacing: 1.59px;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .form-footer {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  .form-footer span {
    margin-left: 0.5rem;
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    .container {
      display: inline-block;
      overflow-x: scroll;
      width: -webkit-fill-available;
      height: 88vh;
    }
    .left {
      width: 76%;
    }
    h2 {
      width: 95%;
      font-size: 15px;
      margin-left: 0;
    }
    .image-container img {
      width: 200px;
    }
    .row img {
      width: 70px;
    }
    .right {
      width: 76%;
    }
    .form-footer {
      width: 90%;
    }
    .formBody_1hyhy3p {
      width: 100%;
    }
    h5 {
      width: 80px;
    }
    .input-group input {
      width: 90%;
    }
    .pay-btn {
      width: 100%;
    }
  }
`;
