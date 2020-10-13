import React from 'react';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardContent.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import OrderListContainer from '../OrderList/OrderListContainer';

function DashboardContent() {
  return (
    <div>
      <Layout className="content-layout">
        <h2>Your orders</h2>
        <OrderListContainer />
      </Layout>
    </div>
  );
}

export default DashboardContent;
