import  { ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART }  from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      product: '面包',
      quantity: 2,
      unitCost: 90
    }
  ]
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }
    default:
      return state;
  }
}