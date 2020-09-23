import React, { useState, useContext } from "react";
import { appContext } from "../appContext.js";

function Picture({ picture }) {
  const [hovered, setHovered] = useState(false);
  const { likePicture } = useContext(appContext);

  const favClass = picture.isLiked ? "ri-heart-fill" : "ri-heart-line";

  const likeIcon = hovered && (
    <i
      className={`${favClass} like`}
      onClick={() => likePicture(picture.id)}
    ></i>
  );

  const cartIcon = hovered && <i className="ri-shopping-cart-line cart"></i>;

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

export default Picture;
