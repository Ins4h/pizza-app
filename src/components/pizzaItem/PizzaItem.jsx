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
}) {
  window.addEventListener("popstate", () => {
    console.log(window.location.pathnam);
  });

  const { state, dispatch } = useContext(CartContext);
  const handleClick = (desc, img, name, price) =>
    dispatch({
      type: "addPizza",
      newPizza: {
        name,
        desc,
        img,
        price,
        id: uuidv4(),
      },
    });

  const removeOrder = (key) => {
    dispatch({
      type: "removePizza",
      pizzaRemove: key,
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
            <button onClick={() => removeOrder(id)}>
              {price}
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
