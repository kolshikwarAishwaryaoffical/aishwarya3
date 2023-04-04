import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'

import './Navbar2.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import { isExpired } from 'react-jwt';
function Navbar2(props) {
  // if(isExpired(localStorage.getItem('jwtToken'))){
  //   alert("Session Timeout Please Login again");
  //   window.location.href = "/";
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand ">

            Employee Mangament System
          </a>
        </div>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
        </NavbarCollapse>
        <Nav className="ml-auto">
          <Link to="/getallmanagers" ><Button style={{ backgroundColor: ' ', color: 'black' }} className='custom-button'>Managers</Button></Link>
        </Nav>
      </nav>

    </div>
  );
}

export default Navbar2;