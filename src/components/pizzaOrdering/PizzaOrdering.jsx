import React, { useState } from "react";
import Header from "../header/Header";
import PizzaList from "../pizzaList/PizzaList";
import ViewButton from "../view-button/ViewButton";
import { Route } from "react-router-dom";
import CartView from "./../../views/CartView";
function PizzaOrdering() {
  const [isGrid, setIsGrid] = useState(false);
  return (
    <div>
      <Header title="Witaj w naszej pizzero" />
        <ViewButton isGrid={isGrid} setIsGrid={setIsGrid} />
        <Route path="/" exact>
        <PizzaList isGrid={isGrid} />
      </Route>
      <Route path="/cart"  exact >
        <CartView isGrid={isGrid}/>
      </Route>
    </div>
  );
}

export default PizzaOrdering;
