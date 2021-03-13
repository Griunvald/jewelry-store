import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import {
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialYoutube,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Nav
            className="col-lg-8 d-flex justify-content-lg-start justify-content-md-start justify-content-center"
            defaultActiveKey="/home"
            as="ul"
          >
            <Nav.Item as="li">
              <Nav.Link className="footer-link" href="/home">
                Shipping
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-1">
                Payment Options
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-2">
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-3">
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col
          sm={12}
          md={4}
          lg={4}
          className="col-lg-4 col-md-4 d-flex justify-content-lg-end justify-content-center"
        >
          <Nav className="nav " defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link className="footer-link" href="/home">
                <TiSocialInstagram size="18px" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-1">
                <TiSocialPinterest size="18px" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-2">
                <TiSocialTwitter size="18px" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-3">
                <TiSocialFacebook size="18px" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="footer-link" eventKey="link-4">
                <TiSocialYoutube size="18px" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
