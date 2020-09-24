import React, { useContext } from "react";
import { appContext } from "../appContext.js";
import useHovered from "../hooks/useHovered.js";

function CartItem({ cartItem }) {
  const [hovered, ref] = useHovered();

  const { addRemoveFromCart } = useContext(appContext);
  const showDelIcon = hovered && "ri-delete-bin-line";

  return (
    <div class="cart-item-container" ref={ref}>
      <div class="position-relative">
        <img alt={cartItem.id} src={cartItem.thumbnailUrl} />
        <i
          className={`${showDelIcon} delete-from-cart`}
          onClick={() => addRemoveFromCart(cartItem)}
        />
      </div>
      <span>2 €</span>
    </div>
  );
}

export default CartItem;
