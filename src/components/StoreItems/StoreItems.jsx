import { useBooks } from "../../context/BooksContext";
import styles from'./StoreItems.module.css'

const StoreItems = () => {

  const { books } = useBooks();
  return (
    <div className={styles.storeItems}>
      {books.map((item) => (
        <div className={styles.itemcard} key={item.id}>
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="itemInfo">
            <h2>{item.title}</h2>
            <h4>
              {item.author} - {item.year}
            </h4>
            <h4>Género: {item.category} </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreItems