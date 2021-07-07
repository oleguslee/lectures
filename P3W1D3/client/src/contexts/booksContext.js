const { createContext, useState, useContext } = require("react");

const booksContext = createContext();

export function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <booksContext.Provider value={{ books, setBooks }}>
      {children}
    </booksContext.Provider>
  );
}

export const useBooksContext = () => useContext(booksContext);
