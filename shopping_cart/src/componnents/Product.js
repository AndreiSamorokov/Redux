function Product({id, title, price, inventory, addStock }) {

    return (
      <div> 
          <div> {title} - {price} - {inventory} </div> 
          <button onClick={addStock} value={id}> Add to cart </button>
      </div>
    );
  }
  
  export default Product;
  