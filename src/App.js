import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Landing from "./components/pages/Landing";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/sign-in" component={SignIn}></Route>
        <Route path="/home" component={Landing}></Route>
        <Route path="/nav" component={NavBar}></Route>
        <Redirect to="/sign-in" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
