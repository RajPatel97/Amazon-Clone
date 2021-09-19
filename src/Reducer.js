
export const initialState = {
    cart:[{
        id : '12321232343',
        title : "Apple AirPods Max - Sky Blue",
        price : 499.99,
        rating : 5,
        image :"https://m.media-amazon.com/images/I/81Tw0pLYUQL._AC_SL1500_.jpg"
    }],
    user:null,
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
            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItems) => cartItems.id === action.id);

            if(index >= 0){
                //remove the item
                newCart.splice(index,1);
            }else{
                console.warn(`cant remove product (id: ${action.id}) because it is not in the cart`)
            }
            return {...state,cart:newCart}
        default:
            return state;
    }

}

export default reducer;