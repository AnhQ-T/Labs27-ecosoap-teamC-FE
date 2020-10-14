import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../../styles/Dashboard/DashboardHeader.css';
import { Layout, Button } from 'antd';

const { Header } = Layout;

function DashboardHeader() {
  return (
    <div>
      <Header className="header">
        <Button
          className="header-btn"
          style={{ backgroundColor: '#C84E47', color: 'white' }}
          size="large"
        >
          Home
        </Button>
        <Button
          className="header-btn"
          style={{ backgroundColor: '#FA9100', color: 'white' }}
          size="large"
        >
          About
        </Button>
        <Button
          className="header-btn"
          style={{ backgroundColor: '#49129C', color: 'white' }}
          size="large"
        >
          Partners
        </Button>
        <Button
          className="header-btn"
          style={{ backgroundColor: '#3BB54A', color: 'white' }}
          size="large"
        >
          Donate
        </Button>
        <Link to="/orders">
          <Button
            className="header-btn"
            style={{ backgroundColor: '#2E8AF7', color: 'white' }}
            size="large"
          >
            Request Soap
          </Button>
        </Link>
      </Header>
    </div>
  );
}

export default DashboardHeader;
