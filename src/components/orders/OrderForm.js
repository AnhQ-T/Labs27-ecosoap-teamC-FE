import React from 'react';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';

import OrderFormContainer from '../orders/OrderFormContainer';

function OrderForm() {
  return (
    <div>
      <h1>Guest Checkout</h1>
      <OrderFormContainer />
    </div>
  );
}

export default OrderForm;
