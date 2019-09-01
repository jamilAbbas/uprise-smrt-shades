import React from "react";
import { connect } from 'react-redux';
import { Row, Col, Icon, Table, Tag, Button } from "antd";

import { columns } from './tableColumns';
import * as actions from '../../actions/get-qoutes';
import "./styles.css";

class AdminDashboard extends React.Component {

  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { dashboard } = this.props;
    return (
      <div className="dashboardContainer">
        <Row gutter={96}>
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
            <Table
              columns={columns}
              pagination={{ pageSize: 5 }}
              dataSource={[...dashboard.activeQoutes]}
            />
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

const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(actions.fetchListRequest())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);
