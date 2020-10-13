import React from 'react';

import 'antd/dist/antd.css';
import '../../styles/Dashboard/DashboardMenu.css';
import { Layout, Menu, Breadcrumb } from 'antd';

function DashboardMenu() {
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
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    </div>
  );
}

export default DashboardMenu;
