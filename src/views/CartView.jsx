import React, { useContext } from "react";
import { CartContext } from "../components/context/cart-context";
import PizzaItem from "../components/pizzaItem/PizzaItem";

const CartView = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      {state.orders.map((order, index) => (
        <PizzaItem key={index} {...order} isShopCard={true} />
      ))}
    </div>
  );
};

export default CartView;
