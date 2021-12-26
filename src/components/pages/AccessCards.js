import React from "react";
import { Cards } from "../styles/Cards.styled";
import CreditCardForm from "../credit-card/CreditCardForm";

const AccessCards = () => {
  const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

  const radioHandler = status => {
    setStatus(status);
  };

  return (
    <Cards>
      <div className="container">
        <div className="left">
          <h2>Fund your NextBus Access Card for seamless payment</h2>
          <div className="image-container">
            <img src="img/atm-card.png" alt="card" />
          </div>
          <h3>Your Trip Details</h3>
          <div className="details-container">
            <div className="row">
              <h5>Bus type:</h5>
              {/* <h5>Ikotun Market</h5> */}
              <img src="img/bus-type.png" alt="bus type" />
            </div>
            <div className="row">
              <h5>Pick up Location:</h5>
              <h5>Ikotun Market</h5>
            </div>
            <div className="row">
              <h5>Drop off Location:</h5>
              <h5>12, Moloney streer</h5>
            </div>
            <div className="row">
              <h5>Number of Passengers:</h5>
              <h5>2</h5>
            </div>
            <div className="row">
              <h5>Amount Payable:</h5>
              <h5>N3,200</h5>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Payment Method</h2>

          <div className="method">
            <input
              type="radio"
              name="card"
              id="card"
              checked={status === 1}
              onClick={e => radioHandler(1)}
            />{" "}
            <span> Card</span>
            <img src="img/credit-card.png" alt="" />
            <input
              type="radio"
              name="Bank Transfer"
              id="bank-transfer"
              checked={status === 2}
              onClick={e => radioHandler(2)}
            />{" "}
            <span> Bank Transfer</span>
            <img src="img/bank-transfer-out.png" alt="" />
          </div>
          {status === 1 && (
            <div className="form">
              <h1 className="form-title">Payment Details</h1>
              <p>Fund your Access Card to pay for your next trip</p>
              <CreditCardForm />
            </div>
          )}

          {status === 2 && (
            <div className="form">
              <h1 className="form-title">Bank Transfer Details</h1>
              <p>Fund your Access Card to pay for your next trip</p>
              <form action="">
                <div className="input-group">
                  <h5>Amount</h5>
                  <input type="number" />
                </div>
                <div className="input-group">
                  <h5>Bank</h5>
                  <input type="number" />
                </div>
                <div className="input-group">
                  <h5>Account number</h5>
                  <input type="number" />
                </div>
                <button className="pay-btn pay-btn2">Pay NGN 3,200.00</button>
              </form>
            </div>
          )}
          <div className="form-footer">
            <img src="img/shield.png" alt="" />{" "}
            <span>Payments are secure and encrypted</span>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default AccessCards;
