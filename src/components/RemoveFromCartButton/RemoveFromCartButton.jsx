import { useBooks } from "../../context/BooksContext";
import styles from "./RemoveFromCartButton.module.css";

const RemoveFromCartButton = ({ item }) => {

  const { cart, removeFromCart } = useBooks();

  let productToDelete = cart.find(product => product.id === item.id);

  return <button
    className={styles.removeFromCart}
    onClick={() => removeFromCart(item)}
  >
    Eliminar
  </button>
}

export default RemoveFromCartButton