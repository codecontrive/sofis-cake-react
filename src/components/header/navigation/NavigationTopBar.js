import React from "react";

import { Row, Col } from "react-bootstrap";

import * as styles from "./Navigation.module.scss";

import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const NavigationTopBar = () => {
  return (
    <Row className={styles.NavigationTopBarContainer}>
      <Col className={styles.TopBarLeftContainer} lg={6} sm={12}>
        <Row className={styles.QuickContactList}>
          <Col className={styles.ContactElement}>
            <a
              href="mailto:mymail@mymail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
              mymail@mymail.com
            </a>
          </Col>
          <Col className={styles.ContactElement}>
            <a href="tel:40736147***">
              <PhoneAndroidIcon />
              +40 736 852 ***
            </a>
          </Col>
        </Row>
      </Col>
      <Col className={styles.TopBarRightContainer} lg={6} sm={12}>
        right
      </Col>
    </Row>
  );
};

export default NavigationTopBar;
