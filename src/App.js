import React, { useState } from "react";
import CartButton from "./components/cart-button/CartButton";
import PizzaOrdering from "./components/pizzaOrdering/PizzaOrdering";
import { StateProvider } from "./components/context/cart-context";
import "./App.scss";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <StateProvider value={{ cartCount, setCartCount }}>
      <div className="App">
        <CartButton />
        <PizzaOrdering />
      </div>
    </StateProvider>
  );
}
export default App;
