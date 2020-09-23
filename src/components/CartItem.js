import React, { useContext } from "react";
import { appContext } from "../appContext.js";

function CartItem({ cartItem }) {
  const { addRemoveFromCart } = useContext(appContext);
  return (
    <div class="cart-item-container">
      <div class="position-relative">
        <img alt={cartItem.id} src={cartItem.thumbnailUrl} />
        <i
          className="ri-delete-bin-line delete-from-cart"
          onClick={() => addRemoveFromCart(cartItem)}
        />
      </div>
      <span>2 €</span>
    </div>
  );
}

export default CartItem;
