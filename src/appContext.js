import React, { useState, useEffect } from "react";

const appContext = React.createContext();

function ContextProvider(props) {
  const [pictures, setPictures] = useState([]);

  //runs when the component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setPictures(data));
  }, []);

  const likePicture = (id) => {
    setPictures((prevPictures) => {
      const updatedPictures = prevPictures.map((picture) => {
        if (picture.id === id) {
          picture.isLiked = !picture.isLiked;
          console.log(picture);
        }
        return picture;
      });

      return updatedPictures;
    });
  };

  return (
    <appContext.Provider value={{ pictures, likePicture }}>
      {props.children}
    </appContext.Provider>
  );
}

export { ContextProvider, appContext };
