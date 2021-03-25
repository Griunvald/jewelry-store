import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/actions/userActions';

const ProfilePage = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const auth = useSelector((state) => state.auth);
  const { currentUser } = auth;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, currentUser, user]);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <h2>User Profile</h2>

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="dark" block size="lg">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h2>My Orders</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
