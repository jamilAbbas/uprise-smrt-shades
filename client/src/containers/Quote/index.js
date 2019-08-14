import React from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Input,
} from "antd";

import * as actions from '../../actions/create-qoute';
import { columns } from './tableColumns';
import "./styles.css";


class Quote extends React.Component {
  state = {
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  getFields() {
    const labels = ["Type", "Room Name", "Shade Name", "Fabric", "Width", "Height", "MSRP"]
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < labels.length; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: 'block' }}>
          <Form.Item label={labels[i]}>
            {getFieldDecorator(labels[i].trim().toLowerCase(), {
              rules: [
                {
                  required: true,
                  message: 'Please enter value!',
                },
              ],
            })(<Input placeholder="Enter value" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.form.resetFields();
        this.setModal2Visible(false);
        this.props.addQoute(values);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className="dashboardContainer">
        <Row>
          <Col offset={1} span={6}>
            <div className="quotesform">
              <Form layout="vertical">
                <Form.Item label="Quote Title">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: false,
                        message: "Please input the title of collection!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Reference #">
                  {getFieldDecorator("description")(<Input />)}
                </Form.Item>
                <Form.Item label="Notes">
                  {getFieldDecorator("description")(<Input />)}
                </Form.Item>
                <Form.Item label="Territory">
                  {getFieldDecorator("description")(<Input />)}
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col offset={2} span={8}>
            <div className="propAddress">
              <h1>Property Address</h1>
              <div>
                <span
                  style={{
                    fontSize: "16px",
                    marginRight: "8rem",
                    marginBottom: "1rem"
                  }}
                >
                  Company:{" "}
                </span>
                <span style={{ fontSize: "16px" }}>Name: </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "16px",
                    marginRight: "8.4rem",
                    marginBottom: "1rem"
                  }}
                >
                  Address:{" "}
                </span>
                <span style={{ fontSize: "16px" }}>City: </span>
              </div>
              <div style={{ float: "right", marginTop: "1rem" }}>
                <Button
                  type="primary"
                  icon="edit"
                  onClick={() => this.setModal2Visible(true)}
                >
                  Edit
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22} />
          <Col span={1} />
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ float: "right" }}>
                <Button
                  type="primary"
                  icon="plus"
                  onClick={() => this.setModal2Visible(true)}
                >
                  Place Order
                </Button>
              </div>
              <div style={{ float: "right" }}>
                <Button
                  type="success"
                  icon="copy"
                  onClick={() => this.setModal2Visible(true)}
                >
                  Excel
                </Button>
              </div>
              <div style={{ float: "right" }}>
                <Button
                  type="success"
                  icon="copy"
                  onClick={() => this.setModal2Visible(true)}
                >
                  Duplicate
                </Button>
              </div>
            </div>

            <Table
              bordered
              columns={columns}
              title={() => "Shades"}
              footer={() => "Footer"}
              pagination={{ pageSize: 5 }}
              dataSource={data && [...data.current] || []}
              style={{ textAlign: "center", fontWeight: "600" }}
            />
          </Col>
          <Col span={1} />
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <div className="shadesbutton">
              <Button
                type="primary"
                icon="plus"
                onClick={() => this.setModal2Visible(true)}
              >
                Shades/Accessories
              </Button>
            </div>
          </Col>
          <Col span={1} />
        </Row>
        <Modal
          centered
          title="Create Qoutes"
          visible={this.state.modal2Visible}
          footer={null}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.current,
});

const mapDispatchToProps = dispatch => {
  return {
    addQoute: values => dispatch(actions.createQoute(values))
  }
}

const WrappedQuoteForm = Form.create({ name: "quote_form" })(Quote);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedQuoteForm);
