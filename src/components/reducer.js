export const initialState = {
    cart: [],
    user: null
}

// selector
export const getCartTotal = cart => 
// add all prices to amount 0
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = ( state, action ) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
            }
        case 'REMOVE_FROM_CART':
            // this only work if there is no multipal stuf of one thing
            // return {
            //     ...state,
            //     cart: [state.cart.filter(item => item.id !== action.id)]
            // }
            // find the position of the item
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id  === action.id
            )
            let newCart = [...state.cart]

            if (index >= 0 ) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product ( id: ${action.id} ) as it's not in the cart!`
                )
            }
            return {
                ...state,
                cart: newCart
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer;