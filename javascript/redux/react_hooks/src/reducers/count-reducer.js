export const INCREASING = 'INCREASING';
export const DECREASING = 'DECREASING';
export const RESETTING = 'RESETTING';

export const createActions = dispatch => ({
    increasing: value => dispatch({type: INCREASING, payload: value || 1}),
    decreasing: value => dispatch({type: DECREASING, payload: value || 1 }),
    resetting: () => dispatch({type: RESETTING})


});

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASING: {
            return state + action.payload
        }
        case DECREASING: {
            return state - action.payload
        }
        case RESETTING: {
            return 0
        }
        default: return state
    }

};

export default reducer;