import React from 'react';
import { Divider, Popconfirm, message } from 'antd';

export const columns = [
    {
        title: "Quote ID",
        dataIndex: "key",
        key: "key",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <strong>{text}</strong>
    },
    {
        title: "Title",
        dataIndex: "age",
        key: "age"
    },
    {
        title: "Created By",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Created",
        key: "tags",
        dataIndex: "createdAt"
    },
    {
        title: "Last Updated",
        key: "tags",
        dataIndex: "updatedAt"
    },
    {
        title: "MSRP",
        key: "tags",
        dataIndex: "msrp"
    },
    {
        title: "Payment Status",
        key: "tags",
        dataIndex: "status"
    },
    {
        title: "Acions",
        key: "action",
        render: (text, record) => (
            <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <Popconfirm
                    title="Are you sure delete this entry?"
                    onConfirm={(e) => {
                        console.log(e);
                        message.success('In progress, not functional yet');
                    }}
                    onCancel={(e) => {
                        console.log(e);
                    }}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="javascript:;">Delete</a>
                </Popconfirm>
            </span>
        )
    }
];
