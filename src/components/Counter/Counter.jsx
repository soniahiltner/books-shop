import { useBooks } from "../../context/BooksContext";
import styles from "./Counter.module.css";

const Counter = ({ item }) => {
  const { cart, setCart } = useBooks();

  const decreaseQuantity = (item) => {
    const productInCart = cart.find((product) => product.id === item.id);

    productInCart.quantity > 1 &&
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? {
                ...item,
                quantity: productInCart.quantity - 1,
              }
            : product
        )
      );
  };
  const increaseQuantity = (item) => {
    const productInCart = cart.find((product) => product.id === item.id);

    setCart(
      cart.map((product) =>
        product.id === item.id
          ? {
              ...item,
              quantity: productInCart.quantity + 1,
            }
          : product
      )
    );
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.counterButton}
        onClick={() => decreaseQuantity(item)}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        className={styles.counterButton}
        onClick={() => increaseQuantity(item)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
