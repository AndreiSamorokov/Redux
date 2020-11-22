function Product({title, price, inventory}) {

    const addProduct = (e) =>{
      console.log( 'add product ' + e); 
    }

    return (
      <div> 
          <div> {title} - {price} - {inventory} </div> 
          <button onClick={addProduct}> Add to cart </button>
      </div>
    );
  }
  
  export default Product;
  