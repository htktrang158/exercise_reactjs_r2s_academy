
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const onFinish = (values) => {
        if (values.username === 'admin' && values.password === 'admin123') {

            notification.success({
                message: 'Login Success',
                description: 'You have successfully logged in!',
            });
            setLoggedIn(true);
        } else {

            notification.error({
                message: 'Login Failed',
                description: 'Invalid username or password!',
            });
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (loggedIn) {
        const studentPath = '/student';
        window.location.href = studentPath;
    }

    return (
        <div className="container">
            <h2>Login </h2>
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;

