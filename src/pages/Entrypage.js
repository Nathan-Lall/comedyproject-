import React from 'react';
import 'react-bootstrap';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';

const Entrypage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src="logo.png" alt="Comedy Central logo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Sign Up</Nav.Link>
          <Nav.Link href="#">Log In</Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Top Comics</Card.Title>
            <ul className="list-unstyled">
              <li>Elon Musk</li>
              <li>Dave Chappelle</li>
              <li>Louis CK</li>
              <li>Bert Kreischer</li>
              <li>Andrew Schiltz</li>
              <li>Matt Rife</li>
              <li>Mark Norman</li>
              <li>Bill Burr</li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Upcoming Shows</Card.Title>
            <ul className="list-unstyled">
              <li>June 1 - Dave Chappelle Live</li>
              <li>June 15 - Louis CK Stand-up</li>
              <li>July 3 - Matt Rife Comedy Tour</li>
              <li>July 10 - Bert Kreischer: The Berty Boy World Tour</li>
              <li>July 20 - Mark Norman: Out To Lunch Tour</li>
            </ul>
          </Card.Body>
        </Card>

        <section id="iframe-container" className="mt-4">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="560"
            height="315"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>&copy; 2023 Comedy Central</p>
      </footer>
    </div>
  );
};

export default Entrypage;