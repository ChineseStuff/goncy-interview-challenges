import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./shared/ErrorBoundary";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root"),
);
