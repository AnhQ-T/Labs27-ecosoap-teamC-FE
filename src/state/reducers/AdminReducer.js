import { admin } from '../actions/index.js';

const initialState = {
  orders_list: [],
  isFetching: false,
  isLoggedIn: false,
  registerSuccess: false,
  redirect: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case admin.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case admin.ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
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
        redirect: false,
      };
    case admin.GET_ALL_ORDER_DETAILS:
      return {
        ...state,
        current_order: action.payload,
        isFetching: true,
      };
    case admin.DELETE_ORDER:
      return {
        ...state,
        redirect: true,
      };
    default:
      return state;
  }
};
