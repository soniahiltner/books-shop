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
      <div className={styles.bookContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={book?.img} alt={book?.title} />
        </div>
        <div className={styles.bookInfo}>
          <h2>{book?.title}</h2>
          <p>{book?.synopsis}</p>
          <h3>Género: {book?.category}</h3>
          <h3>Precio: {book?.price}€</h3>
          <button className={styles.addToWishList}>
            Añadir a lista de deseos
          </button>
          <br/>
          <button className={styles.addToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
