import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const ProductsGrid = ({ chlidren }) => {
  return (
    <Container>
      <Row>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
      </Row>
      <Row>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
        <Col sm={3}>{chlidren}</Col>
      </Row>
    </Container>
  );
};

export default ProductsGrid;
