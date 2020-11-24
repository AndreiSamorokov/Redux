import Cart from './Cart'

function Carts( {carts} ) {
  
  console.log( carts.length );
  return (
    <div> 
        <h4>----------Carts area----------</h4>
        { (carts.length >= 1) ? '' : <div>
            { carts.map((cart) => (
              <Cart />
            ))}
          </div>
        }
    </div>
  );
}

export default Carts;