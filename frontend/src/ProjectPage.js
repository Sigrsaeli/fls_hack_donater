import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Avatar, Card } from "antd";

const { Header, Content, Footer, Sider } = Layout;

render(){
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
        </Sider>
        <Layout>
          <Content style={{ margin: "10px 30px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <ProjectCard title='Just title' sum='123124' />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Desing by Lazy Nerds</Footer>
        </Layout>
      </Layout>
    );
}

export default ProjectPage;