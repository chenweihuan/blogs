import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, GET_LIST } from '../actions/cart-actions';

const initialState = {
  cart: []
}

export default function (state = initialState, action) {
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
    case GET_LIST: { //获取state的初始数据
      return {
        ...state,
        cart: [action.list]
      }
    }

    default:
      return state;
  }
}