import React from 'react';

import 'antd/dist/antd.css';
import '../../styles/Dashboard/DashboardMenu.css';
import { Menu } from 'antd';

function DashboardMenu(props) {
  const { authService } = props;

  return (
    <div>
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="order-list">Order List</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="logout" onClick={() => authService.logout()}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default DashboardMenu;
