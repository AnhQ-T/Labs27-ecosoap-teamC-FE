import { buyer } from '../actions/index.js';

const initialState = {
  orders_list: [],
  user_info: {},
  isFetching: false,
  isLoggedIn: false,
  registerSuccess: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case buyer.BUYER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case buyer.BUYER_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    case buyer.GET_BUYER_ORDERS:
      return {
        orders_list: action.payload,
        isFetching: true,
      };
    case buyer.GET_BUYER_ORDER_DETAILS:
      return {
        current_order: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
