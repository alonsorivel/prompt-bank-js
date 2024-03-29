import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer mt-auto py-3 bg-light">
        {/* Styling classes explained below */}
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Prompt Store</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
