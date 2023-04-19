import { useBooks } from "../../context/BooksContext";
import CartTotal from "../CartTotal/CartTotal";
import Checkout from "../Checkout/Checkout";
import Counter from "../Counter/Counter";
import RemoveAllFromCart from "../RemoveAllFromCart/RemoveAllFromCart";
import RemoveFromCartButton from "../RemoveFromCartButton/RemoveFromCartButton";
import styles from "./ShoppingCartItems.module.css";

const ShoppingCartItems = () => {
  const { cart } = useBooks();
  console.log(cart)
  return (
    <div>
      {cart.length > 0 && (
        <div>
          <h1>Mi carrito</h1>
          <RemoveAllFromCart />
          <div className={styles.shoppingCartItems}>
            {cart?.map((item) => (
              <div className={styles.itemCard} key={item.id}>
                <div className={styles.imageContainer}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.itemInfo}>
                  <section className={styles.headInfo}>
                    <h2>{item.title}</h2>
                    <h4>
                      {item.author} - {item.year}
                    </h4>
                    <h4>Precio: {item.price}€</h4>
                  </section>
                  <Counter item={item} />
                  <div className={styles.subtotal}>
                    <h3>Subtotal: {item.price * item.quantity}€</h3>
                  </div>
                  <RemoveFromCartButton item={item} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <CartTotal />
            <Checkout />
          </div>
         
        </div>
      )}
      {cart.length === 0 && (
        <div className={styles.emptyCart}>
          <h2>Tu carrito está vacío.</h2>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartItems;
