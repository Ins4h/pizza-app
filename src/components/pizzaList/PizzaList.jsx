import React from 'react';
// import './PizzaList.css';
import PizzaItem from '../pizzaItem/PizzaItem';
import pizzaData from '../../pizzas.json';

const PizzaList = () => {
  return (
    <div className='pizza-list'>
      <ul className='pizza-list__list'>
        {pizzaData.map((el) => (
          <PizzaItem {...el} />
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
