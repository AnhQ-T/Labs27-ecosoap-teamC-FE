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
          href="/dashboard"
          className="header-btn"
          style={{ backgroundColor: '#3BB54A' }}
          type="button"
        >
          Home
        </Button>
        <Button
          href="#"
          className="header-btn"
          style={{ backgroundColor: '#2E8AF7' }}
          type="button"
        >
          About
        </Button>
        <Button
          href="#"
          className="header-btn"
          style={{ backgroundColor: '#2C9B9A' }}
          type="button"
        >
          Partners
        </Button>
        <Button
          href="#"
          className="header-btn"
          style={{ backgroundColor: '#2F559C' }}
          type="button"
        >
          Donate
        </Button>
        <Button
          href="/orders"
          className="header-btn"
          style={{ backgroundColor: '#49129C' }}
          type="button"
        >
          Request <br />
          Soap
        </Button>
      </Header>
    </div>
  );
}

export default DashboardHeader;
