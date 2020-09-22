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

  return (
    <appContext.Provider value={{ pictures }}>
      {props.children}
    </appContext.Provider>
  );
}

export { ContextProvider, appContext };
