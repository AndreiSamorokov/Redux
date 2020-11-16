# Redux + React Counter 

## Sync redux store and dom value
    - :)
    const [ storeitem, setStoreItem ] = React.useState(0);
   
    store.subscribe(() => {
        setStoreItem( store.getState() )
    });