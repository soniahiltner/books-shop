
import { Link } from "react-router-dom";
import { useBooks } from "../../context/BooksContext";
import styles from'./StoreItems.module.css'

const StoreItems = () => {

  const { books } = useBooks();
  return (
    <div className={styles.storeItems}>
      {books.map((item) => (
        <div className={styles.itemCard} key={item.id}>
          <div className={styles.imageContainer}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={styles.itemInfo}>
            <section className={styles.headInfo}>
              <h2>{item.title}</h2>
              <h4>
                {item.author} - {item.year}
              </h4>
            </section>

            <Link to={`/store/${item.id}` } className={styles.moreInfo}>
              Más información
            </Link>

            <button className={styles.addToWishList}>
              Añadir a lista de deseos
            </button>
            <button className={styles.addToCart}>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreItems