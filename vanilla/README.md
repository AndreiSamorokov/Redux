# Redux - Counter with Vanilla Js

    - <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    - var store = Redux.createStore(counter)
    -  store.dispatch({ type: 'INCREMENT' })
    - function counter(state, action) {
        if (typeof state === 'undefined') {
          return 0
        }

        switch (action.type) {
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
        }
      }