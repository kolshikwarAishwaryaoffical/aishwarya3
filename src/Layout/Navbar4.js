import React from 'react';
import { Link } from 'react-router-dom';
import {Nav,NavDropdown,Dropdown,DropdownButton, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import './Navbar1.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import { isExpired } from 'react-jwt';
function Navbar4(props) {
  // if(isExpired(localStorage.getItem('jwtToken'))){
  //   alert("Session Timeout Please Login again");
  //   window.location.href = "/";
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
  <div className="container-fluid">
    <a className="navbar-brand ">
    
       Employee Management System
        </a>
        </div>
    
<NavbarCollapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    </Nav>
    </NavbarCollapse>
    <Nav className="ml-auto">
    <Link to="/AddEmployee" ><Button style={{backgroundColor:' ',color:'black'}}className='custom-button'>Home</Button></Link>
    </Nav>
 

   
   
              </nav>

    </div>
  );
}

export default Navbar4;