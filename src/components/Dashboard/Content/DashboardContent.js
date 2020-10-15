import React from 'react';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardContent.css';
import { Layout } from 'antd';

import OrderListContainer from '../OrderList/OrderListContainer';

function DashboardContent(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <Layout className="content-layout">
        <h2>Your orders</h2>
        <OrderListContainer userInfo={userInfo} authService={authService} />
      </Layout>
    </div>
  );
}

export default DashboardContent;
