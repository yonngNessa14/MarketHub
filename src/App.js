import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "@auth/login";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
