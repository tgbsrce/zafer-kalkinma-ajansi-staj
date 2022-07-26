import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import EmanetForm from "./features/emanet/Views/EmanetForm"
import EmanetList from "./features/emanet/Views/EmanetList"

function App() {
  return (
    <>



      <Navbar></Navbar>
      <Container>
        <Row>
          <Col md={5}>
          <EmanetForm></EmanetForm>
          </Col>
          <Col md={7}>
            <EmanetList></EmanetList>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
