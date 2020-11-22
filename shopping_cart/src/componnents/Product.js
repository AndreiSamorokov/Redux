function Product({title, price, inventory, addStock }) {

    // const addStock = (e) =>{
    //   console.log( 'add product ' + e); 
    // }

    return (
      <div> 
          <div> {title} - {price} - {inventory} </div> 
          <button onClick={addStock}> Add to cart </button>
      </div>
    );
  }
  
  export default Product;
  