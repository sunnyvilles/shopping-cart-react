import React from "react";

import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header.js";
import Cart from "./pages/Cart.js";
import Photos from "./pages/Photos.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
