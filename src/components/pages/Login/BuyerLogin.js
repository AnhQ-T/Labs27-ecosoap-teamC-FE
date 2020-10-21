import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { buyerLogin } from '../../../state/actions/BuyerAction';

import '../../../styles/Login/LoginForm.css';

const BuyerLogin = props => {
  const history = useHistory();

  const { buyerLogin } = props;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push({
        pathname: '/dashboard',
      });
    }
  }, [props.isLoggedIn]);

  const onFinish = values => {
    buyerLogin(values);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Welcome to EcoSoap Buyer Portal</h3>
        <h3>Login</h3>
        {props.error ? (
          <h3 className="error-message">{props.error.message}</h3>
        ) : null}
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
      <a href="/guest">Guest Checkout</a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state,
    error: state.buyer.error,
  };
};

export default connect(mapStateToProps, { buyerLogin })(BuyerLogin);
