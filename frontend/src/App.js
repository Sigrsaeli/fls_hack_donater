import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestC, TestC2 } from "./test";
import { Slider, Switch } from "antd";

class App extends Component {
  render() {
    return (
      <TestC>
        <TestC2>Hello</TestC2>
        <Slider />
      </TestC>
    );
  }
}
export default App;
