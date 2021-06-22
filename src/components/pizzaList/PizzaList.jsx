import React, {useState, useEffect} from 'react';
import PizzaItem from '../pizzaItem/PizzaItem';
// import pizzaData from '../../pizzas.json';
import styles from './PizzaList.module.scss'

async function getMenu() {
 const response = await fetch("https://pizzaportal.azurewebsites.net/api/GetMenu")
 if(response.status === 200){

  const pizzaMenu = await response.json();

 return pizzaMenu.map((pizza) => {
    return {
     img: pizza.metadata.image,
     name: pizza.pizzaName,
     desc: pizza.metadata.description,
     priceBig: Math.round(pizza.prices.find(pizza=>pizza.type ==='big').price * 100) / 100,
     priceSmall: Math.round(pizza.prices.find(pizza=>pizza.type ==='small').price * 100) / 100,
     id: pizza.id
  }
})
 }

 console.log(response)
 return[];
}


const PizzaList =  ({isGrid}) => {
const [list, setList] = useState([])
 useEffect(() => {
  getMenu().then(response=> setList(response))
  }, []);
  return (
    <div className={(isGrid)?`${styles.grid} grid`:styles.container}>
        {list.map((el, index) => (
          <PizzaItem key={index} {...((isGrid)?{grid:true}:{})} {...el}/>
        ))}
    </div>
  );
};

export default PizzaList;
