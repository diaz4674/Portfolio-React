import React from "react";
import "./styles.css";
import Professional from "./components/Professional/Professional";
import Landing from "./components/Landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Professional} />
					<Route path="/creativeMode" component={Landing} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
