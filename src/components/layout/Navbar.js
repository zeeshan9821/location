import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink style={{color:"white"}} className="nav-link" exact to="/">
               <h4>Locations</h4> 
              </NavLink>
            </li>
           
            
           
          </ul>
        </div>

        <Link style={{borderRadius:"20px", backgroundColor:"navy", color:"white"}} className="btn btn-outline-light" to="/users/add">+Add Location</Link>
      </div>
    </nav>
  );
};

export default Navbar;
