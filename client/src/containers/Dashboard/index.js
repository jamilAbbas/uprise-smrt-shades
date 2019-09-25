import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Icont, Row, Col, Icon, Table, Tag, Button, Spin, Divider } from 'antd';
import './dashboard.css'
import { columns } from './tableColumns';
import UserForm from './UserForm';
import { userColumns } from './userTableColums'
import * as actions from '../../actions/get-qoutes';
import { flush } from 'redux-saga/effects';
import { Link } from 'react-router-dom'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class dashboard extends Component {

  state = {
    selectedUser: {},
    activeQoutes: true,
    readyForManufacturing: false,
    submitForManufacturing: false,
  }


  handleActiveQoutes = () => {
    this.setState({
      activeQoutes: true,
      manageUser: false,
      readyForManufacturing: false,
      submitForManufacturing: false,
    })
  }
  handleReadyForManufacturing = () => {
    this.setState({
      readyForManufacturing: true,
      submitForManufacturing: false,
      activeQoutes: false,
      manageUser: false
    })
  }
  handleSubmitForManufacturing = () => {
    this.setState({
      readyForManufacturing: false,
      submitForManufacturing: true,
      activeQoutes: false,
      manageUser: false
    })
  }

  componentDidMount() {
    this.props.fetchList();
    this.props.fetchUserList();
  }

  render() {
    const { dashboard } = this.props;
    return (
      <div>
        <Layout>
          <Layout>
            <Sider width={250} style={{ background: '#fff', minWidth: 900 }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="2" onClick={this.handleActiveQoutes}>
                  <Icon type="check-square" />
                  <span>Active Qoutes</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={this.handleReadyForManufacturing}>
                  <Icon type="carry-out" />
                  <span>Ready For Manufacturing</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={this.handleSubmitForManufacturing}>
                  <Icon type="upload" />
                  <span>Submit For Manufacturing</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 570,
                }}
              >
                {
                  this.state.activeQoutes ?
                    <Row gutter={24}>
                      <Col span={24}>
                        <div style={{ float: "right" }}>
                          <Button type="success" icon="plus">
                            <Link to="/create-quote">
                              New Quote
                            </Link>
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
                    </Row> : ""
                }
                {
                  this.state.readyForManufacturing ?
                    <Row gutter={24}>
                      <Col span={24}>
                        <h1 style={{ marginTop: "1rem" }}>Ready to Manufacture</h1>
                        <Table columns={columns} />
                      </Col>
                    </Row> : ""
                }
                {
                  this.state.submitForManufacturing ?
                    <Row gutter={24}>
                      <Col span={24}>
                        <h1 style={{ marginTop: "1rem" }}>Submitted for Manufacturing</h1>
                        <Table columns={columns} />
                      </Col>
                    </Row> : ""
                }
              </Content>
            </Layout>
          </Layout>
        </Layout>,
            </div>
    )
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
)(dashboard);