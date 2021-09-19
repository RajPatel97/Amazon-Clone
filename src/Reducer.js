
export const initialState = {
    cart:[],
};

const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic to add
            break;
        case 'REMOVE_FROM_BASKET':
            //logic to remove
            break;
        default:
            return state;
    }

}

export default reducer;