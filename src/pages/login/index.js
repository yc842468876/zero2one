import React from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { setToken } from '../../utils/auth';
import { login } from '../../services/login';
import './index.css';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

function Index(props) {
  const onFinish = async (values) => {
    const { success, message: msg, userInfo } = await login(values);
    if (success) {
      message.success('登录成功');
      setToken(userInfo.token);
      props.history.push('/admin');
    } else {
      message.error(msg || '登陆失败');
    }
  };

  return (
    <Card title="ADMIN SYS" className="login-form">
      <Form
        {...layout}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Index;
