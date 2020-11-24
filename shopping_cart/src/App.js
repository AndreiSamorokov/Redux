 
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
    let productArray = [...products]
    var index = cartArray.findIndex(c => c.id == row_id)
    var pindex = productArray.findIndex(c => c.id == row_id) 
    
    if( index >= 0 ){
      // update
      cartArray[index].number = cartArray[index].number + 1
      if( productArray[pindex].inventory != 0 ){
        setCarts(cartArray) 
        reduceProductInventory(productArray, pindex);
      }      
    }else{

      const finditemOnProducts = products.find((product) => {
        return product.id == row_id
      })

      // insert cart
      finditemOnProducts['number'] = 1 
      
      cartArray.push(finditemOnProducts)
      setCarts(cartArray)
      reduceProductInventory(productArray, pindex);
    }
  }
  
  const reduceProductInventory = (productArray, pindex) => {
    productArray[pindex].inventory = productArray[pindex].inventory - 1
    setProducts(productArray)
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
