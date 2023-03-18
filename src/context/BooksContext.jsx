import { createContext, useContext, useEffect, useState } from "react";



const BooksContext = createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("src/data/data.json")
    .then((res) => res.json())
      .then(data => setBooks(data))
  }, [])
    
  console.log(books)
  return <BooksContext.Provider value={{books}}>
      {children}
    </BooksContext.Provider>
  
}
