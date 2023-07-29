import { Button, Space, Table, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
const Contact = () => {
    const [form] = Form.useForm()
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            gender: 'Female',
            phone: '04545',
        },
        {
            key: '3',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            gender: 'Female',
            phone: '04545',
        },
        {
            key: '4',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            gender: 'Female',
            phone: '04545',

        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            gender: 'Female',
            phone: '04545',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: ' gender',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            render: (_, record) => <Space>
                <Button onClick={() => handleEdit(record)}>Edit</Button>
                <Button onClick={() => handleDelete(record)}>Delete</Button>
            </Space>
        },
    ];


    const handleEdit = (record) => {
        setIsModalOpen(true);
        form.setFieldsValue({
            ...record
        })
    }


    const handleDelete = (record) => {

        const newList = data.filter(item => item.key !== record.key);
        setData(newList)
    }
    const [data, setData] = useState(dataSource);
    useEffect(() => {
        form.setFieldsValue({
            name: 'Huỳnh Thị Kiều Trang',
            age: 20
        })
    },)
    const onFinish = (values) => {
        const params = {

            ...values,
            key: data.length + 1
        };

        setData([...data, params])
        form.resetFields()
        setIsModalOpen(false);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <div>
        <Space wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Space>
        <Table dataSource={data} columns={columns} />;

        <Button type="primary" onClick={showModal}>
            Create person
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form

                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
                form={form}
                name="form"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                        {
                            min: 6,
                            message: 'Nhập tối thiểu 6 ký tự',
                        }
                    ]}
                    hasFeedback validateStatus='success'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your gender!',
                        },

                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Please enter a valid phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    </div>
}
export default Contact;

// import { Button, Space, Table, Form, Input, Modal } from 'antd';
// import React, { useEffect, useState } from 'react';

// const Contact = () => {
//     const [form] = Form.useForm();
//     const dataSource = [
//         {
//             key: '1',
//             name: 'Mike',
//             age: 32,
//             address: '10 Downing Street',
//             gender: 'Female',
//             phone: '04545',
//         },
//         {
//             key: '3',
//             name: 'John',
//             age: 42,
//             address: '10 Downing Street',
//             gender: 'Female',
//             phone: '04545',
//         },
//         {
//             key: '4',
//             name: 'John',
//             age: 42,
//             address: '10 Downing Street',
//             gender: 'Female',
//             phone: '04545',
//         },
//         {
//             key: '2',
//             name: 'John',
//             age: 42,
//             address: '10 Downing Street',
//             gender: 'Female',
//             phone: '04545',
//         },
//     ];

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Age',
//             dataIndex: 'age',
//             key: 'age',
//         },
//         {
//             title: 'Address',
//             dataIndex: 'address',
//             key: 'address',
//         },
//         {
//             title: 'Gender',
//             dataIndex: 'gender',
//             key: 'gender',
//         },
//         {
//             title: 'Phone',
//             dataIndex: 'phone',
//             key: 'phone',
//         },
//         {
//             title: 'Action',
//             render: (_, record) => (
//                 <Space>
//                     <Button onClick={() => handleEdit(record)}>Edit</Button>
//                     <Button onClick={() => handleDelete(record)}>Delete</Button>
//                 </Space>
//             ),
//         },
//     ];

//     const [data, setData] = useState(dataSource);
//     const [editingRecord, setEditingRecord] = useState(null);
//     const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);

//     useEffect(() => {
//         form.setFieldsValue({
//             name: 'Huỳnh Thị Kiều Trang',
//             age: 20,
//         });
//     }, []);

//     const handleEdit = (record) => {
//         setEditingRecord(record);
//         setIsEditingModalOpen(true);
//         form.setFieldsValue(record);
//     };

//     const handleDelete = (record) => {
//         const newData = data.filter((item) => item.key !== record.key);
//         setData(newData);
//     };

//     const onFinish = (values) => {
//         const updatedRecord = { ...editingRecord, ...values };
//         const newData = data.map((record) =>
//             record.key === updatedRecord.key ? updatedRecord : record
//         );
//         setData(newData);
//         setIsEditingModalOpen(false);
//     };

//     const showModal = () => {
//         setIsEditingModalOpen(true);
//     };

//     const handleCancel = () => {
//         setIsEditingModalOpen(false);
//     };

//     return (
//         <div>
//             <Space wrap>
//                 <Button type="primary">Primary Button</Button>
//                 <Button>Default Button</Button>
//                 <Button type="dashed">Dashed Button</Button>
//                 <Button type="text">Text Button</Button>
//                 <Button type="link">Link Button</Button>
//             </Space>
//             <Table dataSource={data} columns={columns} />
//             <Button type="primary" onClick={showModal}>
//                 Create person
//             </Button>
//             <Modal
//                 title="Edit Person"
//                 visible={isEditingModalOpen}
//                 onCancel={handleCancel}
//                 footer={null}
//             >
//                 <Form form={form} onFinish={onFinish}>
//                     <Form.Item
//                         label="Name"
//                         name="name"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your name!',
//                             },
//                             {
//                                 min: 6,
//                                 message: 'Please enter at least 6 characters',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         label="Age"
//                         name="age"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your age!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         label="Address"
//                         name="address"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your address!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         label="Gender"
//                         name="gender"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your gender!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         label="Phone"
//                         name="phone"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your phone!',
//                             },
//                             {
//                                 pattern: /^[0-9]*$/,
//                                 message: 'Please enter a valid phone number!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item>
//                         <Button type="primary" htmlType="submit">
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </Modal>
//         </div>
//     );
// };

// export default Contact;
