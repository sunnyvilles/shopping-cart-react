import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../appContext.js";

function Header() {
  const { cartItems } = useContext(appContext);

  const cartIconFilled =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <header>
      <Link to="/">
        <h1>Pictures</h1>
      </Link>
      <Link to="/cart">
        <i className={`${cartIconFilled} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
