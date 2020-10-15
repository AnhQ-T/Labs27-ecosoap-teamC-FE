import React from 'react';

import 'antd/dist/antd.css';
import '../../styles/Dashboard/DashboardLayout.css';
import { Layout } from 'antd';

import DashboardHeader from '../Dashboard/Header/DashboardHeader.js';
import DashboardMenu from '../Dashboard/DashboardMenu.js';
import DashboardContent from '../Dashboard/Content/DashboardContent.js';

function DashboardContainer(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <Layout className="dashboard-layout">
        <DashboardHeader />
        <Layout className="menu-layout">
          <DashboardMenu userInfo={userInfo} authService={authService} />
          <DashboardContent userInfo={userInfo} authService={authService} />
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardContainer;
