import { admin } from '../actions/index.js';

const initialState = {
  orders_list: [],
  isFetching: false,
  isLoggedIn: false,
  registerSuccess: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case admin.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case admin.ADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    case admin.GET_ALL_ORDERS:
      return {
        ...state,
        orders_list: action.payload,
        isFetching: true,
      };
    case admin.GET_ALL_ORDER_DETAILS:
      return {
        ...state,
        current_order: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
