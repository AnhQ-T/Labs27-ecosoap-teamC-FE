import React from 'react';

import 'antd/dist/antd.css';

import DashboardContainer from '../Dashboard/DashboardContainer.js';

function Dashboard(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <DashboardContainer userInfo={userInfo} authService={authService} />
    </div>
  );
}

export default Dashboard;
