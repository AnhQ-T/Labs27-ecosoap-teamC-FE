import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import '../../styles/OrderConfirmation/OrderConfirmation.css';

const OrderConfirmation = props => {
  const {
    organizationName,
    organizationWebsite,
    contactName,
    soapBarNum,
    contactPhone,
    contactEmail,
    address,
    country,
    beneficiariesNum,
    hygieneSituation,
    hygieneInitiative,
    comments,
  } = props.location.state.values;

  const { push } = useHistory();

  const confirmOrder = values => {
    console.log(props.location.state.values);
    axios
      .post(
        'http://98.242.245.160:8000/orders/qualify',
        // 'https://labs27-ecosoap-teamc-api.herokuapp.com/orders/qualify',
        props.location.state.values
      )
      .then(res => {
        console.log(res.data);
        if (res.data.checkIfPrice.hasPrice === true) {
          push({
            pathname: '/checkout',
            data: res.data,
          });
        } else {
          console.log('message');
        }
      })
      .catch(err => console.log(`Order confirmation error: ${err}`));
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Order Confirmation">
        <p>Organization Name: {organizationName}</p>
        <p>Organization Website: {organizationWebsite}</p>
        <p>Contact Name: {contactName}</p>
        <p>Number of Soap Bars Requested: {soapBarNum}</p>
        <p>Contact Phone: {contactPhone}</p>
        <p>Contact Email: {contactEmail}</p>
        <p>Address: {address}</p>
        <p>Country: {country}</p>
        <p>Number of Beneficiaries: {beneficiariesNum}</p>
        <p>Hygiene Situation: {hygieneSituation}</p>
        <p>Hygiene Initiative: {hygieneInitiative}</p>
        <p>Comments: {comments}</p>
        <Button type="primary" onClick={() => confirmOrder()}>
          Confirm Order
        </Button>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
