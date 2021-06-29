import React from "react";
import { render, screen } from "@testing-library/react";
import { CartContext } from "../components/context/cart-context";
import CartView from "./CartView";

const dummyData = {
  state: {
    orders: [
      {
        price: 20,
        quantity: 2,
      },
      {
        price: 10,
        quantity: 3,
      },
      {
        price: 30,
        quantity: 1,
      },
    ],
  },
};

test("Should sum all orders", () => {
  const Context = React.createContext(CartContext);

  const wrapper = render(
    <Context.Provider value={dummyData}>
      <CartView />
    </Context.Provider>
  );

  wrapper.getAllByText("zł");
});
