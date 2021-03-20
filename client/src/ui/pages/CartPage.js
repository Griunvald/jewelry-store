import React, { useEffect } from 'react';
import {
  ListGroup,
  Row,
  Col,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';

const CartPage = () => {
  // const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const getTotal = (arr, prop) => {
    const sum = arr.reduce((acc, item) => acc + Number(item[prop]), 0);
    return sum;
  };

  return (
    <Container>
      <Row>
        <Col lg={8}>
          {cartItems.length === 0 ? (
            <h2>Your cart is empty</h2>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.item}>
                  <Row>
                    <Col lg={3}>
                      <Image src={item.image} alt={item.title} fluid rounded />
                    </Col>
                    <Col lg={7}>
                      <Link to={`/item/${item.item}`} className="link">
                        {item.title}
                      </Link>
                    </Col>
                    <Col lg={1}>${item.price}</Col>
                    <Col lg={1}>
                      <TiDelete size={'22px'} />
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col lg={4}>
          <Card>
            <ListGroup variant="fluch">
              <ListGroup.Item>
                <h3>Order Summary</h3>
                <p>Items {cartItems.length}</p>
                <p>Subtotal ${getTotal(cartItems, 'price')}</p>
                <p>Shipping ${cartItems.length * 5}</p>
                <h4>
                  Total: ${getTotal(cartItems, 'price') + cartItems.length * 5}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  disabled={cartItems.length === 0}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
