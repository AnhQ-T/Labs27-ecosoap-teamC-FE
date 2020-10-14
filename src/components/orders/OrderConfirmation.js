import React, { useState } from 'react';

const OrderConfirmation = props => {
  // const initialOrder = {
  //   organizationName: '',
  //   organizationWebsite: '',
  //   contactName: '',
  //   soapBarNum: '',
  //   contactPhone: '',
  //   contactEmail: '',
  //   address: '',
  //   country: '',
  //   beneficiariesNum: '',
  //   hygieneSituation: '',
  //   hygieneInitiative: '',
  //   comments: '',
  // };

  // const [order, setOrder] = useState(initialOrder);
  // setOrder(props.state.values)

  return (
    console.log(props.state.values),
    (
      <>
        <h1>Order Confirmation</h1>
        {/* {props.state.values.organizationWebsite} */}
      </>
    )
  );
};

export default OrderConfirmation;
