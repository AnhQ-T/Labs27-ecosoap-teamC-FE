import React from 'react';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardContent.css';
import { Layout, Menu, Breadcrumb } from 'antd';

function DashboardContent() {
  return (
    <div>
      <Layout className="content-layout">
        <h2>Your orders</h2>
        <h3>N/A orders</h3>
      </Layout>
    </div>
  );
}

export default DashboardContent;
