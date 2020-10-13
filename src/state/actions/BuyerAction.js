import axios from 'axios';

export const GET_BUYER_ORDERS = 'GET_BUYER_ORDERS';
export const GET_BUYER_ORDERS_ERROR = 'GET_BUYER_ORDERS_ERROR';

export const getBuyerOrders = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/orders'
    );
    dispatch({
      type: GET_BUYER_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BUYER_ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const POST_BUYER_ORDERS = 'POST_BUYER_ORDERS';
export const POST_BUYER_ORDERS_ERROR = 'POST_BUYER_ORDERS_ERROR';

export const postBuyerOrders = () => async dispatch => {
  try {
    const res = await axios.post(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/orders'
    );
    dispatch({
      type: POST_BUYER_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_BUYER_ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};
