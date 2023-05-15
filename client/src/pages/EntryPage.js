import React, { useEffect, useState } from 'react';
import 'react-bootstrap';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import '../assets/carousel.css';
import { SchulzImage,AriImage,BertImage,BillImage,DaveImage,ElonImage,LouisImage,MarkImage,MattImage,TomImage,LogoImage } from '../assets';

const Entrypage = () => {
  const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const carousel = document.querySelector('.carousel');
      const carouselInner = carousel.querySelector('.carousel-inner');
      const slides = carouselInner.querySelectorAll('.carousel-slide');
      const prevButton = carousel.querySelector('.carousel-prev');
      const nextButton = carousel.querySelector('.carousel-next');
      const slideWidth = slides[0].offsetWidth;
      carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      const handlePrevClick = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      };

      const handleNextClick = () => {
        if (currentIndex < slides.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };

      prevButton.addEventListener('click', handlePrevClick);
      nextButton.addEventListener('click', handleNextClick);

      return () => {
        prevButton.removeEventListener('click', handlePrevClick);
        nextButton.removeEventListener('click', handleNextClick);
      };
    }, [currentIndex]);

    return (
      <div>
        <div style={{ alignItems: 'center', backgroundColor: 'rgb(4,4,60)' }}>
          

          <Navbar bg='rgb(4,4,60)' variant="dark" >
            <Navbar.Brand style={{ display: 'flex', justifyContent: 'center',border: '1px solid black',backgroundColor: 'rgb(4,4,60)' }}>
              <img src={LogoImage} alt="Comedytopia" style={{ width: '1000px', height: '400px' }} />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#">Sign Up</Nav.Link>
              <nav> </nav>
              <Nav.Link href="#">Log In</Nav.Link>
            </Nav>
          </Navbar>

          <Container fluid>
            <div className='Flexrow'>
            <Card
              style={{ float: 'center', width: '20%', backgroundColor: 'lavender', padding: '10px' }}
            >
              <Card.Body>
                <Card.Title>Top Comics</Card.Title>
                <ul className="list-unstyled">
                  <li><a href="/Profilepage">Elon Musk</a></li>
                  <li><a href="/Profilepage">Dave Chappelle</a></li>
                  <li><a href="/Profilepage">Louis CK</a></li>
                  <li><a href="/Profilepage">Bert Kreischer</a></li>
                  <li><a href="/Profilepage">Andrew Schiltz</a></li>
                  <li><a href="/Profilepage">Matt Rife</a></li>
                  <li><a href="/Profilepage">Mark Norman</a></li>
                  <li><a href="/Profilepage">Bill Burr</a></li>
                </ul>
              </Card.Body>
            </Card>

            <Card
              style={{ float: 'left', width: '40%', backgroundColor: 'lavender', padding: '20px' }}
            >
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
              width="1020"
              height="315"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            </div>
            {/* </section> */}
            <div className="carousel">
            <div className="carousel-inner">
              <div className="carousel-slide">
                <img src={SchulzImage} alt="Andrew Schulz" />
              </div>
              <div className="carousel-slide">
                <img src={AriImage} alt="Ari Shaffir" />
              </div>
              <div className="carousel-slide">
                <img src={ElonImage} alt="Elon Musk" />
              </div>
              <div className="carousel-slide">
                <img src={BertImage} alt="Bert Kreischer" />
              </div>
              <div className="carousel-slide">
                <img src={BillImage} alt="Bill Burr" />
              </div>
              <div className="carousel-slide">
                <img src={DaveImage} alt="Dave Chappelle" />
              </div>
              <div className="carousel-slide">
                <img src={LouisImage} alt="Louis CK" />
              </div>
              <div className="carousel-slide">
                <img src={MarkImage} alt="Mark Normand" />
              </div>
              <div className="carousel-slide">
                <img src={MattImage} alt="Matt Rife" />
              </div>
              <div className="carousel-slide">
                <img src={TomImage} alt="Tom Segura" />
              </div>
            </div>
            <div className="carousel-prev">&lt;</div>
            <div className="carousel-next">&gt;</div>
            </div>

            
          </Container>
          </div>

        <footer
          style={{ backgroundColor:'rgb(4,4,60)', color: 'white', textAlign: 'center', padding: '20px', marginTop: '20px' }}
        >
          <p>&copy; 2023 Comedytopia</p>
        </footer>
      </div> 
    );
  };

  return (
    <div>
      <ImageCarousel />
    </div>
  );
};

export default Entrypage;

