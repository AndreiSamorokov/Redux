 
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
    let cartArray = [...carts];

    var index = cartArray.findIndex(c => c.id == row_id)
    console.log( index );
    if( index >= 0 ){
      // update
      cartArray[index].number = cartArray[index].number + 1
      setCarts(cartArray)

    }else{

      const finditemOnProducts = products.find((product) => {
        return product.id == row_id
      })

      // insert cart
      finditemOnProducts['number'] = 1 
      
      cartArray.push(finditemOnProducts)
      setCarts(cartArray)

    }
  }
 
  return (
    <div> 
        <h1> Shopping Cart </h1>
        <Products products={products} addStockRoot={addStockonRoodComp}/>
        <Carts carts={carts} />
    </div>
  );
}

export default App;
