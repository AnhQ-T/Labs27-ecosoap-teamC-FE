import React from 'react';

import OrderForm from './OrderForm';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';

import ecosoapLogo from '../../assets/ecosoapLogo.png';
import '../../styles/EcoSoapLogo/EcoSoapLogo.css';

const BuyerOrderForm = () => {
  return (
    <>
      <img src={ecosoapLogo} />
      <h1>Order Checkout</h1>
      <OrderForm />
    </>
  );
};

export default BuyerOrderForm;
