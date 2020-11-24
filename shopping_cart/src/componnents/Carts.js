import Cart from './Cart'

function Carts( {carts} ) {
    
  return (
    <div> 
          {( !carts && carts.length == 0  ) ? 
            <div> Loading </div> : <div>
              carts list
            { carts.map((cart, key) => (
              <Cart key={key} title={cart.title}/>
            ))}
            </div>
          }
      </div>
  );
}

export default Carts;