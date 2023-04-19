import { useBooks } from "../../context/BooksContext";
import styles from './CartTotal.module.css'

const CartTotal = () => {

  const { cart } = useBooks();
  
  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <div className={styles.cartTotal}>
      <h3>Total a pagar: { total }€</h3>
    </div>
  )
};

export default CartTotal;
