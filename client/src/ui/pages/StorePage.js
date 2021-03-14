import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from '../components/Item';
import items from '../../data/items';

const StorePage = () => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} sm={12} md={4} lg={4} xl={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
