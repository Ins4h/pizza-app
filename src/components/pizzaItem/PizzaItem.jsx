import React from 'react';
import './PizzaItem.css';

function PizzaItem({ img, name, desc, priceBig, priceSmall }) {
  return (
    <div className='pizza-box'>
      <img className='pizza-image' src={img} alt='asd' title='tytul' />
      <div className='pizza-wrapper'>
        <h1 className='pizza-name'>{name}</h1>
        <p className='pizza-descr'>{desc}</p>
      </div>
      <div className='pizza-size'>
        <button className='size-button'>{priceSmall}</button>
        <button className='size-button'>{priceBig}</button>
      </div>
    </div>
  );
}

export default PizzaItem;
