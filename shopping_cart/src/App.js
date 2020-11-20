import logo from './logo.svg';
import './App.css';

import Carts from './componnents/Carts'
import Products from './componnents/Products'


function App() {
  return (
    <div> 
        <h1> Shopping Cart </h1>
        <Products />
        <Carts />
    </div>
  );
}

export default App;
