import { createContext, useContext, useState } from "react";

const booksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  return (
    <booksContext.Provider value={{ books, setBooks }}>
      {children}
    </booksContext.Provider>
  );
};

export const useBooksContext = () => useContext(booksContext);
