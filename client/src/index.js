import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import App from "./App";
import Blocks from "./Blocks/Blocks";
import ConductTransaction from "./ConductTransaction/ConductTransaction"
import TransactionPool from "./TransactionPool/TransactionPool"


import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/blocks" component={Blocks} />
        <Route path="/conduct-transaction" component={ConductTransaction} />
        <Route path="/transaction-pool" component={TransactionPool} />
      </Switch> 
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
