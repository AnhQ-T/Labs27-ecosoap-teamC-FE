import React, { useState } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

const NoPriceOrder = () => {
  const [state, setState] = useState({ visible: true });

  const { push } = useHistory();

  const handleOk = e => {
    setState({ visible: false });
    push('/orders');
  };

  const handleCancel = e => {
    setState({ visible: false });
    push('/orders');
  };

  return (
    <>
      <Modal
        title="Success"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Your order has been submitted.</h3>
        <p>An EcoSoap representative will contact you regarding your order.</p>
        <p>Thank you.</p>
      </Modal>
    </>
  );
};

export default NoPriceOrder;
