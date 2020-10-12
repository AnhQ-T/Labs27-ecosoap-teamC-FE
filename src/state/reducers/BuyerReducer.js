import buyer from '../actions/index.js';

const initialState = {
  order_list: [],
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case buyer.GET_BUYER_ORDERS:
      return {
        order_list: action.payload,
        isFetching: true,
      };
  }
};
