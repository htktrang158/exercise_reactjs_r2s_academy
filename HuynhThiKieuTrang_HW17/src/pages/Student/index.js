
import { Table, Button, Space, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

const Student = () => {
    const dataStudent = [
        {
            key: '1',
            name: 'A',
            age: 32,
            phone: '033425462',
            email: 'mike@gmail.com'
        },

        {
            key: '2',
            name: 'John',
            age: 45,
            phone: '045678912',
            email: 'john@gmail.com'
        },

        {
            key: '3',
            name: 'Emily',
            age: 28,
            phone: '078956421',
            email: 'emily@gmail.com'
        },

        {
            key: '4',
            name: 'David',
            age: 36,
            phone: '036598742',
            email: 'david@gmail.com'
        },

        {
            key: '5',
            name: 'Sarah',
            age: 31,
            phone: '025874369',
            email: 'sarah@gmail.com'
        },

        {
            key: '6',
            name: 'Jennifer',
            age: 39,
            phone: '031245879',
            email: 'jennifer@gmail.com'
        },

        {
            key: '7',
            name: 'Robert',
            age: 41,
            phone: '065874321',
            email: 'robert@gmail.com'
        },

        {
            key: '8',
            name: 'Amy',
            age: 27,
            phone: '047896523',
            email: 'amy@gmail.com'
        },

        {
            key: '9',
            name: 'Daniel',
            age: 33,
            phone: '035478962',
            email: 'daniel@gmail.com'
        },

        {
            key: '10',
            name: 'Jessica',
            age: 29,
            phone: '024683759',
            email: 'jessica@gmail.com'
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
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            render: (_, record) => (
                <Space>
                    <Button onClick={() => handleEdit(record)}>Edit</Button>
                    <Button onClick={() => handleDelete(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const [form] = Form.useForm();
    const [data, setData] = useState(dataStudent);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [searchText, setSearchText] = useState('');

    const handleDelete = (record) => {
        const updatedData = data.filter((item) => item.key !== record.key);
        setData(updatedData);
    };

    const handleEdit = (record) => {
        form.setFieldsValue(record);
        setIsModalOpen(true);
        setEditing(record);
    };

    const handleFinishEdit = (values) => {
        const updatedData = data.map((record) =>
            record.key === editing.key ? { ...values, key: record.key } : record
        );
        setData(updatedData);
        console.log('Success:', values);
        form.resetFields();
        setIsModalOpen(false);
        setEditing(null);
    };

    const handleCreate = (values) => {
        const newRecord = {
            ...values,
            key: data.length + 1
        };
        setData([...data, newRecord]);
        console.log('Success:', values);
        form.resetFields();
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        if (editing) {
            handleFinishEdit(values);
        } else {
            handleCreate(values);
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
        setEditing(null);
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = data.filter((record) =>
        record.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleOk = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <Input
                placeholder="Search by name"
                value={searchText}
                onChange={handleSearch}
            />
            <Table dataSource={filteredData} columns={columns} />
            <Button type="primary" onClick={showModal}>
                Create
            </Button>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form

                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
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
                        ]}
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
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Student;
