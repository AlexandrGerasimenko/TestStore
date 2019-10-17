 function CartReducer(state, action) {
    if (!state)
        return JSON.parse(localStorage.cart)
    if (action.type === 'ADD_GOOD') {
            let newState = state.concat([action.good]);
            localStorage.setItem('cart', JSON.stringify(newState))

            return newState;
        }
    if (action.type === 'DELETE_GOOD') {
            let newState = state.filter(i => i !== action.good);
            localStorage.setItem('cart', JSON.stringify(newState))

            return newState;
          
        }
        return state;
}

export default CartReducer