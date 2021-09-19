
export const initialState = {
    cart:[],
};

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic to add
            return {
                ...state,
                cart:[...state.cart,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic to remove
            return {state}
        default:
            return state;
    }

}

export default reducer;