import React from 'react';
import 'react-bootstrap';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';

const Entrypage = () => {
  return (
    <div style={{ alignItems:'center', backgroundColor: 'purple' }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src="logo.png" alt="Comedytopia" style={{ fontSize: '86px' }} />
        </Navbar.Brand>
        <Nav className="ml-auto" >
          <Nav.Link href="#">Sign Up</Nav.Link>
          <nav> </nav>
          <Nav.Link href="#">Log In</Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Card style={{ float: 'left', width: '30%', backgroundColor: 'lavender', padding: '20px' }}>
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

        <Card style={{ float: 'right' , width: '40%', backgroundColor: 'lavender', padding: '20px' }}>
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
        

        {/* <section id="iframe-container" style={{ alignItems: 'center', width: '30%', backgroundColor: 'lavender', padding: 'auto'  }}> */}
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="315"
            height="315"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        {/* </section> */}
        </Container>
      

      <footer style={{ backgroundColor: 'dark', color: 'white', textAlign: 'center', padding: '20px', marginTop: '20px' }}>
        <p>&copy; 2023 Comedytopia</p>
      </footer>
    </div>
  );
};

export default Entrypage;