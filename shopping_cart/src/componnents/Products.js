
import Product from './Product'

function Products( {products, addStockRoot} ) {



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
  