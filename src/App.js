import React from "react";

import { Row, Col, Button } from "react-bootstrap";

import * as styles from "./scss/App.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setApp, SET_LANGUAGE } from "src/store/actions/app.action";
import { LANGUAGE_RO, LANGUAGE_EN, LANGUAGE_HU } from "src/constants/languages";

function App() {
  const dispatch = useDispatch();
  const strings = useSelector((state) => state.app.config.language.strings);

  return (
    <Row className={styles.AppRow}>
      <Col lg={12}>{strings.REUSABLE.WELCOME}</Col>

      <Button onClick={() => dispatch(setApp(SET_LANGUAGE, LANGUAGE_RO))}>
        ro
      </Button>
      <Button onClick={() => dispatch(setApp(SET_LANGUAGE, LANGUAGE_EN))}>
        en
      </Button>
      <Button onClick={() => dispatch(setApp(SET_LANGUAGE, LANGUAGE_HU))}>
        hu
      </Button>
    </Row>
  );
}

export default App;
