import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Row, Col, Icon, Table, Tag, Button, Spin, Divider ,Avatar, Badge, Tooltip } from 'antd';
import { columns } from './tableColumns';
import UserForm from './UserForm';
import { userColumns } from './userTableColums';
import ManagePrice from './ManagePrice'
import * as actions from '../../actions/get-qoutes';
import './styles.css'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class dashboard extends Component {
    
    state = { selectedUser: {} ,
               manageUser : true,
               activeQoutes: false, 
               readyForManufacturing: false,
               submitForManufacturing: false, 
               mamagePrice: false
            }   

    handleManageUSer =() => {
        this.setState({manageUser: true,
                      activeQoutes: false, 
                      readyForManufacturing: false,
                      submitForManufacturing: false,
                      mamagePrice: false
                    })
    }

    handleActiveQoutes = () => {
        this.setState({activeQoutes : true,
                       manageUser: false,
                       readyForManufacturing: false,
                       submitForManufacturing: false,
                       mamagePrice: false
        })
    }
    handleReadyForManufacturing = () => {
        this.setState({
                       readyForManufacturing: true,
                       submitForManufacturing: false,
                       activeQoutes : false,
                       manageUser: false,
                       mamagePrice: false
        })
    }
    handleSubmitForManufacturing = () => {
        this.setState({
                       readyForManufacturing: false,
                       submitForManufacturing: true,
                       activeQoutes : false,
                       manageUser: false,
                       mamagePrice: false
        })
    }
    handleManagePrice = () => {
      this.setState({
                     mamagePrice: true,
                     readyForManufacturing: false,
                     submitForManufacturing: false,
                     activeQoutes : false,
                     manageUser: false,
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
      <Avatar size={84} icon="user"  style={{marginLeft: 80, marginTop: 10}}/>
      <h3 style={{margin: "auto", width:60}}>Admin</h3>
      <Divider/>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
         <Menu.Item key="1" onClick ={this.handleManageUSer}>
            <Icon type="user" />
            <span>Manage Users</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.handleManagePrice}>
            <Icon type="dollar" />
            <span>Manage Price</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.handleActiveQoutes}>
            <Icon type="check-square" />
            <span>Active Qoutes</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.handleReadyForManufacturing}>
            <Icon type="carry-out" />
            <span>Ready For Manufacturing</span>
          </Menu.Item>
          <Menu.Item key="5" onClick={this.handleSubmitForManufacturing}>
            <Icon type="upload" />
            <span>Submit For Manufacturing</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 570,
          }}
        >
        {
            this.state.manageUser ?
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
        </Row> : ""
        }
        {
          this.state.mamagePrice ?
          <Row>
          < ManagePrice/>
          </Row> : ""
        }
        {
            this.state.activeQoutes ?
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