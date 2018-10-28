import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Avatar, Card } from "antd";
import { API } from "./Api";
import ExactProject from "./ExactProject";
const { Header, Content, Footer, Sider } = Layout;

export default class ProjectPage extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => this.setState({ projects: response.list }));
  }

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const { projects } = this.state;
    const project = projects.find(
      project => project.project_id.toString() === id
    );
    return (
      (project && (
        <ExactProject
          title={project.title}
          sum={project.sum}
          extra={project.deadline}
          deadline={project.deadline}
          projectId={project.project_id}
          onIconClick={this.getCard}
        />
      )) ||
      "Loading data..."
    );
  }
}
