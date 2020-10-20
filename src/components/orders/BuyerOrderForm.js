import React from 'react';

import OrderForm from './OrderForm';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';

const BuyerOrderForm = () => {
  return (
    <>
      <h1>Order Checkout</h1>
      <OrderForm />
    </>
  );
};

export default BuyerOrderForm;
