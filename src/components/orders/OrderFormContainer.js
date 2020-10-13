import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';

const initialOrder = {
  organizationName: '',
  organizationWebsite: '',
  contactName: '',
  soapBarNum: '',
  contactPhone: '',
  contactEmail: '',
  address: '',
  country: '',
  beneficiariesNum: '',
  hygieneSituation: '',
  hygieneInitiative: '',
  comments: '',
  // created_at: '',
  // updated_at: '',
  // buyerId: null
};

const OrderFormContainer = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [, forceUpdate] = useState();

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const [order, setOrder] = useState(initialOrder);

  const inputChange = e => {
    form.setFieldsValue(e.target.value);
  };

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log(form.getFieldsValue());
    console.log(order);
    axios
      .post('https://labs27-ecosoap-teamc-api.herokuapp.com/orders/', values)
      .then(res => {
        console.log(res);
        // setOrder(order);
        form.setFieldsValue(order);
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
    >
      <Form.Item
        name="organizationName"
        label="Organization Name"
        // valuePropName="organizationName"
        required
        rules={[
          {
            required: true,
            message: 'Please input organization name',
          },
        ]}
      >
        <Input placeholder="Organization Name" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="organizationWebsite"
        label="Organization Website"
        // valuePropName="organizationWebsite"
      >
        <Input placeholder="Organization Website" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="contactName"
        label="Contact Name"
        // valuePropName="contactName"
        required
        rules={[
          {
            required: true,
            message: 'Please input contact name',
          },
        ]}
      >
        <Input placeholder="Contact Name" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="soapBarNum"
        label="Number of Soap Bars Requested"
        // valuePropName="soapBarNum"
        required
        rules={[
          {
            required: true,
            message: 'Please input number of soap bars requested',
          },
        ]}
      >
        <InputNumber
          placeholder="Number of Soap Bars Requested"
          // onChange={inputChange}
          min={1}
        />
      </Form.Item>
      <Form.Item
        name="contactPhone"
        label="Contact Phone Number"
        // valuePropName="contactPhone"
        required
        rules={[
          {
            required: true,
            message: 'Please input phone number',
          },
        ]}
      >
        <Input placeholder="Contact Phone Number" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="contactEmail"
        label="Contact Email Address"
        // valuePropName="contactEmail"
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
        <Input placeholder="Contact Email Address" onChange={inputChange} />
      </Form.Item>
      <Form.Item name="address" label="Address / Location">
        <Input placeholder="Address / Location" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        // valuePropName="country"
        required
        rules={[
          {
            required: true,
            message: 'Please input country',
          },
        ]}
      >
        <Input placeholder="Country" onChange={inputChange} />
      </Form.Item>
      <Form.Item
        name="beneficiariesNum"
        label="Number of Beneficiaries"
        // valuePropName="beneficiariesNum"
        required
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
          // onChange={inputChange}
        />
      </Form.Item>
      <Form.Item
        name="hygieneSituation"
        label="Description of Hygiene Situation in Community"
        // valuePropName="hygieneSituation"
      >
        <Input
          placeholder="Description of Hygiene Situation in Community"
          onChange={inputChange}
        />
      </Form.Item>
      <Form.Item
        name="hygieneInitiative"
        label="Description of Hygiene Initiative"
        // valuePropName="hygieneInitiative"
        required
        rules={[
          {
            required: true,
            message: 'Please input description of hygiene initiative',
          },
        ]}
      >
        <Input
          placeholder="Description of Hygiene Initiative"
          onChange={inputChange}
        />
      </Form.Item>
      <Form.Item
        name="comments"
        label="Comments"
        // valuePropName="comments"
      >
        <Input placeholder="Comments" onChange={inputChange} />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit Order
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderFormContainer;
