import React from "react";

import { Card } from "react-bootstrap";

const styles = {
  image: {
    borderRadius: 15,
    padding: "20px",
  },
  title: {
    textAlign: "center",
  },
  text: {
    fontWeight: 100,
    textAlign: "center",
  },
};

const ItemCard = ({ text, title, img }) => {
  return (
    <Card>
      <Card.Img
        style={styles.image}
        variant="top"
        src="https://www.flavourplus.ro/wp-content/uploads/2018/07/IMG-20180730-WA0007.jpg"
      />
      <Card.Body>
        <Card.Title style={styles.title}>
          {title}Card title that wraps to a new line
        </Card.Title>
        <Card.Text style={styles.text}>
          {text}This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
