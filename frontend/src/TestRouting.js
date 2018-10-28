import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon, Avatar, Card } from "antd";

function getProjectById(id) {
  let data = {
    username: "Jhon",
    title: "Some title",
    sum: 100,
    have_sum: 0,
    author_username: "Tom",
    deadline: "30",
    id: id
  };
}

const Index = () => <h2>Home</h2>;
const exactProcetPage = ({ id }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "red",
        position: "fixed",
        zIndex: 1
      }}
    >
      <h1 style={{ fontSize: "100px" }}>{id}</h1>
    </div>
  );
};
const Users = () => <h2>Users</h2>;

const AppRouter = ({ id }) => (
  <Router>
    <div>
      <Link to={"/exact/" + id}>
        <Icon type="eye" />
      </Link>

      <Route path="/exact/" component={exactProcetPage} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;
