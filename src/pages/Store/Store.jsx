
import StoreItems from '../../components/StoreItems/StoreItems';
import { useBooks } from '../../context/BooksContext';
import styles from './Store.module.css'

const Store = () => {

  const { books } = useBooks();
  return (
    <div className={styles.store}>
      <StoreItems />
    </div>
  );
}

export default Store