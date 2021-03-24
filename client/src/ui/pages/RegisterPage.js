import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/authActions';

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { loading, error, currentUser } = auth;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (currentUser) {
      history.push(redirect);
    }
  }, [history, currentUser, redirect]);

  return (
    <Container className="d-flex justify-content-center">
      <Col xs={12} md={6}>
        <h2>Register</h2>
        {error && <h3>{error}</h3>}
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
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have An Account?
            <Link
              className="link"
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
            >
              Login
            </Link>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default RegisterPage;
