import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/store"}>Store</Link>
      <Link to={"/wishlist"}>Wish List</Link>
      </nav>
      <div className={ styles.cartLink}>
        <Link to={"/shoppingcart"} >🛒</Link>
      </div>
    </div>
    
  );
}

export default Navbar