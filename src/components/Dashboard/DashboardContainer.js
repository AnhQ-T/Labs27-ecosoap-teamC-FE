import React from 'react';

import 'antd/dist/antd.css';
import '../../styles/Dashboard/DashboardLayout.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import DashboardHeader from '../Dashboard/Header/DashboardHeader.js';
import DashboardMenu from '../Dashboard/DashboardMenu.js';

function DashboardContainer() {
  return (
    <div>
      <Layout className="dashboard-layout">
        <DashboardHeader />
        <Layout className="menu-layout">
          <DashboardMenu />
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardContainer;
