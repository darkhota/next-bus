import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600&display=swap");
  font-family: Manrope, sans-serif;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #333;

  .header {
    padding: 3.5rem;
    position: absolute;
    top: 0;
    margin-top: 0;
  }

  .split {
    position: absolute;
    width: 50%;
    height: 100%;
  }

  .split.left {
    left: 0;
    background-color: #0f17c3;
    position: absolute;
    height: 100vh;
  }
  .lower-bg {
    position: relative;
    top: 80%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background-color: #0080ff;
    z-index: 0;
  }
  .center-img {
    display: flex;
    justify-content: center;
  }

  .sign-in-img {
    margin-top: 6rem;
  }
  .sign-in-img img {
    width: 382px !important;
  }

  .split.left img {
    width: 332px;
    z-index: 7;
    position: absolute;
  }

  .split.right {
    right: 0;
    background-color: #fff;
  }

  .split.right h1 {
    color: #000;
  }

  .split.right,
  .split.left,
  .split.right::before,
  .split.left::before {
    transition: all var(--speed) ease-in-out;
  }

  .form-container {
    padding: 2rem;
    position: relative;
  }

  form {
    width: 65%;
    position: absolute;
    left: 120px;
  }

  form h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 3.5rem;
    margin-bottom: -20px !important;
  }

  form h4 {
    font-weight: 300;
    color: #0080ff;
    margin-bottom: 2rem;
  }

  .text-field {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 45px;
    color: #fff;
    font-weight: 300;
  }

  b {
    color: #92f8e0;
  }

  a {
    color: #0f17c3;
  }
  .reset {
    align-self: center;
    font-size: 13px;
    text-align: right;
    margin-inline-start: auto;
  }

  .css-1oakzvg-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  .css-1oakzvg-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #0f17c3 !important;
  }
  .css-ahj2mt-MuiTypography-root {
    font-size: 13px !important;
  }

  .css-jh47zj-MuiButtonBase-root-MuiButton-root {
    background-color: #0f17c3 !important;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    width: 100% !important;
    letter-spacing: 0.1em !important;
    padding: 1rem !important;
    font-size: 12px !important;
    font-weight: 300!important;
    margin-top: 1rem!important;
  }

  .hr-top {
    margin: 2rem 0;
  }

  .hr-top h2 {
    font-size: 12px;
    font-weight: 300;
    width: 100%;
    text-align: center;
    border-bottom: 0.5px solid #2196f3;
    line-height: 0.1em;
    margin: 10px 0 20px;
    color: rgba(82, 82, 92, 0.65);
  }

  .hr-top h2 span {
    background: #fff;
    padding: 0 10px;
  }

  .css-14mxhrp-MuiButtonGroup-root .MuiButtonGroup-grouped {
    border-color: #1976d2;
    padding: 0.5rem;
    font-size: 12px;
  }
  .left-btn {
    width: 70%;
  }
  .right-btn {
    width: 30%;
  }

  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    padding: 0.8rem;
    border: 1px solid #a4a1a1;
    color: #000;
    font-size: 12px;
    text-transform: none;
  }

  p {
    margin-top: 2rem;
    font-size: 12px;
  }

  p a {
    text-decoration: none;
    font-weight: 600;
    color: #2028eb;
  }

  @media (max-width: 768px) {
    .split {
      width: 100%;
      margin: 0;
      position: initial;
    }
    .split.left {
      display: none;
    }
    .form-container{
      padding: 1rem;
    }
    form {
      left: initial;
      width: 90%;
    }
    form h1 {
      font-size: 20px;
      margin-top: 3.5rem;
      margin-bottom: -20px !important;
    }
    .reset {
      align-self: center;
      font-size: 13px;
      text-align: right;
      margin-inline-start: auto;
    }
    form h1 {
      margin-top: 1rem;
    }
  }
  @media (max-height: 540px) {
    .split{
      overflow-x: scroll;
    }

`;
