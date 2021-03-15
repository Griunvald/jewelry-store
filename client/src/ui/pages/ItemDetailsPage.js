import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Like from '../components/Like';
import { Row, Col, Container, Image, ListGroup, Button } from 'react-bootstrap';

const ItemDetailsPage = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getItem = async () => {
      const { data } = await axios.get(`/api/items/${match.params.id}`);
      setItem(data);
    };
    getItem();
  }, [match]);

  return (
    <Container>
      <Row>
        <Col lg={7}>
          <div className="image-container">
            <Like />
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
          {item.details?.map((listItem, i) => (
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
