import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./appContext.js";
import "remixicon/fonts/remixicon.css";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  rootElement
);
