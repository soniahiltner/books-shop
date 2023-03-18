
import { useBooks } from '../../context/BooksContext';
import styles from './Home.module.css'

const Home = () => {

  const { books } = useBooks();
 
  return (
    <div className={styles.home}>
      <h1>THE TOP 100 BEST MOVIES EVER MADE</h1>
    </div>
  );
}

export default Home