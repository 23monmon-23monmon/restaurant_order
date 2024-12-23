import React from "react";
import { Button, Form, Input,Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const MenuSetUp = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        
        form.resetFields();
        console.log('MenuItem', values); // save item list    
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
                label={<span style={{color : 'white'}}>Item Name</span>}
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
                label={<span style={{color : 'white'}}>Category</span>}
                name="category"
                rules={[
                    {
                    required: true,
                    message: 'Please select category!',
                    },
                ]}
                >
                    <Select 
                        style={{ color:'white' }}
                        placeholder="Category"
                    >
                         {category.map((v,k) => <Option key={k} value={v?.categoryId} label={v?.categoryName}>{v?.categoryName}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                label={<span style={{color : 'white'}}>Price</span>}
                name="price"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Price!',
                    },
                ]}
                >
                    <Input type="number" style={{height : '40px'}}/>
                </Form.Item>
                <Form.Item
                label={<span style={{color : 'white'}}>Remark</span>}
                name="remark"
                
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

// can replace to use category list form api
const category = [
    {
        categoryId : 1,
        categoryName : 'Yogurt'
    },
    {
        categoryId : 2,
        categoryName : 'Bubble Tea'
    },
    {
        categoryId : 3,
        categoryName : 'Coffee'
    },
    {
        categoryId : 4,
        categoryName : 'Smoothie'
    },
    {
        categoryId : 5,
        categoryName : 'Soda'
    },
    
]