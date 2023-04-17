
import StoreItems from '../../components/StoreItems/StoreItems';

import styles from './Store.module.css'

const Store = () => {

  return (
    <div className={styles.store}>
      <StoreItems />
    </div>
  );
}

export default Store