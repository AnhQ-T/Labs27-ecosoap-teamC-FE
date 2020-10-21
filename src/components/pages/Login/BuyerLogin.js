import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { buyerLogin } from '../../../state/actions/BuyerAction';
import ecosoapLogo from '../../../assets/ecosoapLogo.png';

import 'antd/dist/antd.css';
import '../../../styles/Login/LoginForm.css';
import '../../../styles/EcoSoapLogo/EcoSoapLogo.css';

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
    console.log('running');
    buyerLogin(values);
  };

  return (
    <div className="form-container">
      <img src={ecosoapLogo} className="loginLogo" />
      <div className="form-header">
        <h1>Eco-Soap Bank Buyer Portal Login</h1>
      </div>
      <Form
        // name="normal_login"
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
              message: 'Please input email',
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
              message: 'Please input password',
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
          <div className="btnContainer">
            <Button type="primary" htmlType="submit" className="loginBtn">
              Log In
            </Button>
            <Button href="/register" htmlType="button" className="registerBtn">
              Register
            </Button>
          </div>
        </Form.Item>
      </Form>
      <a href="/guest">Guest Checkout</a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state,
  };
};

export default connect(mapStateToProps, { buyerLogin })(BuyerLogin);
