import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <div>{item.price}</div>
      </Card.Body>
    </Card>
  );
};

export default Item;
