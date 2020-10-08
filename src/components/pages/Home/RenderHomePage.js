import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import Dashboard from '../../Dashboard/Dashboard';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Welcome {userInfo.name}</h1>
      <div>
        {/* <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p> */}
        <Dashboard />
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
