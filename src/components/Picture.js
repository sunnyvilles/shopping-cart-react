import React from "react";

function Picture({ picture }) {
  return (
    <div className="image-container">
      <img src={picture.thumbnailUrl} className="" alt="empty space" />
    </div>
  );
}

export default Picture;
