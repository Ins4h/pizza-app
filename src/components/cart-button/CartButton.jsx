import React from 'react';
import img from './img2.png';
import './CartButton.css';

const CartButton = ({ cartCount }) => (
  <div className='cart-container'>
    <img src={img} width='50px' />
    <p className="counter">{cartCount}</p>
  </div>
);

export default CartButton;
