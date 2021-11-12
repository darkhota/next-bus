import styled from "styled-components";
export const DashContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600;800&display=swap");
  display: flex;
  font-family: "Manrope", sans-serif;
`;
export const Sidebar = styled.div`
  width: 16rem;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(20, 46, 110, 0.25);
  height: 100vh;
  position: absolute;
  transition: 0.3s all ease-in-out;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
  }

  .logo img {
    width: 170px;
    height: 60px;
  }

  .sidebar-items {
    font-size: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.2s all ease-out;
    margin-top: 4rem;
  }
  .sidebar-item {
    list-style: none;
    margin-top: 0.5rem;
    width: 100%;
    height: 3rem;
  }
  .sidebar-item a,
  .sign-out a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s all ease-out;
    padding-left: 1rem;
    width: 80%;
  }

  .sidebar-item a span,
  .sign-out a span {
    margin-left: 1rem;
    font-size: 18px;
  }
  .sidebar-item a:hover {
    background: #0f17c3;
    color: #fff;
  }

  .sidebar-item a:hover > img {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
  }

  .sign-out {
    margin-top: 4rem;
    width: 83%;
    position: absolute;
    bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .sign-out a {

  }

  @media screen and (max-width: 768px) {
    width: 5rem;

    .sidebar-item a span {
      display: none;
    }
  }
`;
export const Nav = styled.div`
  background: #0f17c3;
  display: flex;
  width: 100%;
  height: 80px;
  padding-right: 2rem;
  align-items: center;
  justify-content: flex-end;

  .img-container {
    background: #0080ff;
    padding: 1rem;
    border-radius: 8px;
    margin-right: 2rem;
  }

  .img-container img {
    width: 20px;
  }

  h3 {
    color: #fff;
    font-weight: 300;
    display: flex;
    align-items: center;
  }
`;
