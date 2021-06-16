import './App.css';
import Header from './components/header/Header';
import PizzaItem from './components/pizzaItem/PizzaItem';
import CartButton from './components/cart-button/CartButton';
import PizzaList from './components/pizzaList/PizzaList';

function App() {
  return (
    <div className='App'>
      <CartButton cartCount={3} />
      <Header header='Hello World' />
      <PizzaItem
        imgUrl='https://panel.pizzeriaubatmana.pl/img/app/vegetables.png'
        name='Pizza z szynka'
        descr={'szynka ser pieczarki'}
        price={{ small: '25', big: '30' }}
      />
      <PizzaList/>
    </div>
  );
}

export default App;
