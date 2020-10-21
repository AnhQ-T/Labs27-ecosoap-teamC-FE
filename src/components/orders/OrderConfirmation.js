import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import '../../styles/OrderConfirmation/OrderConfirmation.css';
import '../../styles/EcoSoapLogo/EcoSoapLogo.css';
import NoPriceOrder from './NoPriceOrder';

import ecosoapLogo from '../../assets/ecosoapLogo.png';

import DashboardHeader from '../Dashboard/Header/DashboardHeader';

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

  const [showModal, setShowModal] = useState(false);

  const confirmOrder = values => {
    console.log(props.location.state.values);
    axios
      .post(
        'https://labs27-ecosoap-teamc-api.herokuapp.com/orders/qualify',
        props.location.state.values
      )
      .then(res => {
        console.log(res.data);
        var price = res.data.price;
        var qid = res.data.qID;

        if (res.data.qualificationStatus) {
          setShowModal(true);
        } else {
          push({
            pathname: '/checkout',
            state: {
              values: {
                order_details: props.location.state.values,
                priceInfo: {
                  price: price,
                  qid: qid,
                },
              },
            },
          });
        }
      })
      .catch(err => console.log(`Order confirmation error: ${err}`));
  };

  return (
    <>
      <DashboardHeader />
      <img src={ecosoapLogo} />
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
          <Button className="btn" type="primary" onClick={() => confirmOrder()}>
            Confirm Order
          </Button>
        </Card>
        {showModal == true ? <NoPriceOrder /> : null}
      </div>
    </>
  );
};

export default OrderConfirmation;
