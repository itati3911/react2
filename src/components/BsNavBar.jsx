import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";



function BsNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link to="/"><img src="https://freesvg.org/storage/img/thumb/elephant-circle-colour.png" alt="logo" /></Link>
        <Link to="/" style={{ textDecoration: "none" }} className="navbar-brand nav-link">
          Hathi Drink Shop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/category/noalcohol' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">NO ALCOHOL</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/wine' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">WINES</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/liquor' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">LIQUORS</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/gin' style={{ textDecoration: "none", color: "white" }} className="nav-link active" aria-current="page">GIN</Link>
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

export default BsNavBar