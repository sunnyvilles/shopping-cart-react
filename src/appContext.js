import React from "react";

const appContext = React.createContext();

function ContextProvider(props) {
  return <appContext.Provider value="">{props.children}</appContext.Provider>;
}

export { ContextProvider, appContext };
