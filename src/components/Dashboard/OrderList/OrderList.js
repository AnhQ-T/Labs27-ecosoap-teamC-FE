import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getBuyerOrders } from '../../../state/actions/BuyerAction';

import 'antd/dist/antd.css';
import { Card } from 'antd';

import Orders from './Orders';

function OrderList(props) {
  useEffect(() => {
    props.getBuyerOrders();
  }, []);

  return (
    <Card title={props.orders_list.length + ' orders'}>
      {props.orders_list.map((el, i) => (
        <Orders data={el} key={i} />
      ))}
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    orders_list: state.buyer.orders_list,
  };
};

export default connect(mapStateToProps, { getBuyerOrders })(OrderList);
