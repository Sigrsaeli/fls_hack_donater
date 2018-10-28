import React from "react";
import styled from "styled-components";
import { Icon, Avatar, Card, Button } from "antd";
import { API } from "./Api";

const ExactProject = styled(Card)`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const { Meta } = Card;

function makeTransaction() {
  const user_id = 1;
  const project_id = 1;
  const sum = 1000;
  fetch(API.PROJECTS, {
    method: "POST",
    body: JSON.stringify({ user_id, project_id, sum })
  }).then(response => response.json());
}

export default ({
  projectId,
  title,
  sum,
  have_sum,
  author_username,
  onIconClick,
  deadline
}) => (
  <ExactProject>
    <div style={{ paddingBottom: "20px" }}>
      <Avatar
        size={64}
        icon="user"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <span>Tom Brown</span>
      <div style={{ margin: "20px" }}>{"Left time: 126 дней"}</div>
      <div>
        <img
          style={{ width: "100%", margin: "20px" }}
          src="https://www.vladtime.ru/uploads/posts/2018-03/1520860563_apple-macbook-12-inch-2017-01.jpg"
        />
      </div>
      <div>
        <h2>Need new computer</h2>
        <p>
          Hi, i need new computer to learn React with pleasure...lorem lorem
          lorem lorem lorem lorem lorem lorem
        </p>
      </div>
    </div>

    <div>
      <p style={{ fontSize: "20px", textAlign: "center" }}> FeedBack </p>
    </div>
    <div style={{ fontSize: "16px" }}>
      <Icon type="pound" theme="outlined" /> User Feedback: 1000$
    </div>
    <div style={{ fontSize: "16px" }}>
      <Icon type="trophy" theme="outlined" /> Your Reward: 10 karma
    </div>
    <div style={{ display: "flex" }}>
      <Button
        type="primary"
        icon="bank"
        style={{ marginTop: "15px", margin: "auto" }}
        onClick={makeTransaction}
      >
        Donate
      </Button>
    </div>
  </ExactProject>
);
