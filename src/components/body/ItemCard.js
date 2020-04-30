import React from "react";

import { Card } from "react-bootstrap";

const ItemCard = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.flavourplus.ro/wp-content/uploads/2018/07/IMG-20180730-WA0007.jpg"
      />
      <Card.Body>
        <Card.Title>Card title that wraps to a new line</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
