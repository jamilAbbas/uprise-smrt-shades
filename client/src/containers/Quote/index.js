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
  state ={
    modal2Visible: false
  }
  setModal2Visible(modal2Visible) {
    console.log(modal2Visible);
    this.setState({ modal2Visible });
  }
  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;
    const { Option, OptGroup } = Select;

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
              <div style={{ float: "right" }}>
                <Button
                  type="success"
                  icon="copy"
                // onClick={() => this.setModal2Visible(true)}
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
          <div>
            <NewQoutes
              modal2Visible = {this.state.modal2Visible}
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
    addQoute: values => dispatch(actions.createQouteRequest(values))
    // dispatch,
  }
}

const WrappedQuoteForm = Form.create({ name: "quote_form" })(Quote);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedQuoteForm);
