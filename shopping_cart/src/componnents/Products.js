import React, { useState, useEffect } from "react";
import shop from '../api/shop'

import Product from './Product'

function Products() {

  const [products, Setproducts] = useState([]);
    useEffect(() => {  
        const arr = shop.getProducts() 
        Setproducts( arr );
    })

    const addStock = (e) => {
      console.log( e.target.value );
    }

    return (
      <div> 
          {( !products ) ? 
            <div> Loading </div> : <div>
            { products.map((product, key) => (
              <Product key={key} id={product.id} title={product.title} inventory={product.inventory} price={product.price} addStock={addStock}/>
            ))}
            </div>
          }
      </div>
    );
  }
  
export default Products;
  