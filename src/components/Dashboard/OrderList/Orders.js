import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/Orders/OrderList.css';

import { Card, Typography } from 'antd';

const { Title } = Typography;

function Orders(props) {
  return (
    <div>
      <Card
        type="inner"
        title={<Title level={3}>{props.data.organizationName}</Title>}
        extra={
          <Link to={`/order_details/${props.data.id}`}>Order Details</Link>
        }
      >
        <div className="order-content-container">
          <div>
            <h4>Contact Name: {props.data.contactName}</h4>
            <h4>Country: {props.data.country}</h4>
            <h5>Soap Bars Ordered: {props.data.soapBarNum}</h5>
          </div>
          <div>
            <h5>Created at: {props.data.created_at}</h5>
            <h5>Updated at: {props.data.updated_at}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Orders;
