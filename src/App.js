import React from "react";
import "./styles.css";
import Landing from "./components/Landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Topbar />
          <Route path="/" component={Landing} />
          <Route path="/techstack" component={Tech} />
          <Route path="/projects" component={Projects} />
        </Switch> */}
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Tech">
            <Tech />
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
