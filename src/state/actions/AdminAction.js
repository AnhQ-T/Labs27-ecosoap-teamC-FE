import axiosWithAuth from '../../utils/axiosWithAuth';

export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGIN_FAILURE = 'ADMIN_LOGIN_FAILURE';

export const ADMIN_REGISTER = 'ADMIN_REGISTER';
export const ADMIN_REGISTER_SUCCESS = 'ADMIN_REGISTER_SUCCESS';
export const ADMIN_REGISTER_FAILURE = 'ADMIN_REGISTER_FAILURE';

export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const GET_ALL_ORDERS_ERROR = 'GET_ALL_ORDERS_ERROR';

export const GET_ALL_ORDER_DETAILS = 'GET_ALL_ORDER_DETAILS';
export const GET_ALL_ORDER_DETAILS_ERROR = 'GET_ALL_ORDER_DETAILS_ERROR';

export const adminLogin = credentials => dispatch => {
  console.log(credentials);
  axiosWithAuth()
    .post(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/auth/admin/login',
      credentials
    )
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: res,
      });
    })
    .catch(err => {
      dispatch({
        type: ADMIN_LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const adminRegister = credentials => dispatch => {
  axiosWithAuth()
    .post(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/auth/admin/register',
      credentials
    )
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: ADMIN_REGISTER_SUCCESS,
        payload: res,
      });
    })
    .catch(err => {
      dispatch({
        type: ADMIN_REGISTER_FAILURE,
        payload: err,
      });
    });
};

export const getAllOrders = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/orders'
    );
    dispatch({
      type: GET_ALL_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getAllOrderDetails = id => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `https://labs27-ecosoap-teamc-api.herokuapp.com/orders/${id}`
    );
    dispatch({
      type: GET_ALL_ORDER_DETAILS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER_DETAILS_ERROR,
      payload: console.log(e),
    });
  }
};
