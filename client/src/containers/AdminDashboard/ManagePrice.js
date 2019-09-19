import { connect } from 'react-redux';
import React, { Component } from "react";
import { Row, Col, Form, Input, Button } from "antd";

import * as actions from '../../actions/price-action';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 }
  },
  wrapperCol: {
    xs: { span: 24 },
		sm: { span: 4 }
  }
};

class ManagePrice extends Component {

  componentDidMount (){
    this.props.getPrice();
  }
  
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
						this.props.setPrice(values);
				}
		});
};

  render() {
    const { form, price } = this.props;
    console.log(price, '0-0-0-0-0-0-0');
    const { getFieldDecorator } = form;
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSubmit}
          {...formItemLayout}
        >
          <Row style={{ border: "1px solid #f0f2f5", padding: 10 }}>
            <div>
              <h1>Fabrics</h1>
            </div>
            <Col span={6}>
						<Form.Item label="Avila">
                   {getFieldDecorator("avila", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter floors here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
            <Col span={6}>
						<Form.Item label="Deco">
                   {getFieldDecorator("deco", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter Price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
          </Row>
          <Row style={{ border: "1px solid #f0f2f5", padding: 10 }}>
            <div>
              <h1>Shade</h1>
            </div>
            <Col span={6}>
						<Form.Item label="Manual">
                   {getFieldDecorator("manual", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter Price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
            <Col span={6}>
						<Form.Item label="Motor">
                   {getFieldDecorator("motor", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
          </Row>
          <Row style={{ border: "1px solid #f0f2f5", padding: 10 }}>
            <div>
              <h1>Type</h1>
            </div>
            <Col span={6}>
						<Form.Item label="Single">
                   {getFieldDecorator("single", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
            <Col span={6}>
						<Form.Item label="Duel">
                   {getFieldDecorator("duel", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
          </Row>
          <Row style={{ border: "1px solid #f0f2f5", padding: 10 }}>
            <div>
              <h1>Motor Type</h1>
            </div>
            <Col span={8}>
						<Form.Item label="Hardwire">
                   {getFieldDecorator("hardwire", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
            <Col span={8}>
						<Form.Item label="External Li-lon Battery">
                   {getFieldDecorator("lilon", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
          </Row>
          <Row style={{ border: "1px solid #f0f2f5", padding: 10 }}>
            <div>
              <h1>Dimension</h1>
            </div>
            <Col span={6}>
						<Form.Item label="Per Square Feet">
                   {getFieldDecorator("perSquare", {
                       rules: [
                            {
                             required: true,
                             message: 'Enter price here'
                             },
                              ],
                           })(
                       <Input type="number" style={{ width: 200 }} />
                      )}
                   </Form.Item>
            </Col>
          </Row>
					<Row> 
						<Col span={8} />
						<Col span={8}>
							<Button type="primary" htmlType="submit">
								Create
							</Button>
						</Col>
						<Col span={8} />
					</Row>
        </Form>
      </div>
    );
  }
}
const WrappedQuoteForm = Form.create({ name: "quote_form" })(ManagePrice);

const mapStateToProps = state => ({
  price: state.price
});

const mapDispatchToProps = dispatch => {
	return {
    setPrice: data => dispatch(actions.setPriceRequest(data)), 
    getPrice: () => dispatch(actions.getPriceRequest())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(WrappedQuoteForm);
