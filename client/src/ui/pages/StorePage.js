import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from '../components/Item';
import axios from 'axios';

const StorePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const { data } = await axios.get('/api/items');
      setItems(data);
    };
    getItems();
  }, []);
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
