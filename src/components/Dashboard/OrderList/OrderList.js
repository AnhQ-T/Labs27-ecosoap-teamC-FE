import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBuyerOrders } from '../../../state/actions/BuyerAction';

import 'antd/dist/antd.css';
import { Card } from 'antd';

import Orders from './Orders';

function OrderList(props) {
  const { getBuyerOrders } = props;

  useEffect(() => {
    getBuyerOrders();
  }, []);

  return (
    <div>
      {props.orders_list ? (
        <Card title={props.orders_list.length + ' orders'}>
          {props.orders_list.map((el, i) => (
            <Orders data={el} key={i} />
          ))}
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orders_list: state.buyer.orders_list,
  };
};

export default connect(mapStateToProps, { getBuyerOrders })(OrderList);
