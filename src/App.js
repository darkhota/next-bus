import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Landing from "./components/pages/Landing";
import NavBar from "./components/layout/NavBar";
import Dash from "./components/pages/Dashboard";
import MyTrips from "./components/pages/MyTrips";
import AccessCards from "./components/pages/AccessCards";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn}></Route>
        <Route path="/home" component={Landing}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        {/* <Route path="/dashboard" component={Dash}></Route> */}
        <NavBar>
          <Switch>
            <Route path="/dashboard" component={Dash}></Route>
            <Route path="/my-trips" component={MyTrips}></Route>
            <Route path="/access-cards" component={AccessCards}></Route>
          </Switch>
        </NavBar>

        <Redirect to="/sign-in" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
