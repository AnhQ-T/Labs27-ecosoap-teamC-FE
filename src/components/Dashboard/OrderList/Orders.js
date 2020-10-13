import React from 'react';

import 'antd/dist/antd.css';

function Orders(props) {
  console.log(props.data);
  return (
    <div>
      <h2>Organization: {props.data.organizationName} </h2>
      <h3>Contact Name: {props.data.contactName} </h3>
    </div>
  );
}

export default Orders;
