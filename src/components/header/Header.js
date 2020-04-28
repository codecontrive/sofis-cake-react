import React from "react";
import { Row, Col } from "react-bootstrap";

import NavigationTopBar from "src/components/header/navigation/NavigationTopBar";
import Logo from "src/components/header/logo/Logo";

const Header = () => {
  return (
    <Row>
      <Col className="p-0">
        <NavigationTopBar />
        <Logo />
      </Col>
    </Row>
  );
};

export default Header;
