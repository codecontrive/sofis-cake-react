import React from "react";

import { Row, Col } from "react-bootstrap";

import * as styles from "./Navigation.module.scss";

const NavigationTopBar = () => {
  return (
    <Row className={styles.NavigationTopBarContainer}>
      <Col className={styles.TopBarLeftContainer} lg={6} sm={12}>
        <ul className={styles.QuickContactList}>
          <li>
            <a
              href="mailto:mymail@mymail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mymail@mymail.com
            </a>
          </li>
          <li>
            <a href="tel:40736147***">+40 736 852 ***</a>
          </li>
        </ul>
      </Col>
      <Col className={styles.TopBarRightContainer} lg={6} sm={12}>
        right
      </Col>
    </Row>
  );
};

export default NavigationTopBar;
