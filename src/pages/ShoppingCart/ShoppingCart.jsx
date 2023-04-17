import ShoppingCartItems from '../../components/ShoppingCartItems/ShoppingCartItems';
import styles from './ShoppingCart.module.css'

const ShoppingCart = () => {
  return (
    <div className={styles.shoppingCart}>
      <ShoppingCartItems />
    </div>
  );
}

export default ShoppingCart