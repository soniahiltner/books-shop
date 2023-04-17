import { useBooks } from "../../context/BooksContext";
import styles from "./WishListButton.module.css";

const WishListButton = ({ item }) => {
 const { wishList, toggleWishListItem } = useBooks();

 let productToWish = wishList.find((product) => product.id === item.id);
 return (
   <button
     className={productToWish ? styles.remove : styles.addToWishList}
     onClick={() => toggleWishListItem(item)}
   >
     {productToWish
       ? "Eliminar de la lista de deseos"
       : "Añadir a la lista de deseos"}
   </button>
 );
};

export default WishListButton;
