import React, { useState, useEffect } from 'react';
import { Form, Input, Button, AutoComplete } from 'antd';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { buyerRegister } from '../../../state/actions/BuyerAction';

import '../../../styles/Register/RegistrationForm.css';
import DashboardHeader from '../../Dashboard/Header/DashboardHeader';

import ecosoapLogo from '../../../assets/ecosoapLogo.png';

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 5,
  },
};

const BuyerRegistration = props => {
  const [form] = Form.useForm();

  const history = useHistory();

  const { buyerRegister } = props;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push({
        pathname: '/dashboard',
      });
    }
  }, [props.isLoggedIn]);

  const onFinish = values => {
    console.log(values);
    buyerRegister({
      email: values.email,
      password: values.password,
      organizationName: values.organizationName,
      organizationWebsite: values.organizationWebsite,
      contactName: values.contactName,
      contactPhone: values.contactPhone,
      address: values.address,
      country: values.country,
    });
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <>
      {/* <DashboardHeader /> */}
      <img src={ecosoapLogo} />
      <h1>Buyer Registration</h1>
      <div className="form-container">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="contactName"
            label="Contact Name"
            rules={[
              {
                required: true,
                message: 'Please input contact name',
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Contact Name" />
          </Form.Item>

          <Form.Item
            name="organizationName"
            label="Organization Name"
            rules={[
              {
                required: true,
                message: 'Please input organization name',
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Organization Name" />
          </Form.Item>

          <Form.Item
            name="organizationWebsite"
            label="Organization Website"
            rules={[
              {
                required: true,
                message: 'Please input website',
              },
            ]}
          >
            <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
              <Input placeholder="Organization Website" />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            name="email"
            label="Contact Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid email',
              },
              {
                required: true,
                message: 'Please input email',
              },
            ]}
          >
            <Input placeholder="Contact Email Address" />
          </Form.Item>

          <Form.Item
            name="contactPhone"
            label="Contact Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input contact phone number',
              },
            ]}
          >
            <Input
              placeholder="Contact Phone Number"
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input address',
              },
            ]}
          >
            <Input
              placeholder="Address"
              style={{
                width: '100%',
              }}
            />
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
            <Input
              placeholder="Country"
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input password',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm password',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    'The two passwords entered do not match'
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="btn">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state,
  };
};

export default connect(mapStateToProps, { buyerRegister })(BuyerRegistration);
