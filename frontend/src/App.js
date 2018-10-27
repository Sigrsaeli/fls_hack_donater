import React, { Component } from "react";
import "./App.css";
import { Layout, Breadcrumb, Icon, Avatar, Card } from "antd";
import { API } from "./Api";
// costum
import ProjectCard from "./ProjectCard";
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
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  };

  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => this.setState({ hits: response.list }));
  }

  render() {
    const { hits } = this.state;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu />
        </Sider>
        <Layout>
          <Content style={{ margin: "10px 30px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {hits.map(hit => (
                <ProjectCard
                  title={hit.title}
                  sum={hit.sum}
                  extra={hit.deadline}
                  deadline={hit.deadline}
                />
              ))}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Desing by Lazy Nerds</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
