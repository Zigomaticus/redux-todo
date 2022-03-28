import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/reducers";
import { logger, scheduler, extractor, resetter } from "./middleware";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(
    extractor(logger, "logger"),
    extractor(scheduler, "clearScheduler"),
    extractor(thunk, "thunk")
  )
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
