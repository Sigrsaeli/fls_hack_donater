import React, { Component } from "react";
import "./App.css";
import { Layout, Breadcrumb, Icon, Avatar, Card } from "antd";
import { API } from "./Api";
import {Link, BrowserRouter, Router} from "react-router-dom"
// costum
import ProjectCard from "./ProjectCard";
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

    console.log('did mount', API);
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => this.setState({ hits: response.list }));
  };

  render() {
    const { hits } = this.state;

    return (
      <Router>
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
                <Link to="/project_page"><ProjectCard title={hit.title} sum={hit.sum} /></Link>  
                <ProjectCard
                  title={hit.title}
                  sum={hit.sum}
                  extra={hit.deadline}
                  deadline={hit.deadline}
                />
              ))}

              {/* {hits.map(h => (
                <p>{h.title}</p>
              ))} */}
              <Route path="/project_page" component={ProjectPage} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Desing by Lazy Nerds</Footer>
        </Layout>
      </Layout>
    </Router>
    );
  }
}
export default App;
