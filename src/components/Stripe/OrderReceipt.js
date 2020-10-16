import React, { useState } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

const OrderReceipt = props => {
  const [state, setState] = useState({ visible: true });
  const [hide, setHide] = useState({ visible: false });

  const { push } = useHistory();

  const handleOk = e => {
    setState({ visible: true });
    push('/');
  };

  const handleCancel = e => {
    setHide({ visible: false });
  };

  return (
    <>
      <Modal
        title="Success"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <h3>Thank you for your order!</h3>
        <h4>Your total is: ${props.price}</h4>
        <p>
          A receipt will be sent to {props.details.order_details.contactEmail}
        </p>
        <p>
          Please contact us at customerservice@soap.com if you have any
          questions about your order
        </p>
      </Modal>
    </>
  );
};

export default OrderReceipt;
