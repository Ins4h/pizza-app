import React, { useReducer } from "react";

const CartContext = React.createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log("reducer", action);
      switch (action.type) {
        case "addPizza":
          return { ...state, orders: [...state.orders, action.newPizza] };
        case "removePizza":
          return {
            ...state,
            orders: state.orders.filter(
              (item) => item.id !== action.pizzaRemove
            ),
          };
        default:
          return state;
      }
    },
    {
      orders: [],
    }
  );
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { StateProvider, CartContext };
