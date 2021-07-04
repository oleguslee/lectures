import React, { useState, useContext } from "react";

const titleContext = React.createContext();

function Wrapper({ children }) {
  const [value, setValue] = useState({ title: "Жизнь взаймы" });

  return (
    <titleContext.Provider value={value}>{children}</titleContext.Provider>
  );
}

const useTitleContext = () => useContext(titleContext);

export { useTitleContext };
export default Wrapper;
