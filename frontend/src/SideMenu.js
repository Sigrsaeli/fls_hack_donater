import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { Modal, Menu, Icon } from "antd";
import { API } from "./Api";

const SubMenu = Menu.SubMenu;

function logout() {
  fetch(API.LOG_OUT).then(response => response.json());
}

export default class extends Component {
  state = { opened: false };

  authorize = () => {};

  show = () => {
    console.log("SHOW");
    this.setState({ opened: true });
  };

  cancel = () => {
    this.setState({ opened: false });
  };

  onClick = e => {
    e.preventDefault();
  };

  render() {
    const { opened } = this.state;
    return (
      <div>
        <Menu
          style={{ position: "inherit", zIndex: 1000 }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="0">
            <span>Logo</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Categories</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Your projects</Menu.Item>
            <Menu.Item key="4">Your Donation</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" onClick={this.show}>
            <Icon type="login" />
            <span>Log in</span>
          </Menu.Item>
          <Menu.Item key="7" onClick={logout}>
            <Icon type="logout" />
            <span>Log out</span>
          </Menu.Item>
        </Menu>
        <Modal
          title="Authorize"
          visible={opened}
          onClick={this.onClick}
          onOk={this.cancel}
          onCancel={this.cancel}
        >
          <AuthForm id="components-form-demo-normal-login" />
        </Modal>
      </div>
    );
  }
}
