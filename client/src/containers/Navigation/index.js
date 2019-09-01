import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import jwt from 'jsonwebtoken';
// import Logo from "../../data/images/Copy.png";

const { Header } = Layout;

const Navigation = (props) => {
  const currentUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.token.slice(user.token.indexOf(' ') + 1);
    return user = jwt.decode(token)
  }
  return (
    <Layout className="layout">
      <Header>
        <Link to="/">
          <img className="logo" src={require('../../asserts/logo.png')} style={{ height: 63 }} alt="logo" />
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            lineHeight: "64px",
            float: "right",
            color: "white",
            fontWeight: "600"
          }}
        >
          {JSON.parse(localStorage.getItem('user')) !== null &&
            currentUser().role === 'Admin' &&
            <Link to="/admin-dashboard" style={{ marginLeft: "1rem" }}>
              Dashboard
        </Link>}
          {JSON.parse(localStorage.getItem('user')) !== null &&
            currentUser().role !== 'Admin' &&
            <Link to="/dashboard" style={{ marginLeft: "1rem" }}>
              Dashboard
        </Link>}
          {JSON.parse(localStorage.getItem('user')) !== null &&
            <Link to="/create-quote" style={{ marginLeft: "1rem" }}>
              Create A Quote
        </Link>}

          {JSON.parse(localStorage.getItem('user')) !== null &&
            <Link onClick={() => {
              localStorage.clear();
              window.location.href = "/"
            }} style={{ marginLeft: "1rem" }}>
              Logout
        </Link>}
          {JSON.parse(localStorage.getItem('user')) === null &&
            <Link to="/login" style={{ marginLeft: "1rem" }}>
              Login
        </Link>}
        </Menu>
      </Header>
      {/* <Footer style={{ textAlign: "center" }}>Designed by j@mil</Footer> */}
    </Layout>
  );
}

export default Navigation;
