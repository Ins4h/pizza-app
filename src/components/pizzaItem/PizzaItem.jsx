import React, {useContext} from 'react';
import styles from './PizzaItem.module.scss';
import CartContext from '../context/cart-context';

function PizzaItem({ img, name, desc, priceBig, priceSmall,grid }) {

  const {setCartCount} = useContext(CartContext);
  const handleClick = () => setCartCount(prevState => prevState +1)


  return (
    <div className={(grid)?`${styles.grid} ${styles.pizza_box}`:styles.pizza_box}>
      <img className={styles.pizza_image} src={img} alt='asd' title='tytul' />
      <div className={styles.pizza_wrapper}>
        <h3 className={styles.pizza_name}>{name}</h3>
        <p className={styles.pizza_descr}>{desc}</p>
      </div>
      <div className={styles.pizza_size}>
        <button className={styles.size_button} onClick={handleClick}>{priceSmall}</button>
        <button className={styles.size_button} onClick={handleClick}>{priceBig}</button>
      </div>
    </div>
  );
}

export default PizzaItem;
