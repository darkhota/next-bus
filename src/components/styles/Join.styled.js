import styled from "styled-components";

export const Join = styled.div`
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

  .ride-details {
    background: #fff;
    padding: 1.5rem;
    width: 400px;
    border-radius: 10px;
  }

  .bus-desc,
  .trip-desc,
  .driver-desc,
  .price-desc,
  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .trip-desc,
  .driver-desc {
    border-bottom: 0.5px solid rgba(82, 82, 92, 0.5);
  }

  .right-align {
    text-align: right;
  }

  .bus-desc img {
    width: 100px;
  }

  .trip-desc img,
  .bus-desc img,
  .driver-desc img {
    object-fit: contain;
  }
  a {
    text-decoration: none;
    color: #0f17c3;
  }
  h3 {
    font-weight: 600;
  }
  h3,
  p {
    color: #52525c;
  }
`;
