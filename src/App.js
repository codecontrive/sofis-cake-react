import React from "react";

import { Row, Col } from "react-bootstrap";

import * as styles from "./scss/App.module.scss";

function App() {
  return (
    <Row className={styles.AppRow}>
      <Col lg={12}>React Bootstrap Enabled.</Col>
    </Row>
  );
}

export default App;
