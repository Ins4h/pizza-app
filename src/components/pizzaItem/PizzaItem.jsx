import React, { useContext } from "react";
import styles from "./PizzaItem.module.scss";
import { CartContext } from "../context/cart-context";
import { v4 as uuidv4 } from "uuid";

function PizzaItem({
  img,
  name,
  desc,
  priceBig,
  priceSmall,
  grid,
  price,
  id,
  isShopCard,
  quantity
}) {
  // window.addEventListener("popstate", () => {
  //   console.log(window.location.pathnam);
  // });

  const { dispatch } = useContext(CartContext);
  const handleClick = (desc, img, name, price) =>
{  
  // debugger;
  dispatch({
      type: "addPizza",
      newPizza: {
        name,
        desc,
        img,
       price,
       quantity: 1,
        id: uuidv4(),
      },
    })
  };

  const removeOrder = ({id, name, price}) => {
    dispatch({
      type: "removePizza",
      pizzaRemove: {
        id,
        name,
        price
      }
    });
  };
  return (
    <div
      className={grid ? `${styles.grid} ${styles.pizza_box}` : styles.pizza_box}
    >
      <img className={styles.pizza_image} src={img} alt="asd" title="tytul" />
      <div className={styles.pizza_wrapper}>
        <h3 className={styles.pizza_name}>{name}</h3>
        <p className={styles.pizza_descr}>{desc}</p>
      </div>
      <div className={styles.pizza_size}>
        {isShopCard === true ? (
          <>
            <button onClick={() => removeOrder({id, name, price})} className={styles.delete}>
              {quantity} {price}
              <br />X
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.size_button}
              onClick={() => handleClick(desc, img, name, priceSmall)}
            >
              {priceSmall}
            </button>
            <button
              className={styles.size_button}
              onClick={() => handleClick(desc, img, name, priceBig)}
            >
              {priceBig}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PizzaItem;
