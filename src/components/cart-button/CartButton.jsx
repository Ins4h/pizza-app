import React, { useState ,useMemo} from 'react';
import styles from './CartButton.module.scss';
import { ImCart } from 'react-icons/im';
import CartContext from '../context/cart-context';

const CartButton = ({ cartCountProp ,children}) => {

const [cartCount, setCartCount] = useState(0);
const provided = useMemo(()=> ({
  value: cartCount,
  setValue: (value) => setCartCount(value)
}));

  return (
 <CartContext.Provider value={provided}>
  <div className={styles.container}>
    <p className={styles.counter}>{cartCount}</p>
  </div>
  </CartContext.Provider>
)};

export default CartButton;
