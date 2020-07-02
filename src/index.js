import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { reducers } from "./components/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
