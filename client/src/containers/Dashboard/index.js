import React from "react";
import { Row, Col, Icon, Table, Divider, Tag, Button } from "antd";
import "./styles.css";
class Dashboard extends React.Component {
  render() {
    const columns = [
      {
        title: "Quote ID",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
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
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];
    return (
      <div className="dashboardContainer">
        <Row>
          <Col offset={1} span={6} sm={24}>
            <div className="manageUsersContainer">
              <h1>Manage Users</h1>
              <div className="useraccount">
                <Icon type="team" style={{ fontSize: "44px" }} />
                <p style={{ fontSize: "14px" }}>User Accounts</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={1} />
          <Col span={22}>
            <div style={{ float: "right" }}>
              <Button type="success" icon="plus">
                New Quote
              </Button>
            </div>
            <h1>Active Quotes</h1>
            <Table columns={columns} />
          </Col>
          <Col span={1} />
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <h1 style={{ marginTop: "1rem" }}>Ready to Manufacture</h1>
            <Table columns={columns} />
          </Col>
          <Col span={1} />
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <h1 style={{ marginTop: "1rem" }}>Submitted for Manufacturing</h1>
            <Table columns={columns} />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
