import React from 'react';
import {
    Divider, Popconfirm, message, Switch, Tooltip
} from 'antd';

export const userColumns = (parent) => [
    {
        title: "Name",
        dataIndex: "fullname",
        key: "fullname",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email"
    },
    {
        title: "Status",
        dataIndex: "isActive",
        key: "isActive",
        render: text => text === true ? <strong>Active</strong> : <strong>InActive</strong>
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Acions",
        key: "action",
        render: (text, record) => (
            <span>
                <Tooltip title="active/inactive">
                    <Switch
                        checked={record.isActive}
                        onChange={() => parent.props.updateUser(
                            record._id,
                            { isActive: !record.isActive }
                        )}
                    />
                </Tooltip>
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
