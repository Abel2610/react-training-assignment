import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import App from "./step4/Login";
import registerSericeWorker from "./registerServiceWorker";

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + 1 };
    default:
      return state;
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

// Store
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerSericeWorker();
