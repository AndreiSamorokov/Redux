function Product({id, title, price, inventory, addStock }) {

    return (
      <div> 
          <div> {title} - {price} - {inventory} </div> 
          <button disabled={ inventory > 0 ? '' : 'disabled'}  onClick={addStock} value={id}> Add to cart </button>
      </div>
    );
  }
  
  export default Product;
  