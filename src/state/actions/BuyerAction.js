export const GET_BUYER_ORDERS = 'GET_BUYER_ORDERS';

export const getBuyerOrders = () => dispatch => {
  dispatch({
    type: GET_BUYER_ORDERS,
  });
};
