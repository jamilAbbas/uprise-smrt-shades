import React from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Table,
  Button,
  Form,
  Input,
  Select,
} from "antd";

import * as actions from "../../actions/create-qoute";
import { columns } from './tableColumns';
import "./styles.css";
import NewQoutes from "./NewQoutes";


class Quote extends React.Component {
  state = {
    modal2Visible: false,
    disabled: true,
  }
  setModal2Visible(modal2Visible) {
    console.log(modal2Visible);
    this.setState({ modal2Visible });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.setValues(values);
      }
    });
  };

  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className="dashboardContainer">
        <div className="quotesform">
          <Row>
            <Col offset={1} span={22}>
              <h1>Property Address</h1>
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Row gutter={24}>
                  <Col span={10} offset={0}>
                    <Form.Item label="Company Nmae">
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter name here" />)}
                    </Form.Item>
                  </Col>
                  <Col span={1} />
                  <Col span={10} offset={0}>
                    <Form.Item label="Address">
                      {getFieldDecorator("address", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter address here" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={10} offset={0}>
                    <Form.Item label="Quote Title">
                      {getFieldDecorator("quote_title", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter title here" />)}
                    </Form.Item>
                  </Col>
                  <Col span={1} />
                  <Col span={10} offset={0}>
                    <Form.Item label="Reference #">
                      {getFieldDecorator("description", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter description here" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={10} offset={0}>
                    <Form.Item label="Notes">
                      {getFieldDecorator("notes", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter detail here" />)}
                    </Form.Item>
                  </Col>
                  <Col span={1} />
                  <Col span={10} offset={0}>
                    <Form.Item label="Territory">
                      {getFieldDecorator("territory", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter value!"
                          }
                        ]
                      })(<Input disabled={this.state.disabled} placeholder="Enter territory here" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <div style={{ float: "right", marginTop: "1rem" }}>
                  {this.state.disabled &&
                    <Button
                      type="primary"
                      icon="edit"
                      onClick={() => {
                        // this.setModal2Visible(true)
                        this.setState({ disabled: false });
                      }}
                    >
                      Edit
                    </Button>}
                  {!this.state.disabled &&
                    <Button
                      htmlType="submit"
                      type="primary"
                      onClick={() => {
                        // this.setModal2Visible(true)
                        this.setState({ disabled: false });
                      }}
                    >
                      Save Changes
                    </Button>}
                </div>
              </Form>
            </Col>
          </Row>
        </div>
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
                // onClick={() => this.setModal2Visible(true)}
                >
                  Place Order
                </Button>
              </div>
              <div style={{ float: "right" }}>
                <Button
                  type="success"
                  icon="copy"
                // onClick={() => this.setModal2Visible(true)}
                >
                  Excel
                </Button>
              </div>
              {/* <div style={{ float: "right" }}>
                <Button
                  type="success"
                  icon="copy"
                // onClick={() => this.setModal2Visible(true)}
                >
                  Duplicate
                </Button>
              </div> */}
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
        <div>
          <NewQoutes
            modal2Visible={this.state.modal2Visible}
            addQoute={data => this.props.addQoute(data)}
            setModal2Visible={val => this.setModal2Visible(val)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.current,
});

const mapDispatchToProps = dispatch => {
  return {
    addQoute: values => dispatch(actions.createQouteRequest(values)),
    setValues: values => dispatch(actions.setValuesRequest(values)),
    // dispatch,
  }
}

const WrappedQuoteForm = Form.create({ name: "quote_form" })(Quote);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedQuoteForm);
