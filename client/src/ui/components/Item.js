import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const truncate = (str, num) =>
    str.length > num ? str.slice(0, num > 34 ? num - 3 : num) + '...' : str;
  return (
    <div style={{ display: 'flex' }}>
      <Card className="my-3 rounded" style={{ width: '300px', flex: 1 }}>
        <Link
          to={`/item/${item.id}`}
          data-toggle="tooltip"
          data-placement="right"
          title={item.title}
        >
          <Card.Img variant="top" src={item.image} />
        </Link>
        <Card.Body>
          <Card.Title>{truncate(item.title, 30)}</Card.Title>
          <div>${item.price}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;