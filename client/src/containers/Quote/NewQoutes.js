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
    Divider
} from "antd";
import "./styles.css";
import * as actions from "../../actions/create-qoute";

class NewQoutes extends Component {
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
                // this.props.form.resetFields();
                // this.props.setModal2Visible();
            }
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const { Option, OptGroup } = Select;
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
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
                                    <Option value="Manual">Manual</Option>
                                    <Option value="Motorize">Motorize</Option>
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
                                    <Option value="Single">Single</Option>
                                    <Option value="Duel">Duel</Option>
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
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
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
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
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
                                    <Option value="Anodized">Anodized</Option>
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
                                    <Option value="-">-</Option>
                                    <Option value="Manual">Manual</Option>
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
                                    <Option value="Standard Roll">Standard Roll</Option>
                                    <Option value="Reverse Roll">Reverse Roll</Option>
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
                                        <Option value="28 mm Hardwired RF Motor">28 mm Hardwired RF Motor</Option>
                                        <Option value="28 mm Li-Ion RF">28 mm Li-Ion RF</Option>
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
                                        <Option value="">-</Option><Option value="Hardwired">Hardwired</Option>
                                        <Option value="Solar Panel - 3 Watt" disabled="true">Solar Panel - 3 Watt</Option>
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
                                            <Option value="Internal / Sealed">Internal / Sealed</Option>
                                            <Option value="External / Fabric Wrapped">External / Fabric Wrapped</Option>
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
                                            <Option value="">-</Option>
                                            <Option value="Anodized">Anodized</Option>
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
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => this.props.setModal2Visible()}>
                            Close
                        </Button>
                    </Col>
                </Row>
            </Form>
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