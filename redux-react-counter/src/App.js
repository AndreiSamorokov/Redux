import './App.css';
import React, { useState, useEffect } from 'react';
import { createStore } from 'redux' 
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

function App() {
  const [ storeitem, setStoreItem ] = React.useState(0);
   
  store.subscribe(() => {
    setStoreItem( store.getState() )
  });

  return (
    <div className="App"> 
        <Counter
          value={storeitem}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        /> 
    </div>
  );
}

export default App;
