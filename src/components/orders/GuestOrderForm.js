import React from 'react';

import OrderForm from './OrderForm';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';
import '../../styles/EcoSoapLogo/EcoSoapLogo.css';

import ecosoapLogo from '../../assets/ecosoapLogo.png';

import DashboardHeader from '../Dashboard/Header/DashboardHeader';

const GuestOrderForm = () => {
  return (
    <>
      <DashboardHeader />
      <img src={ecosoapLogo} />
      <h1>Guest Checkout</h1>
      <OrderForm />
    </>
  );
};

export default GuestOrderForm;
