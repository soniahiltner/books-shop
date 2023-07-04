import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



const BooksContext = createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useLocalStorage('shoppingCart', []);
  const [wishList, setWishList] = useLocalStorage('wishList', []);


  useEffect(() => {
    fetch("src/data/data.json")
      .then((res) => res.json())
      .then(data => setBooks(data))
  }, []);


  //Add/remove from cart
  const addToCart = (product) => {
    setCart([
      ...cart,
      product
    ])
  };
  const removeFromCart = (product) => {
    let productToDelete = cart.find((item) => item.id === product.id);
    setCart(cart.filter((item) => item.id != productToDelete.id));
  };

  //Remove all from cart
  const removeAllFromCart = () => {
    setCart([])
  }

  //ToggleCartItem
  const toggleCartItem = (product) => {
    let productToDelete = cart.find((item) => item.id === product.id);
    if (productToDelete) {
      setCart(cart.filter((item) => item.id != productToDelete.id));
      
    } else {
      setCart([...cart, product]);
    
    }
  };

  //Add/ remove from wishlist
  const addToWishlist = (product) => {
    setWishList([
      ...wishList,
      product
    ]);
  };
  const removeFromWishList = (product) => {
    const productToDelete = cart.find((item) => item.id === product.id);
    setWishList(wishList.filter((item) => item.id != product.id));
  };
  //Toggle wishlist item
  const toggleWishListItem = (product) => {
    let productToDelete = wishList.find((item) => item.id === product.id);
    if (productToDelete) {
      setWishList(wishList.filter((item) => item.id != productToDelete.id));
    } else {
      setWishList([...wishList, product]);
    }
  };


  return (
    <BooksContext.Provider
      value={{
        books,
        cart,
        setCart,
        wishList,
        setWishList,
        addToCart,
        removeFromCart,
        toggleCartItem,
        addToWishlist,
        removeFromWishList,
        toggleWishListItem,
        removeAllFromCart
      }}
    >
      {children}
    </BooksContext.Provider>
  );
  
}
