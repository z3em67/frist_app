import "./Home.css";
import {  Link } from "react-router-dom";
function Head() {
  return (
    <div className="head" >
      <a href="#" className="logo">adidas</a>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button ><Link to="/sign">login</Link></button>
    </div>
  );
}

export default Head ;