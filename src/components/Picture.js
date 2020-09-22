import React, { useState } from "react";

function Picture({ picture }) {
  const [hovered, setHovered] = useState(false);

  const likeIcon = hovered && <span className="like">like </span>;
  const cartIcon = hovered && <span className="cart">cart </span>;

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
