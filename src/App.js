import React, { useState } from "react";
import CartButton from "./components/cart-button/CartButton";
import PizzaOrdering from "./components/pizzaOrdering/PizzaOrdering";
import CartContext from "./components/context/cart-context";
import "./App.scss";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      <div className="App">
        <CartButton />
        <PizzaOrdering />
      </div>
    </CartContext.Provider>
  );
}

export default App;
