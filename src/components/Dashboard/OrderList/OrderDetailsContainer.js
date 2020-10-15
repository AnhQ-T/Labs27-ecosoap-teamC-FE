import React from 'react';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardContent.css';
import { Layout } from 'antd';

import '../../../styles/Dashboard/DashboardLayout.css';

import DashboardHeader from '../Header/DashboardHeader';
import DashboardMenu from '../DashboardMenu';
import OrderDetails from './OrderDetails';

function OrderDetailsContainer(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <Layout className="dashboard-layout">
        <DashboardHeader />
        <Layout className="menu-layout">
          <DashboardMenu userInfo={userInfo} authService={authService} />
          <div>
            <Layout className="content-layout">
              <OrderDetails />
            </Layout>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default OrderDetailsContainer;
