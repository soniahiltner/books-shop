import { useBooks } from "../../context/BooksContext";
import styles from "./CartButton.module.css";

const CartButton = ({ item }) => {
  const { cart, toggleCartItem } = useBooks();

  let productToBuy = cart.find((product) => product.id === item.id);
  return (
    <button
      className={
        productToBuy ? styles.remove : styles.addToCart
      }
      onClick={() => toggleCartItem(item)}
    >
      {productToBuy
        ? "Eliminar del carrito"
        : "Añadir al carrito"
       }
    </button>
  )

}
export default CartButton;
