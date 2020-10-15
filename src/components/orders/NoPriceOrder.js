import React, { useState } from 'react';
import { Modal, Button, Result } from 'antd';

const NoPriceOrder = () => {
  const [state, setState] = useState({ visible: false });

  const showModal = () => {
    setState({ visible: true });
  };

  const handleOk = e => {
    console.log(e);
    setState({ visible: false });
  };

  const handleCancel = e => {
    console.log(e);
    setState({ visible: false });
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Your order has been submitted.</h3>
        <p>
          An EcoSoap representative will contact you regarding your order. Thank
          you.{' '}
        </p>
      </Modal>
    </>
  );
};
// const NoPriceOrder = () => {
//   return (
//   <Result
//     title="Your operation has been executed"
//     extra={
//       <Button type="primary" key="console">
//         Go Console
//       </Button>
//     }
//   />
//   )
// }

export default NoPriceOrder;
