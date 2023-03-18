
import StoreItems from '../../components/StoreItems/StoreItems';
import { useBooks } from '../../context/BooksContext';

const Store = () => {

  const { books } = useBooks();
  return (
    <div>
      <StoreItems />
    </div>
  );
}

export default Store