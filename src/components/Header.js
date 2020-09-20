import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Pictures</h1>
      </Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
}

export default Header;
