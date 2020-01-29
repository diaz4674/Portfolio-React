import React from "react";
import "./styles.css";
import Landing from "./components/Landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Topbar />
          <Route path="/" component={Landing} />
          <Route path="/techstack" component={TechStack} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
