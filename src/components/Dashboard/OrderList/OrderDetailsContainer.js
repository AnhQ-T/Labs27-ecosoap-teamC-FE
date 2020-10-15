import React from 'react';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardContent.css';
import { Layout } from 'antd';

import OrderDetails from './OrderDetails';

function OrderDetailsContainer() {
  return (
    <div>
      <Layout className="content-layout">
        <h2>Order Details</h2>
        <OrderDetails />
      </Layout>
    </div>
  );
}

export default OrderDetailsContainer;
