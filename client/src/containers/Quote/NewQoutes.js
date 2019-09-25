import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Button,
  Form,
  Select,
  Modal,
  Divider,
  Tag
} from "antd";
import "./styles.css";

import { ASelect, AInput } from '../../inputTypes';
import * as actions from "../../actions/create-qoute";

import { Field, reduxForm, getFormValues } from 'redux-form';
import * as priceaction from "../../actions/price-action";

class NewQoutes extends Component {
  state = {
    values: [],
    price: 0,
    showPrice: false,
    modal2Visible: this.props.modal2Visible,
    motor: false,
    dimension: 0,
    fabrics: 0,
    motorType: 0,
    shade: 0,
    type: 0
  }
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    this.props.getPrice()
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  calculatePrice = () => {
    const { formValues, price: { data } } = this.props;
    console.log(data, 'price data');
    let total = 0;
    formValues && Object.entries(formValues).forEach(([key, value]) => {
      if(key === 'shade_type' && value === 'Motorize') {
        total = total + data.shade.manual
      } else {
        total = total + data.shade.motor
      }
      
      if(key === 'single_or_double_shade' && value === 'single') {
        total = total + data.type.single
      } else {
        total = total + data.type.dual
      }
      
      if(key === 'motor') {
        total = total + data.motor.hardwire
      }
      
      if(key === 'fabrics' && value === 'manual') {
        total = total + data.fabrics.avila
      } else {
        total = total + data.fabrics.deco
      }
      
      if(key=== 'roll_direction') {
        total = total + data.dimension.perSquare
      }
    });

    console.log(total, 'total');
    total > 0 && this.setState({ price: total });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.addQoute(values);
        this.props.form.resetFields();
        this.props.setModal2Visible(false);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };
  handleshowPrice = () => {
    this.setState({ showPrice: true })
  }

  setPrice = (val) => {
    let price = this.state.price;
    let values = this.state.values;
    const index = values.indexOf(val);
    if (index == -1) {
      values.push(val)
      price = price + val;
    }
    this.setState({ price: price, values: values })
  }

