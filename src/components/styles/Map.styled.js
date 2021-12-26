import styled from "styled-components";

export const Map = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600&display=swap");
  font-family: Manrope, sans-serif;
  .map {
    width: 100%;
    height: calc(100vh - 80px);
    position: relative;
  }
  .location-card {
    position: absolute;
    left: 20px;
    top: 10%;
    color: #fff;
    background-color: #fff;
    height: fit-content;
    width: 400px;
    border-radius: 10px;
  }
  .form-header {
    background-color: #0f17c3;
    height: 170px;
    padding: 1rem;
    position: relative;
  }
  .form-header h1 {
    font-weight: 600;
    margin-left: 40px;
    display: flex;
    transition: all 0.5s ease;
  }

  .bigger {
    font-size: 45px;
    margin: 0;
  }

  .form-header h1 img {
    margin-left: 1rem;
  }
  .form-header .border {
    position: absolute;
    top: 50px;
    margin-right: 1rem;
  }
  .form {
  }

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: column;
  }

  .input-container {
    width: 90%;
  }

  .form input {
    padding: 1rem;
    background: rgba(15, 23, 195, 0.1);
    border: none;
    border-bottom: 2px solid #0f17c3;
    color: #52525c;
    width: 85%;
  }

  .autocomplete-dropdown-container {
    color: #000;
    overflow-x: hidden;
    bakground: #fff;
    height: 100px;
  }

  .suggestions {
    margin: 1rem;
  }

  .suggestions span {
    display: flex;
    align-items: center;
  }

  .suggestions img {
    width: 40px;
    margin-right: 1rem;
  }

  .btn-container {
    position: relative;
    margin-bottom: 1rem;
  }

  .btn-container button {
    border: none;
    color: #fff;
    padding: 0.8rem;
    border-radius: 5px;
    margin-left: 1rem;
  }

  .next-btn {
    background-color: #0f17c3;
  }
  .prev-btn {
    background-color: #2196f3;
  }

  .select-passengers-container {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .select-passengers-header {
    border-bottom: 1px solid rgba(15, 23, 195, 0.5);
    display: flex;
    justify-content: center;
    text-align: center;
    width: 90%;
    align-self: center;
    color: #000;
  }

  .select-passengers-header p {
    color: #52525c;
    font-size: 15px;
  }

  .select-passengers {
    display: flex;
    margin: 1rem;
    color: #52525c;
    justify-content: space-between;
  }

  .select-passengers h5 {
    color: #52525c;
  }

  .passenger-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select-passengers button {
    margin-left: 1rem;
    margin-right: 1rem;
    background: rgba(14, 97, 217, 0.1);
    color: rgba(14, 97, 217, 0.8);
    border: 1px solid rgba(14, 97, 217, 0.8);
  }

  .join-bus-container {
    margin-bottom: 2rem;
  }

  .bus-type {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bus-details {
    border-bottom: 1px solid #333;
    width: 60%;
  }

  .bus-details h4 {
    color: #000;
    margin: 0.8em 0 !important;
    font-weight: 600;
  }

  .bus-details h6 {
    color: #52525c;
    margin: 1em 0 !important;
    font-weight: 100;
  }

  .bus-type-desc {
    padding: 1rem;
    color: #000;
  }

  .bus-type-desc h1 {
    color: #000;
  }

  .bus-type-desc p {
    font-size: 12px;
  }

  .img-desc {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-desc img {
    width: 200px;
  }

  .content-desc {
    display: flex;
    justify-content: space-between;
  }

  .content-desc h6,
  .content-desc h3,
  .content-desc h4 {
    margin: 0;
  }
  .content-desc h6 {
    font-weight: lighter;
  }

  @media screen and (max-width: 768px) {
    .location-card {
      width: 90%;
    }
    .form-header {
      height: 110px;
    }
    .form-header h1 {
      font-size: 20px;
    }
    .bigger {
      font-size: 30px !important;
      margin: 0;
    }
    .form-header h1 img {
      width: 20px;
    }
    .form-header .border {
      top: 38px;
      height: 50px;
    }
  }
`;
