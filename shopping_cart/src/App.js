import logo from './logo.svg';
import './App.css';

import shop from './api/shop'
import React, { useState, useEffect } from "react";
import Carts from './componnents/Carts'
import Products from './componnents/Products'


function App() {

  const [products, Setproducts] = useState([]);
  useEffect(() => {  
      const arr = shop.getProducts() 
      Setproducts( arr );
  })


  const addStockonRoodComp = (e) => {
    console.log( 'addStockonRoodComp' )
    console.log( e.target.value );
  }


  return (
    <div> 
        <h1> Shopping Cart </h1>
        <Products products={products} addStockRoot={addStockonRoodComp}/>
        <Carts />
    </div>
  );
}

export default App;
