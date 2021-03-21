import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from '../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsList } from '../../store/actions/itemActions';

const StorePage = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.items_list);
  const { items, error, loading } = itemsList;
  useEffect(() => {
    dispatch(getItemsList());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {items.map((item) => (
            <Col key={item._id} sm={12} md={4} lg={4} xl={3}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default StorePage;
