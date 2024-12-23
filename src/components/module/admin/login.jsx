import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const onFinish = (values) => {
       
        if(values.password === "admin@1234" && values.username === "admin@gmail.com")
        {
            navigate('/admin_dashboard');
        }
        else
        {
            window.alert("Email or Passwored is wrong")
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


    return(
        <div className="flex justify-center pt-5 px-5">

<Form
                            name="basic"
                            labelCol={{
                            span: 8,
                            }}
                            wrapperCol={{
                            span: 16,
                            }}
                            style={{
                            maxWidth: 600,
                            background : 'linear-gradient(to right, rgb(120 217 189), rgb(12 177 233))',
                            padding : '30px 30px',
                            borderRadius : '10px'
                            }}
                            initialValues={{
                            remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            
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

                            <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                            >
                            <Button type="primary" htmlType="submit" style={{background : '#196381'}}>
                                Submit
                            </Button>
                            </Form.Item>
                        </Form>


        </div>
    )
}

export default Login;