import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

import * as styles from "./scss/App.module.scss";
import Header from "src/components/header/Header";

function App() {
  return (
    <>
      <Row className={styles.BackgroundPattern}></Row>
      <Container className={styles.AppContainer}>
        <Header />
      </Container>
    </>
  );
}

export default App;
