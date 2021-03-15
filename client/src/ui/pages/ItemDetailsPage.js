import React, { useState } from 'react';
import items from '../../data/items';
import { Row, Col, Container, Image, ListGroup, Button } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const ItemDetailsPage = () => {
  const url = window.location.href;
  const id = url.split('/').pop();
  console.log(id);

  const item = items.find((item) => item.id === Number(id));

  const [like, setLike] = useState(false);

  return (
    <Container>
      <Row>
        <Col lg={7}>
          <div className="image-container">
            <div className="heart-component" onClick={() => setLike(!like)}>
              {like ? <BsHeartFill /> : <BsHeart />}
            </div>
            <Image src={item.image} className="img-fluid" rounded />
          </div>
        </Col>
        <Col lg={5}>
          <h2 className="item-title">{item.title}</h2>
          <div style={{ clear: 'both' }}>
            <h4 style={{ float: 'left' }}>
              <strong>${item.price}</strong>
            </h4>
            <p style={{ float: 'right' }} className="in-stock">
              {item.inStock ? ' In stock' : 'Sold'}
            </p>
          </div>
          {item.inStock ? (
            <Button block size="lg" variant="dark" className="cart-button">
              Add to cart
            </Button>
          ) : (
            <Button
              block
              size="lg"
              variant="dark"
              className="cart-button"
              disabled
            >
              Add to cart
            </Button>
          )}

          <p className="item-details-title">Description</p>
          <p className="new-line">{item.description}</p>
          <p className="item-details-title">Item details</p>
          {item.details.map((listItem, i) => (
            <ListGroup variant="flush" key={i}>
              <ListGroup.Item>{listItem}</ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailsPage;
