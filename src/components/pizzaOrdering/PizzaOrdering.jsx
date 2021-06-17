import React, {useState} from 'react';
import Header from '../header/Header';
import PizzaList from '../pizzaList/PizzaList'
import ViewButton from '../view-button/ViewButton';

function PizzaOrdering() {
  const [ isGrid, setIsGrid ] = useState(false);
  return(<div>
    <Header title="Witaj w naszej pizzero"/>
    <ViewButton isGrid ={isGrid} setIsGrid={setIsGrid}/>
    <PizzaList isGrid={isGrid}/>
  </div>)
};

export default PizzaOrdering;
