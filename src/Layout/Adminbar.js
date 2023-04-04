import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'
// import { isExpired } from 'react-jwt';
import './Adminbar.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
function Adminbar(props) {
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
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom"style={{background:'#7986CB'}}>
        <div className="container-fluid">
        
          {/* <img id="header-img" alt="company logo" src="ficon.png"/> */}
    
          <a className="navbar-brand ">

          <Link to='/AddEmployee' className='nav-link'><b>Admin Portal</b></Link>
            
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
          <Link to="/getallmanagers" ><Button style={{ backgroundColor: 'white ', color: 'black' }} className='custom-button'>Managers</Button></Link>
        </Nav>
        <br></br>
        <Nav className="ml-auto">
          <Link to="/" ><Button style={{ backgroundColor: 'white', color: 'black'  }}  onClick={handlelogout} className='custom-button'>Logout</Button></Link>
        </Nav>
      </nav>

    </div>
  );
}

export default Adminbar;