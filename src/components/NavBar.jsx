import { useState, useEffect } from "react";
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../style/NavBar.css"



function NavBar() {

  //to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} className="navStyle primary sticky-top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            alt=""
            src="https://freesvg.org/storage/img/thumb/elephant-circle-colour.png"
            width="90"
            height="90"
            className="d-inline-block align-middle"
          />{' '}
          <strong className="nav-linky">Hathi Drink Shop</strong></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-linky">
            <NavDropdown className="nav-linky" title="Beverages" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/category/noalcohol'>NO ALCOHOL</NavDropdown.Item>
              <NavDropdown.Item className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/category/wine'>WINES</NavDropdown.Item>
              <NavDropdown.Item className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/category/liquor'>LIQUORS</NavDropdown.Item>
              <NavDropdown.Item className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/category/gin'>GIN</NavDropdown.Item>
              <NavDropdown.Item className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/category/vodka'>VODKA</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/coming'>Barware</Nav.Link>
            <Nav.Link className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/coming'>Gifts</Nav.Link>
            <Nav.Link className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/coming'>Offers</Nav.Link>
            <Nav.Link className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/coming'>About us</Nav.Link>
            <Nav.Link className="nav-linky" onClick={() => setExpanded(false)} as={Link} to='/coming'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'>
          <CartWidget style={{ textDecoration: "none" }} items={0} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;


