import styled from "styled-components";
export const DashContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600;800&display=swap");

  font-family: "Manrope", sans-serif;
  .inner-container {
    position: relative;
  }

  .sidebar.active ~ .main-content {
    width: calc(100% - 16rem);
    left: 16rem;
    transition: all 0.5s ease;
  }

  sidebar.active ~ .nav {
    width: calc(100% - 16rem);
  }

  .sidebar {
    width: 5rem;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(20, 46, 110, 0.25);
    height: 100vh;
    position: absolute;
    transition: 0.3s all ease-in-out;
  }

  .sidebar.active {
    width: 16rem;
    transition: 0.3s all ease-in-out;
  }
  .sidebar.active .sidebar-item a span {
    display: block;
  }
  .sidebar.active .logo img {
    opacity: 1;
    pointer-events: none;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
  }

  .logo img {
    width: 170px;
    height: 60px;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar.active .menu-icon {
    left: 85%;
  }
  .menu-icon {
    position: absolute;
    color: #0f17c3;
    left: 40%;
  }

  .sidebar-items {
    font-size: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.2s all ease-out;
    margin-top: 4rem;
    margin-left: -20px;
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
    display: none;
    transition: all 0.5s ease;
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
    .logo img {
      display: none;
    }
  }

  .main-content {
    position: absolute;
    height: 100vh;
    width: calc(100% - 5rem);
    left: 5rem;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    .main-content {
      width: calc(100% - 5rem);
      left: 5rem;
      transition: all 0.5s ease;
    }
  }

  .nav {
    background: #0f17c3;
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
  }

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
  @media (max-width: 768px) {
    h3 {
      font-size: 90%;
    }
    .img-container img {
      width: 15px;
    }
    .img-container {
      padding: 0.5rem;
      margin-right: 1rem;
    }
    .sidebar.active ~ .main-content {
      width: calc(100% - 5rem);
      left: 5rem;
      z-index: -1;
      transition: all 0.5s ease;
    }
  }
`;

export const Layout = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    .inner-container {
      left: 0%;
    }
  }
`;
