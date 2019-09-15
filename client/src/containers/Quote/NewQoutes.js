import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Select,
    Modal,
    Divider,
    Tag
} from "antd";
import "./styles.css";
import * as actions from "../../actions/create-qoute";

class NewQoutes extends Component {
    state ={
        values: [],
        price: 0,
        showPrice: false,
        modal2Visible: this.props.modal2Visible
    }
    static propTypes = {
        prop: PropTypes
    };

    handleChange(value) {
        console.log(`selected ${value}`);
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
    handleshowPrice =() => {
        this.setState({showPrice : true})
    }

    setPrice =(val) => { 
        let price = this.state.price;
        let values = this.state.values;
        const index = values.indexOf(val);
        if(index == -1){
            values.push(val)
            price = price + val;
        }
       
        this.setState({ price : price, values: values })
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const { Option, OptGroup } = Select;
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
            style={{ maxHeight: "80vh", overflowY: "auto", borderRadius: 10 }}
          >
            <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
                <Row 
                    style={{
                        position: "fixed",
                        top:72,  width:"48.5%",
                        height: 54, marginLeft: -23, 
                        borderBottom:"1px solid gray",
                        borderTopLeftRadius: 5, 
                        zIndex: 1000, backgroundColor:"white"
                        }}>
                            <h3 style ={{marginLeft: 22, marginTop: 12}}>Create Qoutes</h3>
                            {
                    this.state.showPrice ?
                <Tag classNam="priceDiv" color="magenta" style={{marginLeft: 350, position:"absolute",  top: 6 }} >Price : ${this.state.price}</Tag>
                : "" }
                </Row> 
                
                <Row gutter={24} style={{ textAlign: "center" }}>
                    <h3>New Shades</h3>
                </Row>
                <Row>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Shade Type">
                            {getFieldDecorator("shade_type", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select shade type!'
                                    },
                                ],
                            })(
                                <Select
                                    defaultValue="-"
                                    style={{ width: 200 }}
                                    onChange={this.handleChange}
                                >
                                    <Option value="-">- </Option>
                                    <Option value="Manual" onClick ={() => this.setPrice(20)}>Manual</Option>
                                    <Option value="Motorize" onClick ={() => this.setPrice(30)}>Motorize</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Single or Duel Shade">
                            {getFieldDecorator("single_or_double_shade", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select one from the list!'
                                    },
                                ],
                            })(
                                <Select style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="-">-</Option>
                                    <Option value="Single" onClick ={() => this.setPrice(6)}>Single</Option>
                                    <Option value="Duel" onClick ={() => this.setPrice(12)}>Duel</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Width">
                            {getFieldDecorator("width", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select width!'
                                    },
                                ],
                            })(
                                <Input
                                    style={{ width: 200 }}
                                    addonAfter={
                                        <Select style={{ width: 70 }} onChange={this.handleChange}>
                                            <Option value="0">0</Option>
                                            <Option value="1/8" onClick ={() => this.setPrice(4)}>1/8</Option>
                                            <Option value="1/4" onClick ={() => this.setPrice(7)}>1/4</Option>
                                            <Option value="3/8" onClick ={() => this.setPrice(9)}>3/8</Option>
                                            <Option value="1/2" onClick ={() => this.setPrice(11)}>1/2</Option>
                                            <Option value="5/8" onClick ={() => this.setPrice(13)}>5/8</Option>
                                            <Option value="3/4" onClick ={() => this.setPrice(14)}>3/4</Option>
                                            <Option value="7/8" onClick ={() => this.setPrice(15)}>7/8</Option>
                                        </Select>
                                    }
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Height">
                            {getFieldDecorator("height", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select height!'
                                    },
                                ],
                            })(
                                <Input
                                    style={{ width: 200 }}
                                    addonAfter={
                                        <Select style={{ width: 70 }} onChange={this.handleChange}>
                                            <Option value="0">0</Option>
                                            <Option value="1/8" onClick ={() => this.setPrice(17)}>1/8</Option>
                                            <Option value="1/4" onClick ={() => this.setPrice(18)}>1/4</Option>
                                            <Option value="3/8" onClick ={() => this.setPrice(19)}>3/8</Option>
                                            <Option value="1/2" onClick ={() => this.setPrice(21)}>1/2</Option>
                                            <Option value="5/8" onClick ={() => this.setPrice(22)}>5/8</Option>
                                            <Option value="3/4" onClick ={() => this.setPrice(23)}>3/4</Option>
                                            <Option value="7/8" onClick ={() => this.setPrice(24)}>7/8</Option>
                                        </Select>
                                    }
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Mount Type">
                            {getFieldDecorator("mount_type", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select mount type!'
                                    },
                                ],
                            })(
                                <Select style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="jack" onClick ={() => this.setPrice(25)}>Jack</Option>
                                    <Option value="lucy" onClick ={() => this.setPrice(26)}>Lucy</Option>
                                    <Option value="Yiminghe" onClick ={() => this.setPrice(27)}>yiminghe</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: "center", fontWeight: 600 }}>
                        <Form.Item label="Control Side">
                            {getFieldDecorator("control_side", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select control side!'
                                    },
                                ],
                            })(
                                <Select style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="jack" onClick ={() => this.setPrice(1)}>Jack</Option>
                                    <Option value="lucy" onClick ={() => this.setPrice(2)}>Lucy</Option>
                                    <Option value="Yiminghe" onClick ={() => this.setPrice(3)}>yiminghe</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Divider />
                <Row gutter={24} style={{ textAlign: 'center' }}>
                    <h3 >Header</h3>
                </Row>
                <Row>
                    <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                        <Form.Item label="Shade Type">
                            {getFieldDecorator("header_shade_type", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select header shade type!'
                                    },
                                ],
                            })(
                                <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="-">- </Option>
                                    <OptGroup label="Facica">
                                        <Option value="Facica 3 in." onClick ={() => this.setPrice(31)}>Facica 3 in.</Option>
                                        <Option value="Facica 4 in." onClick ={() => this.setPrice(32)}>Facica 4 in.</Option>
                                        <Option value="Facica 5 in." >Facica 5 in.</Option>
                                        <Option value="Facica 7 in." >Facica 7 in.</Option>
                                    </OptGroup>
                                    <OptGroup label="Cassette">
                                        <Option value="Cassette 3 in." onClick ={() => this.setPrice(34)}>Cassette 80</Option>
                                        <Option value="Cassette 4 in." onClick ={() => this.setPrice(33)}>Cassette 100</Option>
                                        <Option value="Cassette 5 in.">Cassette 120</Option>
                                    </OptGroup>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                        <Form.Item label="Header Color">
                            {getFieldDecorator("header_color", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select header color!'
                                    },
                                ],
                            })(
                                <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="">-</Option>
                                    <Option value="Anodized" onClick ={() => this.setPrice(35)}>Anodized</Option>
                                    <Option value="White" onClick ={() => this.setPrice(36)}>White</Option>
                                    <Option value="Vanilla">Vanilla</Option>
                                    <Option value="Bronze">Bronze</Option>
                                    <Option value="Black">Black</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Divider />
                    <Row gutter={24} style={{ textAlign: 'center' }}>
                        <h3 >Inside Fabric</h3>
                    </Row>
                    <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                        <Form.Item label="Fabrics">
                            {getFieldDecorator("fabrics", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select fabric!'
                                    },
                                ],
                            })(
                                <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="-" onClick ={() => this.setPrice(37)}>-</Option>
                                    <Option value="Manual" onClick ={() => this.setPrice(38)}>Manual</Option>
                                    <Option value="Motorize">Motorize</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                        <Form.Item label="Roll Direction">
                            {getFieldDecorator("roll_direction", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select rool direction!'
                                    },
                                ],
                            })(
                                <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                    <Option value="-">-</Option>
                                    <Option value="Standard Roll" onClick ={() => this.setPrice(42)}>Standard Roll</Option>
                                    <Option value="Reverse Roll" onClick ={() => this.setPrice(41)}>Reverse Roll</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Divider />
                        <Row gutter={24} style={{ textAlign: 'center' }}>
                            <h3 >Motor</h3>
                        </Row>
                        <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                            <Form.Item label="Motor">
                                {getFieldDecorator("motor", {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please select motor type!'
                                        },
                                    ],
                                })(
                                    <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                        <Option value="28 mm Hardwired RF Motor" onClick ={() => this.setPrice(45)}>28 mm Hardwired RF Motor</Option>
                                        <Option value="28 mm Li-Ion RF" onClick ={() => this.setPrice(46)}>28 mm Li-Ion RF</Option>
                                        <Option value="35 mm AC RF">35 mm AC RF</Option>
                                        <Option value="45 mm AC RF">45 mm AC RF</Option>
                                        <Option value="45 mm Li-Ion RF">45 mm Li-Ion RF</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                            <Form.Item label="DC Type">
                                {getFieldDecorator("dc_type", {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please select DC type!'
                                        },
                                    ],
                                })(
                                    <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                        <Option value="">-</Option><Option value="Hardwired" onClick ={() => this.setPrice(55)}>Hardwired</Option>
                                        <Option value="Solar Panel - 3 Watt" disabled="true" onClick ={() => this.setPrice(56)}>Solar Panel - 3 Watt</Option>
                                        <Option value="Internal Battery" disabled="true">Internal Battery</Option>
                                        <Option value="External Li-Ion Battery">External Li-Ion Battery</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            <Divider />
                            <Row gutter={24} style={{ textAlign: 'center' }}>
                                <h3 >Options</h3>
                            </Row>
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Hembar Type">
                                    {getFieldDecorator("hembar_type", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please select hembar type!'
                                            },
                                        ],
                                    })(
                                        <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                            <Option value="Internal / Sealed" onClick ={() => this.setPrice(57)}>Internal / Sealed</Option>
                                            <Option value="External / Fabric Wrapped" onClick ={() => this.setPrice(58)}>External / Fabric Wrapped</Option>
                                            <Option value="External / Metal">External / Metal</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Hembar Color">
                                    {getFieldDecorator("hembar_color", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please select hembar color!'
                                            },
                                        ],
                                    })(
                                        <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                            <Option value="" onClick ={() => this.setPrice(59)}>-</Option>
                                            <Option value="Anodized" onClick ={() => this.setPrice(60)}>Anodized</Option>
                                            <Option value="White">White</Option>
                                            <Option value="Vanilla">Vanilla</Option>
                                            <Option value="Bronze">Bronze</Option>
                                            <Option value="Black">Black</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Divider />
                            <Row gutter={24} style={{ textAlign: 'center' }}>
                                <h3 >Attribute</h3>
                            </Row>
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Floor">
                                    {getFieldDecorator("floor", {
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
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Direction Facing">
                                    {getFieldDecorator("direction_facing", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please select direction facing!'
                                            },
                                        ],
                                    })(
                                        <Select defaultValue="-" style={{ width: 200 }} onChange={this.handleChange}>
                                            <Option value="">Unknown</Option>
                                            <Option value="North">North</Option>
                                            <Option value="Northeast">Northeast</Option>
                                            <Option value="East">East</Option>
                                            <Option value="Southeast">Southeast</Option>
                                            <Option value="South">South</Option>
                                            <Option value="Southwest">Southwest</Option>
                                            <Option value="West">West</Option><Option value="Northwest">Northwest</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Room Name">
                                    {getFieldDecorator("room_name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Enter room name'
                                            },
                                        ],
                                    })(
                                        <Input type="text" style={{ width: 200 }} />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ textAlign: 'center', fontWeight: 600 }}>
                                <Form.Item label="Shade Name">
                                    {getFieldDecorator("shade_name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Enter shade name!'
                                            },
                                        ],
                                    })(
                                        <Input type="text" style={{ width: 200 }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button onClick ={this.handleshowPrice} style={{marginRight: 8}}>Estimate Price</Button>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => this.props.setModal2Visible(false)}>
                            Close
                        </Button>
                    </Col>
                </Row>
            </Form>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // addQoute: values => dispatch(actions.createQouteRequest(values))
    }
}

const WrappedQuoteForm = Form.create({ name: "quote_form" })(NewQoutes);

export default connect(
    null,
    mapDispatchToProps
)(WrappedQuoteForm);