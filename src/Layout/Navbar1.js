import React from 'react';
import { Link } from 'react-router-dom';
import { Nav,  Dropdown } from 'react-bootstrap'
import './Navbar1.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
// import logoutIcon from './logout-icon.png';
// import DropdownContext from 'react-bootstrap/esm/DropdownContext';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import { isExpired } from 'react-jwt';
function Navbar1(props) {
// const renderTitle=(props)=>(
//   <div>
//     <img src={logoutIcon} alt="Logout" style={{height:'20px',marginRight:'10px'}}/>
//     <span>{props.children}</span>
//   </div>
// )
// if(isExpired(localStorage.getItem('jwtToken'))){
//   alert("Session Timeout Please Login again");
//   window.location.href = "/";
// }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom "style={{background:'#7986CB'}}>
        <div className="container-fluid">
          <a className="navbar-brand ">
          <Link to="/"  className='nav-link'>
          <b>Employee Management System</b>
            </Link>
          </a>
        </div>
      
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
        </NavbarCollapse>
        {/* <Nav className="ml-auto">
          <Link to="/" ><Button style={{ backgroundColor: 'white ', color: 'black' }} className='custom-button'>Home</Button></Link>
        </Nav> */}

<Dropdown>
        {/* <DropdownButton title="Login" className="custom-dropdown-button"> */}
          <Dropdown.Toggle variant='info' style={{color:' black',background:'white',marginRight:'10px'}}
          >Login</Dropdown.Toggle>
           <DropdownMenu style={{color:' rgb(96, 197, 228)',background:'white'}}>
          {/* <NavDropdown.Divider></NavDropdown.Divider> */}
          <Dropdown.Item style={{color:' #7986CB',background:'white'}}>

            
         
          <Link  to="/Admin" className='nav-link'>Admin</Link>
            {/* <Link>
              Admin
            </Link> */}
          </Dropdown.Item>

          <Dropdown.Item style={{color:' #7986CB',background:'white'}} >
            <Link to="/Manager"  className='nav-link'>
              Manager
            </Link>
          </Dropdown.Item>

          <Dropdown.Item  style={{color:'#7986CB',background:'white',textDecoration:'none',textDecorationLine:'none',textDecorationStyle:'none'}}>
            <Link to="/Employee"  className='nav-link'>
              Employee
            </Link>
          </Dropdown.Item>

          {/* <NavDropdown.Divider></NavDropdown.Divider> */}
          {/* <Dropdown.Item style={{color:'black',background:'white'}}>

          </Dropdown.Item> */}
         </DropdownMenu>
        {/* </DropdownButton> */}
        </Dropdown>

        {/* <Dropdown>
          <DropdownToggle as={renderTitle}>
       Logout
          </DropdownToggle>
          <DropdownItem onClick={onLogout}>Logout</DropdownItem>
        </Dropdown> */}

      </nav>

    </div>
  );
}

export default Navbar1;