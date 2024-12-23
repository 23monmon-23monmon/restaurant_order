import React from "react";
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const MenuSetUp = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <div className="pt-5 px-5 pb-5 bg-[#a8b833]" >
            <Form
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
                label="Item Name"
                name="itemName"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Item Name!',
                    },
                ]}
                >
                    <Input style={{height : '40px'}}/>
                </Form.Item>

                <Form.Item
                label="Price"
                name="price"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Price!',
                    },
                ]}
                >
                    <Input style={{height : '40px'}}/>
                </Form.Item>
                <Form.Item
                label="Note"
                name="note"
                
                >
                    <TextArea
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    placeholder="Note"
                    autoSize={{
                    minRows: 3,
                    maxRows: 5,
                    }}
                />
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

export default MenuSetUp;