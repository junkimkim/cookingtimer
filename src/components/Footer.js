import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 py-4 bg-dark text-light border-top border-secondary">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Link to="/about" className="text-light text-decoration-none me-3">
              About
            </Link>
            <Link to="/privacy" className="text-light text-decoration-none me-3">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-light text-decoration-none">
              Terms of Service
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-secondary small mt-2">
            © {currentYear} CookingTimer. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
