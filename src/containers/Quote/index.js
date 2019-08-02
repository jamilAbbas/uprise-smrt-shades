import React from "react";
import {
  Row,
  Col,
  Icon,
  Table,
  Divider,
  Tag,
  Button,
  Modal,
  Form,
  Input
} from "antd";
import "./styles.css";

class Quote extends React.Component {
  state = {
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    const columns = [
      {
        title: "Select",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Room Name",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Shade Name",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Fabric",
        key: "tags",
        dataIndex: "tags"
      },
      {
        title: "Width",
        key: "tags",
        dataIndex: "tags"
      },
      {
        title: "Height",
        key: "tags",
        dataIndex: "tags"
      },
      {
        title: "MSRP",
        key: "tags",
        dataIndex: "tags"
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
          <Col offset={1} span={6}>
            <div className="quotesform">
              <Form layout="vertical">
                <Form.Item label="Quote Title">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: true,
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
              columns={columns}
              bordered
              style={{ textAlign: "center", fontWeight: "600" }}
              title={() => "Shades"}
              footer={() => "Footer"}
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
          title="Vertically centered modal dialog"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}
const WrappedQuoteForm = Form.create({ name: "quote_form" })(Quote);

export default WrappedQuoteForm;
