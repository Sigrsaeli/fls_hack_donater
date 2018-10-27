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
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="setting" />,
      <Icon type="edit" />,
      <Icon type="ellipsis" />
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title={title}
      description="This is the description"
    />
  </ProjectCard>
);
