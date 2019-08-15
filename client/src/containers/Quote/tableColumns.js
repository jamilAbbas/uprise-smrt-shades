import React from 'react';

import { Divider } from 'antd';

export const columns = [
    {
        title: "Select",
        dataIndex: "type",
        key: "type",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Room Name",
        dataIndex: "room name",
        key: "age"
    },
    {
        title: "Shade Name",
        dataIndex: "shade name",
        key: "address"
    },
    {
        title: "Fabric",
        key: "fabric",
        dataIndex: "fabric"
    },
    {
        title: "Width",
        key: "width",
        dataIndex: "width"
    },
    {
        title: "Height",
        key: "height",
        dataIndex: "height"
    },
    {
        title: "MSRP",
        key: "msrp",
        dataIndex: "msrp"
    },
    {
        title: "Acions",
        key: "action",
        render: (text, record) => (
            <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
            </span>
        )
    }
];
