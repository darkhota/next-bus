import styled from "styled-components";

export const Share = styled.div`
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

  h2 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }

  .img-cont img {
    width: 400px;
  }

  button {
    border: none;
    color: #fff;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
  }

  button p {
    margin-left: -6rem;
  }

  .copy-btn {
    background: #0f17c3;
  }

  .whatsapp-btn {
    background: #42c453;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
    p {
      text-align-last: center;
      font-size: 14px;
    }
    .img-container img {
      width: 200px;
    }
    button {
      width: 200px;
    }
    button p {
      margin-left: -1rem;
    }
    .img-cont img {
      width: 200px;
    }
  }
`;
