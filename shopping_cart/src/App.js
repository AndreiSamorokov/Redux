import logo from './logo.svg';
import './App.css';

import shop from './api/shop'
import React, { useState, useEffect } from "react";
import Carts from './componnents/Carts'
import Products from './componnents/Products'


function App() {

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {  
      const arr = shop.getProducts() 
      setProducts( arr );
  })


  const addStockonRoodComp = (e) => {
    let row_id = e.target.value
    const finditem = products.find((product) => {
      return product.id == row_id
    })  

    const new_carts = carts.push( finditem )
 
    console.log( carts )
  }


  return (
    <div> 
        <h1> Shopping Cart </h1>
        <Products products={products} addStockRoot={addStockonRoodComp}/>
        {/* <Carts carts={carts} /> */}
    </div>
  );
}

export default App;
