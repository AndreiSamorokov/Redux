import Cart from './Cart'

function Carts( {carts} ) {
    
  return (
    <div> 
        <hr />
          {( !carts && carts.length == 0  ) ? 
            <div> Loading </div> : <div>
              <h4> Cart list</h4>
            { carts.map((cart, key) => (
              <Cart key={key} title={cart.title} number={cart.number}/>
            ))}
            </div>
          }
      </div>
  );
}

export default Carts;