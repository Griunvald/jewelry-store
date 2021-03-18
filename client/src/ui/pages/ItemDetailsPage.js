import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemDetails } from '../../store/actions/itemActions';
import Like from '../components/Like';
import { Row, Col, Container, Image, ListGroup, Button } from 'react-bootstrap';

const ItemDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const item_details = useSelector((state) => state.item_details);
  const { item, error, loading } = item_details;

  useEffect(() => {
    dispatch(getItemDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
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
      )}
    </Container>
  );
};

export default ItemDetailsPage;
