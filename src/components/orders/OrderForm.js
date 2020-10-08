import React from 'react';

import 'antd/dist/antd.css';

import OrderFormContainer from '../orders/OrderFormContainer';

{
  /* <form onSubmit={ handleSubmit }>
  <FormInput placeholder="Email" name="email" labelId="User Email" />
  <FormButton buttonText="Submit" classType="default" disabled="false" />
</form> */
}

function OrderForm() {
  return (
    <div>
      <OrderFormContainer />
    </div>
  );
}

export default OrderForm;
