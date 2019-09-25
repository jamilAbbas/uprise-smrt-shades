import React from 'react';
import { Divider, Popconfirm, message } from 'antd';

export const columns = [
    {
        title: "Shade Type",
        dataIndex: "shade_type",
        key: "shade_type",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Fabric",
        dataIndex: "fabrics",
        key: "fabrics"
    },
    {
        title: "DC Type",
        dataIndex: "dc_type",
        key: "dc_type",
        render: text => <strong>{text}</strong>
    },
    {
        title: "Control Side",
        dataIndex: "control_side",
        key: "control_side",
    },
    {
        title: "Header Color",
        dataIndex: "header_color",
        key: "header_color"
    },
    {
        title: "Shade Header Type",
        key: "header_shade_type",
        dataIndex: "header_shade_type"
    },
    {
        title: "Roll Direction",
        key: "roll_direction",
        dataIndex: "roll_direction"
    },
    {
        title: "Width",
        key: "width",
        dataIndex: "width",
        render: text => <strong>{text}</strong>
    },
    {
        title: "height",
        key: "height",
        dataIndex: "height",
        render: text => <strong>{text}</strong>
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
                        message.success('Deleted successfully');
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
