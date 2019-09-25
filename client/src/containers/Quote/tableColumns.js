import React from 'react';

import { Divider } from 'antd';

export const columns = [
    {
        title: "Select",
        dataIndex: "shade_type",
        key: "shade_type",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Room Name",
        dataIndex: "room_name",
        key: "room_name"
    },
    {
        title: "Shade Name",
        dataIndex: "shade_name",
        key: "shade_name"
    },
    {
        title: "Fabric",
        key: "fabrics",
        dataIndex: "fabrics"
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
        title: "Roll Direction",
        key: "roll_direction",
        dataIndex: "roll_direction"
    },
    {
        title: "Acions",
        key: "action",
        render: (text, record) => (
            <span>
                {/* <a href="javascript:;">Invite {record.name}</a> */}
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
            </span>
        )
    }
];
