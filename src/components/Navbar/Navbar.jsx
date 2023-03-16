import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/movielist"}>Movies</Link>
      <Link to={"/favourites"}>Favourites</Link>
      <Link to={"/towatch"}>To Watch</Link>
    </nav>
  );
}

export default Navbar