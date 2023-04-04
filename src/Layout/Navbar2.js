import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'

import './Navbar2.css';
// import { isExpired } from 'react-jwt';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
function Navbar2(props) {
  // if(isExpired(localStorage.getItem('jwtToken'))){
  //   alert("Session Timeout Please Login again");
  //   window.location.href = "/";
  // }
  const handlelogout=()=>{
    window.localStorage.removeItem("jwtToken");
    window.location.href="/"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand ">
<b>Admin Portal</b>
            
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
          <button className='btn btn-light mx-4 mr-auto' onClick={handlelogout}>Logout</button>
          {/* <Link to="/" ><Button style={{ backgroundColor: 'white', color: 'black'  }} className='custom-button'>Logut</Button></Link> */}
        </Nav>
      </nav>

    </div>
  );
}

export default Navbar2;