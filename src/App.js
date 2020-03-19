import React from "react";
import "./styles.css";
import Landing from "./components/Landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
