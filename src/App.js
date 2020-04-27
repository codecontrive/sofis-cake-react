import React from "react";
import logo from "./logo.svg";

import { Row, Col } from "react-bootstrap";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <Row>
      <Col lg={2}>test</Col>
    </Row>
  );
}

export default App;
