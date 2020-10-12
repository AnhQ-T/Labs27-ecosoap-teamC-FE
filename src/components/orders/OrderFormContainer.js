import React, { useState } from 'react';
import { Form, Input, Button, Tooltip } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

const OrderFormContainer = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
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
      >
        <Form.Item name="organizationName" label="Organization Name" required>
          <Input placeholder="Organization Name" />
        </Form.Item>
        <Form.Item name="organizationWebsite" label="Organization Website">
          <Input placeholder="Organization Website" />
        </Form.Item>
        <Form.Item name="contactName" label="Contact Name" required>
          <Input placeholder="Contact Name" />
        </Form.Item>
        <Form.Item
          name="soapBarNum"
          label="Number of Soap Bars Requested"
          required
        >
          <Input placeholder="Number of Soap Bars Requested" />
        </Form.Item>
        <Form.Item name="contactPhone" label="Contact Phone Number" required>
          <Input placeholder="Contact Phone Number" />
        </Form.Item>
        <Form.Item
          name="contactEmail"
          label="Contact Email Address"
          required
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Contact Email Address" />
        </Form.Item>
        <Form.Item name="address" label="Address / Location">
          <Input placeholder="Address / Location" />
        </Form.Item>
        <Form.Item name="country" label="Country" required>
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item
          name="beneficiariesNum"
          label="Number of Beneficiaries"
          required
        >
          <Input placeholder="Number of Beneficiaries" />
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
        >
          <Input placeholder="Description of Hygiene Initiative" />
        </Form.Item>
        <Form.Item name="comments" label="Comments">
          <Input placeholder="Comments" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit Order</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default OrderFormContainer;
