import { useParams } from "react-router-dom";
import { useBooks } from "../../context/BooksContext";
import styles from './Book.module.css'

const Book = () => {
  const { books } = useBooks();
  const { id  } = useParams();

  const bookId = parseInt(id);
  
  const book = books.find((item) => item.id === bookId)
 
  return (
    <div className={styles.book}>
      <h2>{book?.title}</h2>
      <p>{book?.synopsis}</p>
      <img className={styles.image} src={book?.img} alt="" />
    </div>
  );
};

export default Book;
