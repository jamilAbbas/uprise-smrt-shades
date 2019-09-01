import React from "react";
import { connect } from 'react-redux';
import { Row, Col, Icon, Table, Tag, Button, Spin, Divider } from "antd";

import UserForm from './UserForm';
import { columns } from './tableColumns';
import { userColumns } from './userTableColums'
import * as actions from '../../actions/get-qoutes';
import "./styles.css";

class AdminDashboard extends React.Component {

  state = { selectedUser: {} }

  componentDidMount() {
    this.props.fetchList();
    this.props.fetchUserList();
  }
  render() {
    const { dashboard } = this.props;
    return (
      <div className="dashboardContainer">
        <Row gutter={24}>
          <Col span={15}>
            <h1>Manage Users</h1>
            <Spin spinning={dashboard.loading}>
              <Table
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      this.setState({ selectedUser: record })
                    }
                  }
                }}
                columns={userColumns(this)}
                pagination={{ pageSize: 5 }}
                dataSource={[...dashboard.users]}
              />
            </Spin>
          </Col>
          <Col span={7}>
            <h1>User Details</h1>
            <div style={{ marginBottom: 15 }}>
              <UserForm
                user={this.state.selectedUser}
                updateUserRole={(id, data) => this.props.updateRole(id, data)}
              />
            </div>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <div style={{ float: "right" }}>
              <Button type="success" icon="plus">
                New Quote
              </Button>
            </div>
            <h1>Active Quotes</h1>
            <Spin spinning={dashboard.loading}>
              <Table
                columns={columns}
                pagination={{ pageSize: 5 }}
                dataSource={[...dashboard.activeQoutes]}
              />
            </Spin>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <h1 style={{ marginTop: "1rem" }}>Ready to Manufacture</h1>
            <Table columns={columns} />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <h1 style={{ marginTop: "1rem" }}>Submitted for Manufacturing</h1>
            <Table columns={columns} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(actions.fetchListRequest()),
    fetchUserList: () => dispatch(actions.fetchUserListRequest()),
    updateUser: (id, data) => dispatch(actions.toggleIsActive(id, data)),
    updateRole: (id, data) => dispatch(actions.updateRoleRequest(id, data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);
