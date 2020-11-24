import React, { useState, useEffect } from "react";
import shop from '../api/shop'

import Product from './Product'

function Products( {addStockRoot} ) {

    const [products, Setproducts] = useState([]);
    useEffect(() => {  
        const arr = shop.getProducts() 
        Setproducts( arr );
    })


    return (
      <div> 
          {( !products ) ? 
            <div> Loading </div> : <div>
            { products.map((product, key) => (
              <Product key={key} id={product.id} title={product.title} inventory={product.inventory} price={product.price} addStock={addStockRoot}/>
            ))}
            </div>
          }
      </div>
    );
  }
  
export default Products;
  