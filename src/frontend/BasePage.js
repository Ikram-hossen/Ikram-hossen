import React from "react";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect
    } from "react-router-dom";
import Home from "./modules/Home/Home";


const BasePage = () => {
      return (
            <Router>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Redirect to="/" component={Home}/> 
                  </Switch>
            </Router>
      );
}
export default BasePage;