import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/store"}>Tienda</Link>
        <Link to={"/wishlist"}>Lista de deseos</Link>
      </nav>
      <div className={styles.cartLink}>
        <Link to={"/shoppingcart"}>🛒</Link>
      </div>
    </div>
  );
}

export default Navbar