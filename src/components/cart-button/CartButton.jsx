import React, {useContext} from 'react';
import styles from './CartButton.module.scss';
import { ImCart } from 'react-icons/im';
import CartContext from '../context/cart-context';

const CartButton = () => {

const {cartCount} = useContext(CartContext)

  return (
  <div className={styles.container}>
    <ImCart/>
    <p className={styles.counter}>{cartCount}</p>
  </div>
)};

export default CartButton;
