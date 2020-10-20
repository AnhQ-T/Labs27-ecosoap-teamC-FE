import React from 'react';

import OrderForm from './OrderForm';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';

const GuestOrderForm = () => {
  return (
    <>
      <h1>Guest Checkout</h1>
      <OrderForm />
    </>
  );
};

export default GuestOrderForm;
