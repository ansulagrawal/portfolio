import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { SiFrontendmentor } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Ansul Agrawal</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a href='https://github.com/ansulagrawal' style={{ color: 'white' }} target='_blank' rel='noopener noreferrer'>
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://www.linkedin.com/in/ansulagrawal/' style={{ color: 'white' }} target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://www.frontendmentor.io/profile/ansulagrawal' style={{ color: 'white' }} target='_blank' rel='noreferrer noreferrer'>
                <SiFrontendmentor />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
