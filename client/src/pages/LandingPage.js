import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1 className="glow">Comedytopia</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <Button variant="primary" size="lg">Enter</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;





