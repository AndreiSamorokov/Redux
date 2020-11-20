function Product({title, price, inventory}) {
    return (
      <div> 
          <div> {title} - {price} - {inventory} </div> 
          <button > Add to cart </button>
      </div>
    );
  }
  
  export default Product;
  