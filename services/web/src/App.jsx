import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import store from "./store";

import "./App.css";

const Homepage = lazy(() => import("./components/pages/HomePage"));
const Articlepage = lazy(() => import("./components/pages/Articles"));

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={<div className="loading-spinner" />}>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Homepage {...props} />}
            />
            <Route
              exact
              path="/article"
              component={(props) => <Articlepage {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
