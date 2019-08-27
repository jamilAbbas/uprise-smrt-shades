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
  Select,
  Divider
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
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  getFields() {
    
    // const labels = ["Type", "Room Name", "Shade Name", "Fabric", "Width", "Height", "MSRP"]
    // const { getFieldDecorator } = this.props.form;
    // const children = [];
    // for (let i = 0; i < labels.length; i++) {
    //   children.push(
    //     <Col span={8} key={i} style={{ display: 'block' }}>
    //       <Form.Item label={labels[i]}>
    //         {getFieldDecorator(labels[i].trim().toLowerCase(), {
    //           rules: [
    //             {
    //               required: true,
    //               message: 'Please enter value!',
    //             },
    //           ],
    //         })(
    //           <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
    //           <OptGroup label="Manager">
    //            <Option value="jack">Jack</Option>
    //              <Option value="lucy">Lucy</Option>
    //                </OptGroup>
    //                <OptGroup label="Engineer">
    //                 <Option value="Yiminghe">yiminghe</Option>
    //               </OptGroup>
    //                </Select>
    //         )}
    //       </Form.Item>
    //     </Col>,
    //   );
    // }
    // return children;

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
          width = {800}
        >
          <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
            <Row gutter={24} style={{textAlign: 'center'}}>
              <h3 >New Shades</h3>
            </Row>
            <Row >
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Shade Type">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="-">- </Option>
                  <Option value="Manual">Manual</Option>
                  <Option value="Motorize">Motorize</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Single or Duel Shade">
             {getFieldDecorator("description")(
                <Select style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="-">-</Option>
                  <Option value="Single">Single</Option>
                  <Option value="Duel">Duel</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Width">
             {getFieldDecorator("description")(
               <Input style={{width: 200}}
               addonAfter = {
                <Select 
                style={{width: 70}}
                 onChange={this.handleChange} >
                <Option value="0">0</Option>
                <Option value="1/8">1/8</Option>
                <Option value="1/4">1/4</Option>
                <Option value="3/8">3/8</Option>
                <Option value="1/2">1/2</Option>
                <Option value="5/8">5/8</Option>
                <Option value="3/4">3/4</Option>
                <Option value="7/8">7/8</Option>
               </Select>
               }
              />
                  )}
                </Form.Item>
            </Col>
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Height">
             {getFieldDecorator("description")(
               <Input style={{width: 200}}
               addonAfter = {
                <Select 
                style={{width: 70}}
                 onChange={this.handleChange} >
                <Option value="0">0</Option>
                <Option value="1/8">1/8</Option>
                <Option value="1/4">1/4</Option>
                <Option value="3/8">3/8</Option>
                <Option value="1/2">1/2</Option>
                <Option value="5/8">5/8</Option>
                <Option value="3/4">3/4</Option>
                <Option value="7/8">7/8</Option>
               </Select>
               }
              />
                  )}
                </Form.Item>
            </Col>
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Mount Type">
             {getFieldDecorator("description")(
                <Select style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={8} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Control Side">
             {getFieldDecorator("description")(
                <Select style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
          </Row>
          <Divider/>
          <Row gutter={24} style={{textAlign: 'center'}}>
              <h3 >Header</h3>
            </Row>
            <Row>
            <Col span={24} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Shade Type">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="-">- </Option>
                  <OptGroup label="Facica">
                    <Option value="Facica 3 in.">Facica 3 in.</Option>
                    <Option value="Facica 4 in.">Facica 4 in.</Option>
                    <Option value="Facica 5 in.">Facica 5 in.</Option>
                    <Option value="Facica 7 in.">Facica 7 in.</Option>
                  </OptGroup> 
                  <OptGroup label="Cassette">
                    <Option value="Cassette 3 in.">Cassette 80</Option>
                    <Option value="Cassette 4 in.">Cassette 100</Option>
                    <Option value="Cassette 5 in.">Cassette 120</Option>
                  </OptGroup> 
                 </Select>
                  )}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            <Divider/>
            <Row gutter={24} style={{textAlign: 'center'}}>
              <h3 >Inside Fabric</h3>
            </Row>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Fabrics">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="-">-</Option>
                  <Option value="Manual">Manual</Option>
                  <Option value="Motorize">Motorize</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Roll Direction">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <Option value="-">-</Option>
                  <Option value="Standard Roll">Standard Roll</Option>
                  <Option value="Reverse Roll">Reverse Roll</Option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            <Row>
            <Divider/>
            <Row gutter={24} style={{textAlign: 'center'}}>
              <h3 >Motor</h3>
            </Row>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Motor">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <option value="28 mm Hardwired RF Motor">28 mm Hardwired RF Motor</option>
                  <option value="28 mm Li-Ion RF">28 mm Li-Ion RF</option>
                  <option value="35 mm AC RF">35 mm AC RF</option>
                  <option value="45 mm AC RF">45 mm AC RF</option>
                  <option value="45 mm Li-Ion RF">45 mm Li-Ion RF</option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="DC Type">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <option value="">-</option><option value="Hardwired">Hardwired</option>
                  <option value="Solar Panel - 3 Watt" disabled="true">Solar Panel - 3 Watt</option>
                  <option value="Internal Battery" disabled="true">Internal Battery</option>
                  <option value="External Li-Ion Battery">External Li-Ion Battery</option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            <Row>
            <Divider/>
            <Row gutter={24} style={{textAlign: 'center'}}>
              <h3 >Motor</h3>
            </Row>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="Motor">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <option value="28 mm Hardwired RF Motor">28 mm Hardwired RF Motor</option>
                  <option value="28 mm Li-Ion RF">28 mm Li-Ion RF</option>
                  <option value="35 mm AC RF">35 mm AC RF</option>
                  <option value="45 mm AC RF">45 mm AC RF</option>
                  <option value="45 mm Li-Ion RF">45 mm Li-Ion RF</option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
            <Form.Item label="DC Type">
             {getFieldDecorator("description")(
                <Select defaultValue = "-" style={{ width: 200 }} onChange={this.handleChange}>
                  <option value="">-</option><option value="Hardwired">Hardwired</option>
                  <option value="Solar Panel - 3 Watt" disabled="true">Solar Panel - 3 Watt</option>
                  <option value="Internal Battery" disabled="true">Internal Battery</option>
                  <option value="External Li-Ion Battery">External Li-Ion Battery</option>
                 </Select>
                  )}
                </Form.Item>
            </Col>
            </Row>
            </Row>
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
