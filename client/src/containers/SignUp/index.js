import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./styles.css";
import * as actions from "../../actions/auth-actions";

class SignUpForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.register(values, this.props.history);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginWrapper">
        <div className="formContainer">
          <h1 className="logintext">Register</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("fullname", {
                rules: [{ required: true, message: "Please input your name!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Full Name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email!" }]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
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
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="login-form-button"
                >
                  Sign Up
                </Button>
              )}
              <br />
              Or{" "}
              <Link to="/login">
                <a href="">Already have account?!</a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedSignUpForm = Form.create({ name: "normal_signup" })(SignUpForm);

const mapStatetoProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    register: (values, history) =>
      dispatch(actions.registerRequest(values, history))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(WrappedSignUpForm);
