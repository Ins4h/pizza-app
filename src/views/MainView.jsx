import React from "react";
import CartButton from "./../components/cart-button/CartButton";
import PizzaOrdering from "./../components/pizzaOrdering/PizzaOrdering";

const MainView = () => {
  return (
    <div className="App">
      <CartButton />
      <PizzaOrdering />
    </div>
  );
};

export default MainView;
