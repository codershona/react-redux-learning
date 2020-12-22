


const initialState = {
    count: 200
}


function rootReducer (state=initialState, action) {

    switch (action.type) {
       
        case 'ADD': {
          return {
              count: state.count + 1
          }
        }

        case 'SUBTRACT': {
            return {
                count: state.count - 1
            }

        }

        case 'MULTIPLY': {
            return {
                count: state.count * 1
            }

        }

        default: return state

    }

}


export default rootReducer;