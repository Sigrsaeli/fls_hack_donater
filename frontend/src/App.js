import React, { Component } from "react";
import "./App.css";
import { Layout, Breadcrumb, Icon, Avatar, Card } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ProjectFeed from "./ProjectFeed";
import ProjectPage from "./ProjectPage";
import Menu from "./SideMenu";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  getCard(id) {
    let data = {
      username: "Jhon",
      title: "Some title",
      sum: 100,
      have_sum: 0,
      author_username: "Tom",
      deadline: "30",
      id: id
    };
    console.log(data);
  }

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            style={{ position: "inherit", zIndex: 1000 }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu />
          </Sider>
          <Layout>
            <Content style={{ margin: "10px 30px" }}>
              <Switch>
                <Route path="/project/:id" component={ProjectPage} />
                <Route path="/projects" component={ProjectFeed} />
                <Redirect from="/" to="/projects" exact />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Desing by Lazy Nerds
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
