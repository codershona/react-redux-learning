const init = [
    {
        url: 'https://google.com',
        name: 'google.com',
        isFav: false,
        id: 'sdfhfjkffejfj'
    }
]




const reducer = (state = init, action) => {
    switch (action.type) {
        case 'ADD_BOOKMARK': {
            /* const bookmarks = state.concat(action.payload) */
         return state.concat(action.payload)
        }
        case 'REMOVE_BOOKMARK': {
           return state.filter(bookmark => bookmark.id !==  action.payload)
        }
        case 'TOGGLE_BOOKMARK': {
          /* const bookmarks = state.map(bookmark => { */
            return state.map(bookmark => {
               if (bookmark.id === action.payload) {
                   bookmark.isFav = !bookmark.isFav
               }
               return bookmark
           }) 
        }
        default: return state
        
    } 



}



export default reducer;


