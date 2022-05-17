import React from 'react';
import Button from 'components/BasicComponents/Button';
import { LoginWrapper, LoginContainer, Title } from './styled';
import Form from 'components/BasicComponents/Form';
import Input from 'components/BasicComponents/Input';
import { useNavigate } from 'react-router-dom';
import showNotification, {
  ERROR_TYPE,
} from 'components/BasicComponents/Notification';
import {
  authSliceName,
  authReducer,
  authSaga,
  authActions,
} from 'containers/Auth/slices';
import { useAppDispatch, useInjectReducer, useInjectSaga } from 'store/hooks';

const LoginPage = () => {
  useInjectReducer({ key: authSliceName, reducer: authReducer });

  useInjectSaga({ key: authSliceName, saga: authSaga });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const params = await form.validateFields();
      // console.log('authActions', authActions);
      dispatch(authActions.login({ params, navigate }));
    } catch (error) {
      showNotification({
        type: ERROR_TYPE,
        message: 'Login error !',
      });
    }
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <Title>Enter ID to get started</Title>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="user name" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input type="password" placeholder="password" />
          </Form.Item>
          <Button type="primary" onClick={() => handleSubmit()}>
            Sign in
          </Button>
        </Form>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginPage;
