import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/store"}>Store</Link>
      <Link to={"/wishlist"}>Wish List</Link>
      </nav>
      <span>
        <Link to={"/shoppingcart"}>🛒</Link>
      </span>
    </div>
    
  );
}

export default Navbar