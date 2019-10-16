
 function CartReducer(state, action) {
    if (!state)
        return JSON.parse(localStorage.cart)
    if (action.type === 'ADD_GOOD') {
        let newState = state.concat([action.good]);
        return newState;
        }
    if (action.type === 'DELETE_GOOD') {
        let index = state.indexOf(action.good);
        if (index > -1) {
            var newState = state.splice(index, 1);
            return newState
          }
          
        }
        return state;
}

export default CartReducer