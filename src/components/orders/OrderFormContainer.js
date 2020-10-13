import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';
import '../../styles/OrderForm/OrderForm.css';

const OrderFormContainer = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [, forceUpdate] = useState();

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    axios
      .post('https://labs27-ecosoap-teamc-api.herokuapp.com/orders/', values)
      .then(res => {
        console.log(res);
        form.setFieldsValue(values);
      })
      .catch(err => console.log(`Order form error: ${err}`));
  };

  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      onFinish={onFinish}
      className="orderFormWrapper"
    >
      <Form.Item
        name="organizationName"
        label="Organization Name"
        rules={[
          {
            required: true,
            message: 'Please input organization name',
          },
        ]}
        className="formLabel"
      >
        <Input placeholder="Organization Name" className="orderInput" />
      </Form.Item>
      <Form.Item name="organizationWebsite" label="Organization Website">
        <Input placeholder="Organization Website" className="orderInput" />
      </Form.Item>
      <Form.Item
        name="contactName"
        label="Contact Name"
        rules={[
          {
            required: true,
            message: 'Please input contact name',
          },
        ]}
      >
        <Input placeholder="Contact Name" className="orderInput" />
      </Form.Item>
      <Form.Item
        name="soapBarNum"
        label="Number of Soap Bars Requested"
        rules={[
          {
            required: true,
            message: 'Please input number of soap bars requested',
          },
        ]}
      >
        <InputNumber
          placeholder="Number of Soap Bars Requested"
          min={1}
          className="orderInput"
        />
      </Form.Item>
      <Form.Item
        name="contactPhone"
        label="Contact Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input phone number',
          },
        ]}
      >
        <Input placeholder="Contact Phone Number" className="orderInput" />
      </Form.Item>
      <Form.Item
        name="contactEmail"
        label="Contact Email Address"
        rules={[
          {
            type: 'email',
            message: 'The input is not a valid email',
          },
          {
            required: true,
            message: 'Please input email address',
          },
        ]}
      >
        <Input placeholder="Contact Email Address" className="orderInput" />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input placeholder="Address" className="orderInput" />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
            message: 'Please input country',
          },
        ]}
      >
        <Input placeholder="Country" className="orderInput" />
      </Form.Item>
      <Form.Item
        name="beneficiariesNum"
        label="Number of Beneficiaries"
        rules={[
          {
            required: true,
            message: 'Please input number of beneficiaries',
          },
        ]}
      >
        <InputNumber
          placeholder="Number of Beneficiaries"
          min={1}
          className="orderInput"
        />
      </Form.Item>
      <Form.Item name="hygieneSituation" label="Hygiene Situation">
        <Input
          placeholder="Description of Hygiene Situation in Community"
          className="orderInput"
        />
      </Form.Item>
      <Form.Item
        name="hygieneInitiative"
        label="Hygiene Initiative"
        rules={[
          {
            required: true,
            message: 'Please input description of hygiene initiative',
          },
        ]}
      >
        <Input
          placeholder="Description of Hygiene Initiative"
          className="orderInput"
        />
      </Form.Item>
      <Form.Item name="comments" label="Comments">
        <Input placeholder="Comments" className="orderInput" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit" className="orderBtn">
          Submit Order
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderFormContainer;
