import React, { Component } from "react";
import styled from "styled-components";
import { Icon, Avatar, Card } from "antd";

const ProjectCard = styled(Card)`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const { Meta } = Card;

export default ({ title, sum, have_sum, author_username, deadline }) => (
  <ProjectCard
    hoverable="true"
    cover={
      <img
        alt="project-cover"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[<Icon type="heart" />, <Icon type="message" />]}
  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title={title}
      description={"Sum to success: " + sum + "$"}
    />
    <span style={{ color: "rgba(0,0,0,0.5)", marginLeft: "48px" }}>
      {"Left time: " + (+Date.parse(deadline) - Date.now())}
    </span>
  </ProjectCard>
);
