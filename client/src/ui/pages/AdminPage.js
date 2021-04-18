import React, { useState, useEffect, Fragment } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, submitImage } from '../../store/actions/adminActions';
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  ListGroup,
  Image,
} from 'react-bootstrap';

const AdminPage = () => {
  const dispatch = useDispatch();
  const imageSubmitSuccess = useSelector((state) => state.adminFormSubmit);
  const formSubmitSuccess = useSelector((state) => state.adminImageSubmit);
  useEffect(() => {
    if (imageSubmitSuccess && formSubmitSuccess) {
      setTitle('');
      setDescription('');
      setInputFields([{ item: '' }]);
      setImage('');
      setPrice('');
    }
  }, [imageSubmitSuccess, formSubmitSuccess]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputFields, setInputFields] = useState([{ item: '' }]);
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const addFieldsHandler = () => {
    const values = [...inputFields];
    values.push({ item: '' });
    setInputFields(values);
  };

  const removeFieldsHandler = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const inputChangeHandler = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'item') {
      values[index].item = event.target.value;
    }
    setInputFields(values);
  };

  const imageSubmitHandler = async () => {
    const formData = new FormData();
    formData.append('image', image.image);
    dispatch(submitImage(formData));
  };

  const formSubmitHandler = async () => {
    const values = {
      title,
      price,
      description,
      details: inputFields,
      image: image.alt,
    };
    dispatch(submitForm(values));
  };

  const submit = () => {
    imageSubmitHandler();
    formSubmitHandler();
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Item title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your item title(s)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Item description</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                type="text"
                placeholder="Enter item description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {inputFields.map((inputField, index) => (
              <Fragment key={`${inputField}~${index}`}>
                <Form.Row>
                  <Form.Group as={Col} lg={9}>
                    <Form.Label>Item detail</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="item"
                      name="item"
                      placeholder="Enter item detail"
                      value={inputField.item}
                      onChange={(event) => inputChangeHandler(index, event)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} lg={3}>
                    <Button
                      variant="link"
                      type="button"
                      className="icon-link"
                      onClick={() => removeFieldsHandler(index)}
                    >
                      <BiMinus />
                    </Button>
                    <Button
                      variant="link"
                      type="button"
                      className="icon-link"
                      onClick={() => addFieldsHandler()}
                    >
                      <BiPlus />
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Fragment>
            ))}
          </Form>
          <Form.Row>
            <Form.Group as={Col} lg={3}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Enter item price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form onSubmit={imageSubmitHandler}>
            <Form.Group>
              <Form.Label>Image upload</Form.Label>
              <Form.File
                name="image"
                onChange={(e) => {
                  const image = e.target.files[0];
                  setImage({
                    image: image,
                    src: URL.createObjectURL(image),
                    alt: e.target.files[0].name,
                  });
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              block
              size="lg"
              disabled={!title || !description}
              onClick={submit}
            >
              Save item
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Image src={image.src} fluid />
          <h3>{title}</h3>
          <div className="price">
            {price ? <p>${price}</p> : <p>{price}</p>}
          </div>
          <p className="item-description">{description}</p>
          <ListGroup variant="flush">
            {inputFields.map((item, i) => (
              <ListGroup.Item key={i}>{item.item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
