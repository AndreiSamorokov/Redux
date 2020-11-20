import React, { useState, useEffect } from "react";
import shop from '../api/shop'



function Products() {

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
              <div key={key}> test </div>
            ))}
            </div>
          }
      </div>
    );
  }
  
export default Products;
  