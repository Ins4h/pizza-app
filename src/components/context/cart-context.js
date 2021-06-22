import React, { useReducer } from "react";

const CartContext = React.createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
  let arrEl;
      switch (action.type) {
        case "addPizza":
          arrEl =state.orders.find(elem =>
            elem.name === action.newPizza.name &&
            elem.price === action.newPizza.price
          )
          if(arrEl){
            console.log("add",state)
            const pizzas =state.orders.filter((pizza ) => pizza.name !== arrEl.name)
            return {...state, orders: [...pizzas, {...arrEl, quantity: arrEl.quantity + 1}]};
          }
            return { ...state, orders: [...state.orders, action.newPizza] };
        case "removePizza":
          arrEl = state.orders.find(elem =>
            elem.id === action.pizzaRemove.id &&
            elem.quantity >1
          )
            if(arrEl !== undefined){
            // arrEl.quantity--;
            console.log("remove",state)
            const pizzas =state.orders.filter((pizza ) => pizza.name !== arrEl.name)
            return {...state, orders: [...pizzas, {...arrEl, quantity: arrEl.quantity -1}]};
            }
          return {
            ...state,
            orders: state.orders.filter(
              (item) => item.id !== action.pizzaRemove.id
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
