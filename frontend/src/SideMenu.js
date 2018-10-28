import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;

export default () => (
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
      <Menu.Item key="5">Logout</Menu.Item>
    </SubMenu>
    <Menu.Item key="6">
      <Icon type="logout" />
      <span>Logout</span>
    </Menu.Item>
  </Menu>
);
