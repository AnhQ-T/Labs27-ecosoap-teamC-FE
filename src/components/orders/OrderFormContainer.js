import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

import 'antd/dist/antd.css';

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
    console.log('Finish:', values);
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
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
      >
        <Form.Item
          name="organizationName"
          label="Organization Name"
          required
          rules={[
            {
              required: true,
              message: 'Please input organization name',
            },
          ]}
        >
          <Input placeholder="Organization Name" />
        </Form.Item>
        <Form.Item name="organizationWebsite" label="Organization Website">
          <Input placeholder="Organization Website" />
        </Form.Item>
        <Form.Item
          name="contactName"
          label="Contact Name"
          required
          rules={[
            {
              required: true,
              message: 'Please input contact name',
            },
          ]}
        >
          <Input placeholder="Contact Name" />
        </Form.Item>
        <Form.Item
          name="soapBarNum"
          label="Number of Soap Bars Requested"
          required
          rules={[
            {
              required: true,
              message: 'Please input number of soap bars requested',
            },
          ]}
        >
          <InputNumber placeholder="Number of Soap Bars Requested" min={1} />
        </Form.Item>
        <Form.Item
          name="contactPhone"
          label="Contact Phone Number"
          required
          rules={[
            {
              required: true,
              message: 'Please input phone number',
            },
          ]}
        >
          <Input placeholder="Contact Phone Number" />
        </Form.Item>
        <Form.Item
          name="contactEmail"
          label="Contact Email Address"
          required
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
          <Input placeholder="Contact Email Address" />
        </Form.Item>
        <Form.Item name="address" label="Address / Location">
          <Input placeholder="Address / Location" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          required
          rules={[
            {
              required: true,
              message: 'Please input country',
            },
          ]}
        >
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item
          name="beneficiariesNum"
          label="Number of Beneficiaries"
          required
          rules={[
            {
              required: true,
              message: 'Please input number of beneficiaries',
            },
          ]}
        >
          <InputNumber placeholder="Number of Beneficiaries" min={1} />
        </Form.Item>
        <Form.Item
          name="hygieneSituation"
          label="Description of Hygiene Situation in Community"
        >
          <Input placeholder="Description of Hygiene Situation in Community" />
        </Form.Item>
        <Form.Item
          name="hygieneInitiative"
          label="Description of Hygiene Initiative"
          required
          rules={[
            {
              required: true,
              message: 'Please input description of hygiene initiative',
            },
          ]}
        >
          <Input placeholder="Description of Hygiene Initiative" />
        </Form.Item>
        <Form.Item name="comments" label="Comments">
          <Input placeholder="Comments" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Order
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default OrderFormContainer;
