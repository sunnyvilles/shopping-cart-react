import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { appContext } from "../appContext.js";

function Picture({ picture }) {
  const [hovered, setHovered] = useState(false);
  const { likePicture, addRemoveFromCart } = useContext(appContext);

  const favClass = picture.isLiked ? "ri-heart-fill" : "ri-heart-line";
  const addedToCartClass = picture.addedToCart
    ? "ri-shopping-cart-fill"
    : "ri-shopping-cart-line";

  const likeIcon = hovered && (
    <i
      className={`${favClass} like`}
      onClick={() => likePicture(picture.id)}
    ></i>
  );

  const cartIcon = hovered && (
    <i
      className={`${addedToCartClass} cart`}
      onClick={() => addRemoveFromCart(picture)}
    />
  );

  return (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={picture.thumbnailUrl} className="" alt="empty space" />
      {likeIcon} {cartIcon}
    </div>
  );
}

Picture.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    isLiked: PropTypes.bool
  })
};

export default Picture;
