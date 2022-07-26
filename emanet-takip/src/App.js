import "./App.css";
import DataInput from "./DataInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserList from "./UserList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col md={5}>
            <DataInput></DataInput>
          </Col>
          <Col md={7}>
            <UserList></UserList>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
