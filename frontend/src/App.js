import React, { Component } from "react";
import "./App.css";
import { Layout, Breadcrumb, Icon, Avatar, Card } from "antd";
import { API } from "./Api";
import {Link, BrowserRouter, Router} from "react-router-dom"
// costum
import ProjectCard from "./ProjectCard";
import ProjectPage from "./ProjectPage";
import Menu from "./SideMenu";
<<<<<<< HEAD
import CSRFToken from "./Csrftoken";
import { withCookies, Cookies } from "react-cookie";

=======
>>>>>>> 92c05c7a07cb4a5bda0d96d30344850afe8ee8e7
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

<<<<<<< HEAD
    this.getCard = this.getCard.bind(this);
  }
  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
=======
>>>>>>> 92c05c7a07cb4a5bda0d96d30344850afe8ee8e7
  }

  componentDidMount() {

    console.log('did mount', API);
    fetch(API.PROJECTS)
      .then(response => response.json())
      .then(response => this.setState({ hits: response.list }));
  };

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

    // var csrftoken = this.getCookie("csrftoken");
    // console.log(csrf);
    // var data = {
    //   project_id: id
    // };

    // fetch(API.EXACT, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "X-CSRFToken": csrftoken
    //   }
    // }).then(response => console.log(response));
    // .then(response => this.setState({ hits: response.list }));
  }

  render() {
    const { hits } = this.state;

    return (
<<<<<<< HEAD
      <Layout style={{ minHeight: "100hv" }}>
=======
      <Router>
      <Layout style={{ minHeight: "100vh" }}>
>>>>>>> 92c05c7a07cb4a5bda0d96d30344850afe8ee8e7
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
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {hits.map(hit => (                
                <Link to="/project_page"><ProjectCard title={hit.title} sum={hit.sum} /></Link>  
                <ProjectCard
                  title={hit.title}
                  sum={hit.sum}
                  extra={hit.deadline}
                  deadline={hit.deadline}
                  projectId={hit.project_id}
                  onIconClick={this.getCard}
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
