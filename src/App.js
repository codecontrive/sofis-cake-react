import React from "react";

import { Row, Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as styles from "./scss/App.module.scss";
import Header from "src/components/header/Header";
import { ROUTES } from "src/constants/routes";

function App() {
  return (
    <>
      <Row className={styles.BackgroundPattern}></Row>
      <Container fluid className={styles.AppContainer}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact>
              {ROUTES.HOME.component}
            </Route>
            <Route path="/catalog">{ROUTES.PRODUCTS.component}</Route>
            <Route>404</Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
