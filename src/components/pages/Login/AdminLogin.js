import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';

import { adminLogin } from '../../../state/actions/AdminAction';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../../styles/Login/LoginForm.css';

const AdminLogin = props => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push({
        pathname: '/dashboard',
      });
    }
  }, [props.isLoggedIn]);

  const { adminLogin } = props;

  const onFinish = values => {
    console.log('running');
    adminLogin(values);
  };

  // useEffect(() => {
  //     if (localStorage.getItem("token") != null)
  //     return (<Redirect to="" /> )
  // }, [])

  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Welcome to EcoSoap Admin Portal</h3>
        <h3>Login</h3>
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
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
          Or <a href="/admin/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state,
  };
};

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
