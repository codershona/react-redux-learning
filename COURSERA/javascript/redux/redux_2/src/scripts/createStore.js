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


export default createStore;