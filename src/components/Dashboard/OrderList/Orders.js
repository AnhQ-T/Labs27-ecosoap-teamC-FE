import React from 'react';

import 'antd/dist/antd.css';

import { Card, Typography } from 'antd';

const { Title } = Typography;

function Orders(props) {
  console.log(props.data);
  return (
    <div>
      <Card
        type="inner"
        title={<Title level={3}>{props.data.organizationName}</Title>}
        extra={<a href="#">Order Details</a>}
      >
        <h4>Contact Name: {props.data.contactName}</h4>
        <h4>Country: {props.data.country}</h4>
        <h5>Soap Bars Ordered: {props.data.soapBarNum}</h5>
      </Card>
    </div>
  );
}

export default Orders;
