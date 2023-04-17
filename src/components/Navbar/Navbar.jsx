import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

  const styleNavLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blueviolet"
    };
  }
  const styleCartLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "red" : ""
    }
  }

  return (
    <div className={styles.navbar}>
      <nav>
        <NavLink to={"/"} style={styleNavLink}>
          Inicio
        </NavLink>
        <NavLink to={"/store"} style={styleNavLink}>
          Tienda
        </NavLink>
        <NavLink to={"/wishlist"} style={styleNavLink}>
          Lista de deseos
        </NavLink>
      </nav>
      <div className={styles.cartLink}>
        <NavLink to={"/shoppingcart"} style={styleCartLink}>
          🛒
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar