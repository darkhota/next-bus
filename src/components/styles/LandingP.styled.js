import styled from "styled-components";

export const LandingP = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;600;800&display=swap");
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0;
  font-family: "Manrope", sans-serif;
  color: #222;
  overflow-x: hidden;
 

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    width: 101%;
  }

  .logo {
    width: 200px;
  }

  .btn {
    padding: 0.7rem;
    border-radius: 4.33965px;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    width: 116px;
  }

  .btn-white {
    color: #0f17c3;
    background-color: #fff;
    border: 1px solid #0f17c3;
    margin-right: 1rem;
  }

  .btn-blue {
    color: #fff;
    background-color: #0f17c3;
    border: none;
  }

  .nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    transition: all 0.3s ease-in-out;
  }

  .nav ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }

  .nav a {
    color: #0f17c3;
    text-decoration: none;
    padding: 7px 15px;
    transition: all 0.3s ease-in-out;
  }

  .hero {
    background-image: url("/img/Black-passengers.png");
    height: 100vh;
    background-position: bottom center;
    background-repeat: none;
    background-size: contain;
    background-repeat: no-repeat;
    color: #fff;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    position: relative;
    margin-bottom: 20px;
    z-index: -2;
  }

  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    linear-gradient(1.48deg,rgba(0, 0, 0, 0.5)1.31%,rgba(0, 0, 0, 0)85.13%)z-index: -1;
  }

  .hero .container {
    margin-top: 6rem;
    margin-left: 120px;
    width: 600px;
  }

  .hero h1 {
    font-size: 65px;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .hero p {
    font-size: 23px;
    letter-spacing: 1px;
  }

  .hero button {
      width: 160px;
      padding: 1rem;
  }

  .content-1 p,
  .content-2 p {
      color: #0080FF;
      letter-spacing: 0.1em;
      font-weight: bold;
      font-size: 14px;
      margin-top: 6rem;
  }

  .content-1 h1 {
      font-weight: 800;
      font-size: 60px;
      width: 700px;
      margin-top: 1rem;
      line-height: 1.1;
  }

  .content-1 h3 {
      font-weight: 300;
      width: 900px;
      margin-bottom: 3rem;
  }
.feature-section {
    margin: -1rem;
    display: flex;
    justify-content: space-between;
}

.feature-card {
    border: 2px solid #0080ff;
    padding: 2rem;
    margin: 1rem;
    width: 400px;
    border-radius: 10px;
}

.feature-card h4 {
    color: #0080ff;
    font-weight: bold;
    line-height: 30px;
    margin-top: 3.5rem;
}

.mt-2{
    margin-top: 4.2rem !important;
}

.feature-card h5{
    font-weight: 300;
    margin-top: 1.5rem;
}

.card-img {
    display: flex;
    justify-content: center;
    align-items-center;
}

.card-img img {
    width: 200px;
}

.content-2 {
    background: #F0F3F5;
    padding: 4rem;
    margin: 6rem 0;
}

.content-2 p{
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.why {
    display: flex;
    justify-content: space-between;
}

.why button {
    height: fit-content;
    align-self: center;
}

.content-3 .header-section {
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
margin-bottom: 4rem;
}

.content-3 .header-section h2 {
    color: #0080ff;
    font-size: 35px;
    width: 800px;
    align-self: center;
    margin-bottom: 0;
}

.content-section-1 {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 8rem;
}

.content-section-1 img {
    width: 350px;
    height: 250px;
}

.content-section-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon-bg {
    background:rgba(0, 128, 255, 0.1);
    padding: 0.8rem 1rem;;
    border: none;
    border-radius:13.9782px;
}


.perk-container{
    display: flex;
    align-items:center;
    justify-content:center;
}

.content-4{
    margin-top: 4rem;
    background-color: #2028eb;         
    padding: 3rem 3rem 5rem 3rem;;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.content-4 h1{
    color: #fff;
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 1rem;
}
.light-btn {
    background-color: #2196f3;
    border:none;
    color: #fff;
}

footer {
    display: flex;
    justify-content: space-between;
    margin: 6rem 6rem 2rem 4rem;
}

footer img{
    height: 80px;
}

footer ul {
    list-style: none;
    line-height: 2.3;
}

.list-flex {
    display: flex;
    justify-content: space-between;
    margin: auto;
}

.footer-2{
    border-top:  0.5px solid rgba(0, 0, 0, 0.5);
}

.footer-2-container {
margin: 1rem 8rem;
display: flex;
justify-content: space-between;
}

.footer-2-container img {
    margin: 0 0.5rem;;
}
.responsive-nav{
    display: none;
}
.nav .container #hidden{
    display: flex;
}

@media (max-width: 768px) {
    .container{
        margin: 1rem;
    }
    .hero{
        background-size: cover;
    }

    .hero .container {
        margin-top: 4rem;
        margin-left: 20px;
      }
      .hero h1 {
        font-size: 25px;
      }

      .hero p {
        font-size: 16px;
      }
      .content-1 h1 {
        font-size: 20px;
    }
    .content-1 h3 {
        width: 320px;
        font-size: 18px;
    }

    .feature-section {
        margin: -1rem;
        flex-direction: column;
        align-items: center;
    }

    .card-img img {
        width: 100px;
    }

    .feature-card {
        width: 200px;
        padding: 1.5rem;
    }

    .content-2 {
        padding: 2rem;
    }
    .why h2{
        font-size: 20px;
    }

    .content-3 .header-section h2 {
        font-size: 25px;
        width: 300px;
    }
    .content-3 .header-section p {
        font-size: 15px;
    }

    .content-section-1 {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 4rem;
        flex-direction: column;
    }

    .content-section-1 img {
        width: 250px;
        height: 180px;
    }

    .content-section-2 {
        flex-direction: column;
    }

    .content-section-2 p {
        width: 250px;
        text-align: center;
    }

    .content-4 h1{
        font-size: 30px;
    }
    footer {
        align-items: center;
        flex-direction: column;
    }
    
    footer img{
        height: 50px;
        width: 150px;
        align-self:end;
    }

    .footer-2-container {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        }
        
        .footer-2-container img {
            margin: 0 0.5rem;
            width: 17px;
        }

        .copyright{
            font-size: 12px;
        }

        .responsive-nav{
            display: flex;
        }
        .responsive-nav button{
            margin-right: 20px;
            border: none;
            background: transparent;
        }
        .nav .container ul{
            display: none;
        }
        .nav .container #hidden {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0px;
            top: 70px;
            height: 230px;
            width: 100%;
            background-color: #0f17c3;
           
        }

        .nav .container #hidden a{
            color: #fff;
        }

        .nav .container #hidden li{
            margin: 0.5rem;
        }
        .logo {
            width: 100px;
          }
          .nav{
              background-color: rgba(0,128,255,0.1);
              position: absolute;
          }
}

`;
