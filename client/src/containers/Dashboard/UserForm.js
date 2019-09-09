import React from 'react';
import { isEmpty } from 'lodash'
import { Form, Input, Icon, Select, Button } from 'antd'

class UserForm extends React.Component {
    state = { role: '' }

    handleSubmit = e => {
        const { user } = this.props;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.updateUserRole(user._id, { role: this.state.role });
            }
        });
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({ role: value });
    }

    render() {
        const { user } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator("fullname", {
                            initialValue: user.fullname,
                            rules: [{ required: true, message: "Please input your name!" }]
                        })(
                            <Input
                                prefix={
                                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                placeholder="Full Name"
                                readOnly
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("email", {
                            initialValue: user.email,
                            rules: [{ required: true, message: "Please input your email!" }]
                        })(
                            <Input
                                prefix={
                                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                placeholder="Email"
                                readOnly
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("password", {
                            initialValue: '******************',
                            rules: [
                                { required: true, message: "Please input your password!" }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                placeholder="Password"
                                type="password"
                                readOnly
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("role", {
                            initialValue: user.role,
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select user role!'
                                },
                            ],
                        })(
                            <Select
                                defaultValue={this.state.role}
                                style={{ width: '100%' }}
                                onChange={this.handleChange}
                                placeholder={'Select Role'}
                            >
                                <Option value="">Select Role</Option>
                                <Option value="Admin">Admin</Option>
                                <Option value="Dealer">Dealer</Option>
                                <Option value="User">User</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Button
                        disabled={isEmpty(user)}
                        type="primary"
                        htmlType="submit"
                        block
                        className="login-form-button"
                    >
                        Update User
                    </Button>
                </Form>
            </div>
        )
    }
}

const WrappedUserForm = Form.create({ name: "create)user_form" })(UserForm);

export default WrappedUserForm;