  handleMotor = (value) => {
    this.setState({ motor: value })
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    const { formValues } = this.props;
    const { Option } = Select;
    const { data } = this.props.price;
    console.log("_P_P_P_P_P_P", formValues)
    return (
      <Modal
        centered
        footer={null}
        width={800}
        closable={true}
        maskClosable={false}
        title="Create Qoutes"
        visible={this.props.modal2Visible}
        onOk={() => this.props.setModal2Visible(false)}
        onCancel={() => this.props.setModal2Visible(false)}
        style={{ maxHeight: "80vh", borderRadius: 10 }}
      >
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSubmit}
        >
          <Row gutter={24} style={{ textAlign: "center" }}>
            <h3>New Shades</h3>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Shade Type"
                name="shade_type"
                component={ASelect}
              >
                <Option key={0} value="-">- </Option>
                <Option
                  key={1}
                  value="Manual"
                  onClick={() => this.handleMotor(false)}
                >
                  Manual
                </Option>
                <Option
                  value="Motorize"
                  onClick={() => this.handleMotor(true)}
                >
                  Motorize
                </Option>
              </Field>
            </Col>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Single or Duel Shade"
                name="single_or_double_shade"
                component={ASelect}
              >
                <Option value="-">-</Option>
                <Option value="Single" onClick={() => this.setPrice(6)}>
                  Single
                </Option>
                <Option value="Duel" onClick={() => this.setPrice(12)}>
                  Duel
                </Option>
              </Field>
            </Col>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                style={{ width: 70 }}
                showSearch
                label="Width"
                name="width"
                component={ASelect}
                onChange={this.handleChange}
              >
                <Option value="0">0</Option>
                <Option
                  value="1/8"
                  onClick={() => this.setPrice(4)}
                >
                  1/8
                            </Option>
                <Option
                  value="1/4"
                  onClick={() => this.setPrice(7)}
                >
                  1/4
                            </Option>
                <Option
                  value="3/8"
                  onClick={() => this.setPrice(9)}
                >
                  3/8
                            </Option>
                <Option
                  value="1/2"
                  onClick={() => this.setPrice(11)}
                >
                  1/2
                            </Option>
                <Option
                  value="5/8"
                  onClick={() => this.setPrice(13)}
                >
                  5/8
                            </Option>
                <Option
                  value="3/4"
                  onClick={() => this.setPrice(14)}
                >
                  3/4
                            </Option>
                <Option
                  value="7/8"
                  onClick={() => this.setPrice(15)}
                >
                  7/8
                            </Option>
              </Field>
            </Col>
          </Row >
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                style={{ width: 70 }}
                showSearch
                label="Height"
                name="height"
                component={ASelect}
                onChange={this.handleChange}
              >
                <Option value="0">0</Option>
                <Option
                  value="1/8"
                  onClick={() => this.setPrice(4)}
                >
                  1/8
                            </Option>
                <Option
                  value="1/4"
                  onClick={() => this.setPrice(7)}
                >
                  1/4
                            </Option>
                <Option
                  value="3/8"
                  onClick={() => this.setPrice(9)}
                >
                  3/8
                            </Option>
                <Option
                  value="1/2"
                  onClick={() => this.setPrice(11)}
                >
                  1/2
                            </Option>
                <Option
                  value="5/8"
                  onClick={() => this.setPrice(13)}
                >
                  5/8
                            </Option>
                <Option
                  value="3/4"
                  onClick={() => this.setPrice(14)}
                >
                  3/4
                            </Option>
                <Option
                  value="7/8"
                  onClick={() => this.setPrice(15)}
                >
                  7/8
                            </Option>
              </Field>
            </Col>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                style={{ width: 70 }}
                showSearch
                label="Mount Type"
                name="mount_type"
                component={ASelect}
                onChange={this.handleChange}
              >
                <Option value="jack" onClick={() => this.setPrice(25)}>
                  Jack
                        </Option>
                <Option value="lucy" onClick={() => this.setPrice(26)}>
                  Lucy
                        </Option>
                <Option
                  value="Yiminghe"
                  onClick={() => this.setPrice(27)}
                >
                  yiminghe
                        </Option>

              </Field>
            </Col>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                style={{ width: 70 }}
                showSearch
                label="Control Side"
                name="control_side"
                component={ASelect}
                onChange={this.handleChange}
              >
                <Option value="jack" onClick={() => this.setPrice(1)}>
                  Jack
                </Option>
                <Option value="lucy" onClick={() => this.setPrice(2)}>
                  Lucy
                </Option>
                <Option
                  value="Yiminghe"
                  onClick={() => this.setPrice(3)}
                >
                  yiminghe
                </Option>
              </Field>
            </Col>
          </Row>
          <Divider />
          <Row gutter={24} style={{ textAlign: "center" }}>
            <h3>Header</h3>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Shade Type"
                name="header_shade_type"
                component={ASelect}
              >
                <Option value="-">- </Option>
                <Option
                  value="Facica 3 in."
                  onClick={() => this.setPrice(31)}
                >
                  Facica 3 in.
                          </Option>
                <Option
                  value="Facica 4 in."
                  onClick={() => this.setPrice(32)}
                >
                  Facica 4 in.
                  </Option>
                <Option value="Facica 5 in.">Facica 5 in.</Option>
                <Option value="Facica 7 in.">Facica 7 in.</Option>
                <Option
                  value="Cassette 3 in."
                  onClick={() => this.setPrice(34)}
                >
                  Cassette 80
                          </Option>
                <Option
                  value="Cassette 4 in."
                  onClick={() => this.setPrice(33)}
                >
                  Cassette 100
                          </Option>
                <Option value="Cassette 5 in.">Cassette 120</Option>
              </Field>
            </Col>
            <Col span={8} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Header Color"
                name="header_color"
                component={ASelect}
              >
                <Option value="">-</Option>
                <Option
                  value="Anodized"
                  onClick={() => this.setPrice(35)}
                >
                  Anodized
                </Option>
                <Option value="White" onClick={() => this.setPrice(36)}>
                  White
                </Option>
                <Option value="Vanilla">Vanilla</Option>
                <Option value="Bronze">Bronze</Option>
                <Option value="Black">Black</Option>
              </Field>
            </Col>
            <Col span={1} />
          </Row >
          <Divider />
          <Row gutter={24} style={{ textAlign: "center" }}>
            <h3>Inside Fabric</h3>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Fabrics"
                name="fabrics"
                component={ASelect}
              >
                <Option value="-" onClick={() => this.setPrice(37)}>
                  -
                 </Option>
                <Option
                  value="manual"
                  onClick={() => this.setPrice(38)}
                >
                  Manual
                </Option>
                <Option value="auto">Motorize</Option>
              </Field>
            </Col>
            <Col span={8} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Roll Direction"
                name="roll_direction"
                component={ASelect}
              >
                <Option value="-">-</Option>
                <Option
                  value="Standard Roll"
                  onClick={() => this.setPrice(42)}
                >
                  Standard Roll
                  </Option>
                <Option
                  value="Reverse Roll"
                  onClick={() => this.setPrice(41)}
                >
                  Reverse Roll
                </Option>
              </Field>
            </Col>
            <Col span={1} />
          </Row >
          <Divider />
          {
            this.state.motor && (
              <>
                <Row gutter={24} style={{ textAlign: "center" }}>
                  <h3>Motor</h3>
                </Row>
                <Row gutter={24}>
                  <Col span={1} />
                  <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
                    <Field
                      showSearch
                      label="Motor"
                      name="motor"
                      component={ASelect}
                    >
                      <Option
                        value="28 mm Hardwired RF Motor"
                        onClick={() => this.setPrice(45)}
                      >
                        28 mm Hardwired RF Motor
                    </Option>
                      <Option
                        value="28 mm Li-Ion RF"
                        onClick={() => this.setPrice(46)}
                      >
                        28 mm Li-Ion RF
                   </Option>
                      <Option value="35 mm AC RF">35 mm AC RF</Option>
                      <Option value="45 mm AC RF">45 mm AC RF</Option>
                      <Option value="45 mm Li-Ion RF">
                        45 mm Li-Ion RF
                          </Option>
                    </Field>
                  </Col>
                  <Col span={8} />
                  <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
                    <Field
                      showSearch
                      label="DC Type"
                      name="dc-type"
                      component={ASelect}
                    >
                      <Option value="">-</Option>
                      <Option
                        value="Hardwired"
                        onClick={() => this.setPrice(55)}
                      >
                        Hardwired
                     </Option>
                      <Option
                        value="Solar Panel - 3 Watt"
                        disabled="true"
                        onClick={() => this.setPrice(56)}
                      >
                        Solar Panel - 3 Watt
                     </Option>
                      <Option value="Internal Battery" disabled="true">
                        Internal Battery
                      </Option>
                      <Option value="External Li-Ion Battery">
                        External Li-Ion Battery
                      </Option>
                    </Field>
                  </Col>
                  <Col span={1} />
                </Row >
                <Divider />
              </>
            )
          }
          <Row gutter={24} style={{ textAlign: "center" }}>
            <h3>Options</h3>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Hembar Type"
                name="hembar_type"
                component={ASelect}
              >
                <Option
                  value="Internal / Sealed"
                  onClick={() => this.setPrice(57)}
                >
                  Internal / Sealed
                 </Option>
                <Option
                  value="External / Fabric Wrapped"
                  onClick={() => this.setPrice(58)}
                >
                  External / Fabric Wrapped
                  </Option>
                <Option value="External / Metal">
                  External / Metal
                 </Option>
              </Field>
            </Col>
            <Col span={8} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Hembar Color"
                name="hembar_color"
                component={ASelect}
              >
                <Option value="" onClick={() => this.setPrice(59)}>
                  -
                </Option>
                <Option
                  value="Anodized"
                  onClick={() => this.setPrice(60)}
                >
                  Anodized
                </Option>
                <Option value="White">White</Option>
                <Option value="Vanilla">Vanilla</Option>
                <Option value="Bronze">Bronze</Option>
                <Option value="Black">Black</Option>
              </Field>
            </Col>
            <Col span={1} />
          </Row >
          <Divider />
          <Row gutter={24} style={{ textAlign: "center" }}>
            <h3>Attribute</h3>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Floor"
                name="floor"
                component={AInput}
              />
            </Col>
            <Col span={8} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Direction Facing"
                name="direction_facing"
                component={ASelect}
              >
                <Option value="">Unknown</Option>
                <Option value="North">North</Option>
                <Option value="Northeast">Northeast</Option>
                <Option value="East">East</Option>
                <Option value="Southeast">Southeast</Option>
                <Option value="South">South</Option>
                <Option value="Southwest">Southwest</Option>
                <Option value="West">West</Option>
                <Option value="Northwest">Northwest</Option>
              </Field>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={1} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Room Name"
                name="room_name"
                component={AInput}
              />
            </Col>
            <Col span={8} />
            <Col span={6} style={{ textAlign: "center", fontWeight: 600 }}>
              <Field
                showSearch
                label="Shade Name"
                name="shade_name"
                component={AInput}
              />
            </Col>

          </Row >
          <Divider />
          <Row gutter={24}>
            <Col span={24} style={{ textAlign: "right" }}>
              {this.state.showPrice ? (
                <Tag
                  classNam="priceDiv"
                  color="magenta"
                >
                  Price : ${this.state.price}
                </Tag>
              ) : (
                  ""
                )}
              <Button
                onClick={() => {
                  // this.handleshowPrice();
                  this.calculatePrice();
                }}
                style={{ marginRight: 8 }}
              >
                Estimate Price
                  </Button>
              <Button type="primary" htmlType="submit">
                Create
                  </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
                  </Button>
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => this.props.setModal2Visible(false)}
              >
                Close
                  </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  price: state.price,
  formValues: getFormValues("CreateQuoteForm")(state)
});

const mapDispatchToProps = dispatch => {
  return {
    // addQoute: values => dispatch(actions.createQouteRequest(values))
    getPrice: () => dispatch(priceaction.getPriceRequest())
  }
}

const WrappedQuoteForm = reduxForm({
  form: 'CreateQuoteForm',
  // validate,
})(NewQoutes);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedQuoteForm);