// basic implementation of the redux:

const createStore = (reducer, init) => {

    const store = {} /* define as a empty state */
    store.state = init

    store.listeners = []

    store.getState = () => store.state

    store.subscribe = listener => store.listeners.push(listener)
    
    store.dispatch = action => {
        store.state = reducer(store.state, action)
        store.listeners.forEach(listener => listener())
    }

     return store

}

// uses of the redux our store:

const reducer = (state, action) => {
    /* return state */
    switch(action.type) {
        case 'ADD': {
            /* return state + 20 */
           return state + action.payload
        }
        case 'SUBTRACT': {
            /* return state - 8 */
            return state - action.payload
        }
        default: return state
    }
}

const store = createStore(reducer, 0)


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: 'ADD', payload: 200})
store.dispatch({type: 'ADD', payload: 400})
store.dispatch({type: 'ADD', payload: 600})

store.dispatch({type: 'ADD', payload: 800})
store.dispatch({type: 'SUBTRACT', payload: 30})
store.dispatch({type: 'SUBTRACT', payload: 50})
store.dispatch({type: 'SUBTRACT', payload: 90})
store.dispatch({type: 'SUBTRACT', payload: 10})

/*store.dispatch()

store.dispatch()
store.dispatch()
store.dispatch()
store.dispatch()

*/

/* calling my dispatch method by running node store.js in the terminal */


