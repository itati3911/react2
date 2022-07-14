import {useState} from "react";
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../style/NavBar.css"



function NavBar() {
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
        <strong>Hathi Drink Shop</strong></Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-linky">
            <NavDropdown className="nav-linky" title="Beverages" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to='/category/noalcohol'>NO ALCOHOL</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to='/category/wine'>WINES</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to='/category/liquor'>LIQUORS</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to='/category/gin'>GIN</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to='/category/vodka'>VODKA</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className = "nav-linky" onClick={() => setExpanded(false)} as={Link} to='/soon'>Barware</Nav.Link>
              <Nav.Link className = "nav-linky" onClick={() => setExpanded(false)} as={Link} to='/soon'>Gifts</Nav.Link>
              <Nav.Link className = "nav-linky" onClick={() => setExpanded(false)} as={Link} to='/soon'>Offers</Nav.Link>
              <Nav.Link className = "nav-linky" onClick={() => setExpanded(false)} as={Link} to='/soon'>About us</Nav.Link>
              <Nav.Link className = "nav-linky" onClick={() => setExpanded(false)} as={Link} to='/soon'>Contact</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
          <Link to='/cart'>
          <CartWidget items={0}/>
          </Link>
        </Container>
      </Navbar>
    );
  }

export default NavBar;


/* function BsNavBar() {

///prueba

const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }
//fin prueba






  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link to="/"><img src="https://freesvg.org/storage/img/thumb/elephant-circle-colour.png" alt="logo" onClick={collapseNav} /></Link>
        <Link to="/" style={{ textDecoration: "none" }} className="navbar-brand nav-link" onClick={collapseNav}>
          Hathi Drink Shop
        </Link>
        <button ref = {navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={collapseNav} to='/category/noalcohol' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">NO ALCOHOL</Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to='/category/wine' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">WINES</Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to='/category/liquor' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">LIQUORS</Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to='/category/gin' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">GIN</Link>
            </li>
          </ul>
          <Link to='/cart' style={{ textDecoration: "none", color: "white" }} className="nav-link active">
            <div className="cart">
              <CartWidget items={0} />
            </div></Link>
        </div>
      </div>
    </nav>

  )
}

export default BsNavBar */