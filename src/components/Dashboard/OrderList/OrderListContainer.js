import React, { useState } from 'react';

import axios from 'axios';

import 'antd/dist/antd.css';

import OrderList from './OrderList.js';

function OrderListContainer() {
  return (
    <div>
      <OrderList />
    </div>
  );
}

export default OrderListContainer;
