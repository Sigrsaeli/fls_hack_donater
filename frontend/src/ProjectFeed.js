import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { API } from "./Api";

const ProjectFeed = styled.div`
  padding: 24;
  background: "#fff";
  min-height: 360;
`;

export default class extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => this.setState({ projects: response.list }));
  }

  render() {
    const { projects } = this.state;
    return (
      <ProjectFeed>
        {projects.map((project, id) => (
          <Link key={id} to={`/project/${project.project_id}`}>
            <ProjectCard
              title={project.title}
              sum={project.sum}
              extra={project.deadline}
              deadline={project.deadline}
              projectId={project.project_id}
              onIconClick={this.getCard}
            />
          </Link>
        ))}
      </ProjectFeed>
    );
  }
}
