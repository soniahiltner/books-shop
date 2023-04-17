
import { useBooks } from "../../context/BooksContext";
import CartTotal from "../CartTotal/CartTotal";
import Counter from "../Counter/Counter";
import styles from './ShoppingCartItems.module.css'

const ShoppingCartItems = () => {

  const {
    cart,
    addToCart,
    removeFromCart,
  } = useBooks();

  return (
    <div>
      <h1>Mi carrito</h1>
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
              <h3>Subtotal: {item.price * item.quantity }€</h3>
            </div>
          </div>
        </div>
      ))}
      </div>
      <CartTotal />
    </div>
    
  );
}

export default ShoppingCartItems