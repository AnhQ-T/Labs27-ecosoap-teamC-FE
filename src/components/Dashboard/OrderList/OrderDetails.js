import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBuyerOrderDetails } from '../../../state/actions/BuyerAction.js';

import 'antd/dist/antd.css';

function OrderDetails(props) {
  const { getBuyerOrderDetails } = props;
  const { id } = useParams();

  useEffect(() => {
    getBuyerOrderDetails(id);
  }, []);

  return (
    <div>
      <h2>Order Details</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    current_order: state.buyer.current_order,
  };
};

export default connect(mapStateToProps, { getBuyerOrderDetails })(OrderDetails);
