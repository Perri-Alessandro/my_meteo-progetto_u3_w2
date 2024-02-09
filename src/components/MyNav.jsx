import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample(props) {
  return (
    <Navbar expand="lg" className="bg-black fixed-top">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">
          {" "}
          {props.title} Meteo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              About
            </Nav.Link>
            <NavDropdown title="Broswe" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="text-center ">
                ueee
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-center ">
                Contact us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="text-center">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Insert city to search"
              className="me-2 rounded-4"
              aria-label="Search"
              onChange={(e) => props.handleSearch(e.target.value)}
            />
            <Button variant="outline-success" className="rounded-4 border-2">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
