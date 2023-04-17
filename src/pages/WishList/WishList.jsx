import WishListItems from '../../components/WishListItems/WishListItems';
import styles from './WishList.module.css'


const WishList = () => {
  return (
    <div className={styles.wishList}>
      <WishListItems />
    </div>
  );
}

export default WishList