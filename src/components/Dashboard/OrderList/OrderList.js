import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getBuyerOrders,
  getBuyerProfile,
} from '../../../state/actions/BuyerAction';
import { getAllOrders } from '../../../state/actions/AdminAction';

import 'antd/dist/antd.css';
import { Card } from 'antd';

import Orders from './Orders';

function OrderList(props) {
  console.log(props);

  const [isBuyer, setIsBuyer] = useState(false);

  const { getBuyerOrders, getBuyerProfile, getAllOrders } = props;
  useEffect(() => {
    if (localStorage.getItem('buyer_id')) {
      getBuyerProfile();
      getBuyerOrders();
      setIsBuyer(true);
    } else {
      getAllOrders();
    }
  }, []);

  console.log(props);

  return (
    <div>
      {isBuyer ? (
        <Card title={props.buyer_orders_list.length + ' orders'}>
          {props.buyer_orders_list.map((el, i) => (
            <Orders data={el} key={i} />
          ))}
        </Card>
      ) : (
        <Card title={props.all_orders_list.length + ' orders'}>
          {props.all_orders_list.map((el, i) => (
            <Orders data={el} key={i} />
          ))}
        </Card>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    buyer_orders_list: state.buyer.orders_list,
    all_orders_list: state.admin.orders_list,
  };
};

export default connect(mapStateToProps, {
  getBuyerOrders,
  getBuyerProfile,
  getAllOrders,
})(OrderList);
