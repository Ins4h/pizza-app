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
      <Route path="/" exact>
        <ViewButton isGrid={isGrid} setIsGrid={setIsGrid} />
        <PizzaList isGrid={isGrid} />
      </Route>
      <Route path="/cart" component={CartView} exact />
    </div>
  );
}

export default PizzaOrdering;
