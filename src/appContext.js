import React, { useState, useEffect } from "react";

const appContext = React.createContext();

function ContextProvider(props) {
  const [pictures, setPictures] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

  const addRemoveFromCart = (pictureObj) => {
    if (pictureObj.addedToCart) {
      pictureObj.addedToCart = false;
      setCartItems((prevCartItems) => {
        return prevCartItems.filter(
          (cartItem) => cartItem.id !== pictureObj.id
        );
      });
    } else {
      setCartItems((prevCartItems) => {
        pictureObj.addedToCart = true;
        return [...prevCartItems, pictureObj];
      });
    }
  };
  console.log(cartItems);

  return (
    <appContext.Provider
      value={{ pictures, likePicture, addRemoveFromCart, cartItems }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export { ContextProvider, appContext };
