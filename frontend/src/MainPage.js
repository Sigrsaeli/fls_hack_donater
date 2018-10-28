import React, { Component } from "react";
import "./App.css";
import { Layout, Breadcrumb, Icon, Avatar, Card } from "antd";
import { API } from "./Api";
import { Link, BrowserRouter, Route } from "react-router-dom";
// costum
import ProjectCard from "./ProjectCard";
import ProjectPage from "./ProjectPage";
import Menu from "./SideMenu";
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }
  componentDidMount() {
    console.log("did mount", API);
    var that = this;
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => {
        this.setState({ hits: response.list });
        that.render();
      });
  }
  render() {
    const { hits } = this.state;
    if (!hits || !hits.length) {
      return null;
    }
    return (
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        {hits.map(hit => {
          var link = "/project_page/" + hit.project_id;
          return (
            <div key={hit.project_id}>
              <Link to={link}>
                <ProjectCard
                  title={hit.title}
                  sum={hit.sum}
                  deadline={hit.deadline}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainPage;
