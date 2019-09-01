import React from "react";
import jwt from 'jsonwebtoken';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./styles.css";
import * as actions from "../../actions/auth-actions";

class NormalLoginForm extends React.Component {

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.token.slice(user.token.indexOf(' ') + 1);
    const currentUser = jwt.decode(token);
    if (currentUser.role === 'Admin') {
      this.props.history.push('/admin-dashboard');
    } else {
      this.props.history.push('/dashboard');
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(
          values, this.props.history
        )
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginWrapper">
        <div className="formContainer">
          <h1 className="logintext"> Login</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                block
                className="login-form-button"
              >
                Log in
              </Button>
              <br />
              Or{" "}
              <Link to="/sign-up">
                <a href="">register now!</a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
const mapStateToProps = state => ({});

const mapDispatchtoProps = dispatch => {
  return {
    login: (values, history) => dispatch(actions.loginRequest(values, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(WrappedNormalLoginForm);
