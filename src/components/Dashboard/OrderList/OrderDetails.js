import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBuyerOrderDetails } from '../../../state/actions/BuyerAction.js';
import { deleteOrder } from '../../../state/actions/AdminAction.js';
import '../../../styles/Dashboard/Orders/OrderDetails.css';

import 'antd/dist/antd.css';
import { Layout, Card, Typography, Button } from 'antd';

function OrderDetails(props) {
  console.log(props);
  const history = useHistory();

  const { Title } = Typography;
  const { getBuyerOrderDetails, deleteOrder } = props;
  const { id } = useParams();

  useEffect(() => {
    getBuyerOrderDetails(id);
    if (props.redirect == true) {
      history.push({
        pathname: '/dashboard',
      });
    }
  }, [props.redirect]);

  const handleDelete = () => {
    deleteOrder(id);
  };

  return (
    <div>
      {props.current_order ? (
        <div>
          <Card
            type="inner"
            title={<Title level={3}>Order Details</Title>}
            extra={
              <div>
                <h3>Order Id</h3>
                <h4>{props.current_order.id}</h4>
              </div>
            }
          >
            <div className="order-details-container">
              <div>
                <h3>{props.current_order.contactName}</h3>
                {props.current_order.contactEmail ? (
                  <h3>{props.current_order.contactEmail}</h3>
                ) : null}
                <h3>{props.current_order.contactPhone}</h3>
                {props.current_order.address ? (
                  <h3>
                    {props.current_order.address} {props.current_order.country}{' '}
                  </h3>
                ) : (
                  <h3>{props.current_order.country}</h3>
                )}
              </div>
              <div>
                <h3>{props.current_order.organizationName}</h3>
                {props.current_order.organizationWebsite ? (
                  <h3>{props.current_order.organizationWebsite}</h3>
                ) : null}
              </div>
            </div>
          </Card>
          <Card>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <h3>Soap Bars Ordered: {props.current_order.soapBarNum}</h3>
              <h3>
                Number of Beneficiaries: {props.current_order.beneficiariesNum}
              </h3>
              <h3>Comments: {props.current_order.comments}</h3>
            </div>
          </Card>
          <Card>
            <div className="order-summary">
              {localStorage.getItem('buyer_id') ? (
                <div></div>
              ) : (
                <Button
                  onClick={() => {
                    handleDelete();
                  }}
                  type="primary"
                  danger
                >
                  Delete
                </Button>
              )}
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    current_order: state.buyer.current_order,
    redirect: state.admin.redirect,
  };
};

export default connect(mapStateToProps, { getBuyerOrderDetails, deleteOrder })(
  OrderDetails
);
