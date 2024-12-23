import React from "react";
import { Button, Form, Input } from 'antd';


//category save component 
const CategorySetup = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Category Value ", values) // functions to save item category 
        form.resetFields();
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <div className="pt-5 px-5 pb-5 bg-[#a8b833]" >
            
            <Form
                form={form}
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                    width: 800,
                    maxWidth: 400,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label={<span style={{color : 'white'}}>Category Name</span>}
                name="categoryname"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input style={{height : '40px', maxWidth: '400px'}}/>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            
            
            
        </div>
    )
}

export default CategorySetup;