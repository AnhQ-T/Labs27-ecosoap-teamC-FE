import React from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../styles/Dashboard/DashboardMenu.css';
import { Menu } from 'antd';

function DashboardMenu(props) {
  const history = useHistory();

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
        <Menu.Item
          key="logout"
          onClick={() => {
            localStorage.clear();
            history.push({
              pathname: '/login',
            });
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default DashboardMenu;
