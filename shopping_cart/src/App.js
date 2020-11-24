import logo from './logo.svg';
import './App.css';

import Carts from './componnents/Carts'
import Products from './componnents/Products'


function App() {

  const addStockonRoodComp = (e) => {
    console.log( 'addStockonRoodComp' )
    console.log( e.target.value );
  }
  return (
    <div> 
        <h1> Shopping Cart </h1>
        <Products addStockRoot={addStockonRoodComp}/>
        <Carts />
    </div>
  );
}

export default App;
