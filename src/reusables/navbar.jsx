import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarr" variant="dark">
      <Container>
        <Navbar.Brand href="/#upper-land-page">
          <img src="https://i.postimg.cc/YSrf7DV9/therapeak-Logo.png" alt="" />{" "}
          <h2 style={{ float: "right", marginTop: "1.5rem" }}>| Therapeak</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link
              className="navs"
              style={{ fontSize: "25px" }}
              href="#about"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="navs"
              style={{ fontSize: "25px" }}
              href="#memes"
            >
              Donate
            </Nav.Link>
            <Nav.Link href="#home">
              <button id="bttn-profile">
                <img
                  src="https://i.postimg.cc/nzDhsp9h/gg-profile.png"
                  alt=""
                />
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
