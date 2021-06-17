import './App.scss';
import CartButton from './components/cart-button/CartButton';
import PizzaOrdering from './components/pizzaOrdering/PizzaOrdering';

function App() {
  return (
    <div className='App'>
      <CartButton cartCount={3} />
      <PizzaOrdering />
    </div>
  );
}

export default App;
