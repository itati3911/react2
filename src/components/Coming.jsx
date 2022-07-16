import { useEffect } from "react";
import "../style/Coming.css";
import { Link } from "react-router-dom";

export default function Coming() {

  //to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className="hero-image">
      <div className="hero-text">
        <h1>Coming soon...</h1>

        <Link to="/" className="return-soon">Return to home</Link>
      </div>
    </div>
  )
} 