import "../style/Soon.css";
import {Link} from "react-router-dom";

export default function Soon(){
    return(
        <div className="hero-image">
  <div className="hero-text">
    <h1>Coming soon...</h1>
    
    <Link to="/"className="return-soon">Return to home</Link>
  </div>
</div> 
    )
} 