import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { adminRegister } from '../../../state/actions/AdminAction';

import { Form, Input, Button, AutoComplete } from 'antd';

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

const AdminRegistration = props => {
  const [form] = Form.useForm();

  const { adminRegister } = props;

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push({
        pathname: '/dashboard',
      });
    }
  }, [props.isLoggedIn]);

  const onFinish = values => {
    adminRegister({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <DashboardHeader />
      <img src={ecosoapLogo} />
      <h1>Admin Registration</h1>
      <div className="form-container">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="Email"
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
            <Input placeholder="Email" />
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
            <Button type="primary" htmlType="submit">
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

export default connect(mapStateToProps, { adminRegister })(AdminRegistration);
