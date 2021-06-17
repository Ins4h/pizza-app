import React from 'react';
import PizzaItem from '../pizzaItem/PizzaItem';
import pizzaData from '../../pizzas.json';
import styles from './PizzaList.module.scss'

const PizzaList = ({isGrid}) => {
  return (
    <div className={(isGrid)?`${styles.grid} grid`:styles.container}>
        {pizzaData.map((el, index) => (
          <PizzaItem key={index} {...((isGrid)?{grid:true}:{})} {...el}/>
        ))}
    </div>
  );
};

export default PizzaList;
