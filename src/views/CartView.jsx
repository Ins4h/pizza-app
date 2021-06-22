import React, { useContext } from "react";
import { CartContext } from "../components/context/cart-context";
import PizzaItem from "../components/pizzaItem/PizzaItem";
import styles from "./CartView.module.scss"
import postOrders from "../request";


const CartView = ({isGrid}) => {
  const { state } = useContext(CartContext);

  // if(state.orders.Length === 0)
  //   return <Redirect to="/" />

  return (
    <div className={`${styles.listContainer} ${(isGrid)?styles.grid:""}`}>
      {state.orders.map((order, index) => (
        <PizzaItem key={index} {...order} isShopCard={true} {...((isGrid)?{grid:true}:{})}/>
      ))}
      <div>{Math.round(state.orders.reduce((prevValue, currValue) => prevValue + currValue.price * currValue.quantity ,0) * 100) / 100}zł</div>
      <button onClick={()=>postOrders({orders: {...state.orders}})}>Send Orders</button>
      </div>
  );
};

export default CartView;
