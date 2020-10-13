import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getBuyerOrders } from '../../../state/actions/BuyerAction';

import 'antd/dist/antd.css';

import Orders from './Orders';

function OrderList(props) {
  useEffect(() => {
    props.getBuyerOrders();
  }, []);

  return (
    <div>
      <h3>{props.orders_list.length} Orders</h3>
      {props.orders_list.map((el, i) => (
        <Orders data={el} key={i} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orders_list: state.buyer.orders_list,
  };
};

export default connect(mapStateToProps, { getBuyerOrders })(OrderList);
