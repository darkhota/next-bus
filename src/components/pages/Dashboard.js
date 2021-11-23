import React from "react";
import { Dash } from "../styles/Dash.styled";

const Dashboard = () => {
  return (
    <Dash>
      <img src="img/initial-dash.png" alt="imggss" />
      <h1>New to next-bus?</h1>
      <h2>You are in the right place!</h2>
      <button>Find a bus</button>
    </Dash>
  );
};

export default Dashboard;
