import React, { useContext } from "react";
import { appContext } from "../appContext";
import Picture from "../components/Picture.js";

function Photos() {
  const { pictures } = useContext(appContext);
  const images = pictures.map((img) => <Picture key={img.id} picture={img} />);
  return <div id="picutres-list">{images}</div>;
}

export default Photos;
