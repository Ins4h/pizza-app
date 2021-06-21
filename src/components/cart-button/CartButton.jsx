import React, { useContext } from "react";
import styles from "./CartButton.module.scss";
import { ImCart } from "react-icons/im";
import { CartContext } from "../context/cart-context";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Link to="/cart">
        <ImCart />
        <p className={styles.counter}>{state.orders.length}</p>
      </Link>
    </div>
  );
};

export default CartButton;
