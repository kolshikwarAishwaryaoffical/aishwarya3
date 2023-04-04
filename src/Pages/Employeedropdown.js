import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import './Employeedropdown.css';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { isExpired } from 'react-jwt';


function Employeedropdown() {
   
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    

    const [employee, setEmployee] = useState('');

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        await axios.get(`http://localhost:8089/loginemployee/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log(res.data)
                axios.get(`http://localhost:8086/view/${res.data}`)
                    .then(response => {
                        setEmployee(response.data)
                        console.log(response.data);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    };
    const fullname=`${employee.firstName} ${employee.lastName}`;
    
    const handlelogout=()=>{
        window.localStorage.removeItem("jwtToken");
        window.location.href="/"
      }
    return (
        
        <div>
            
            <nav style={{background:'#7986CB'}} className="navbar navbar-expand-lg navbar-light navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand ">

                    <Link to="/employeehome"  className='nav-link'>
          <b>Employee Portal</b>
            </Link>
                    </a>
                </div>

                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    </Nav>
                </NavbarCollapse>


                <Dropdown>
                <Dropdown.Toggle variant='info'title={fullname}  className="custom-dropdown-button" style={{ backgroundColor: 'white', color: 'black' }}
          >{fullname}</Dropdown.Toggle>
                
                {/* <DropdownButton title={fullname}  className="custom-dropdown-button" style={{ backgroundColor: 'white', color: 'black' }}> */}
                <DropdownMenu style={{color:' rgb(96, 197, 228)',background:'white'}}>
                   
                    {/* <NavDropdown.Divider></NavDropdown.Divider> */}
                    <Dropdown.Item  style={{ backgroundColor: 'white',color:' #7986CB'}}>
                        <Link to="/displayemployee" className='nav-link'>
                            View Profile
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'white',color:' #7986CB' }} >
                        <Link to="/Applyleave" className='nav-link'>
                            Apply leave
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'white', color:' #7986CB' }} >
                        <Link to="/dispalyleave" className='nav-link'>
                            Leave Status
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'white', color:' #7986CB' }} >
                        <Link to="/employeetask" className='nav-link'>
                            Check Task
                        </Link>
                    </Dropdown.Item>
                    </DropdownMenu>
                    </Dropdown>
                <Nav className="ml-auto ms-2">
                    <Link to="/" ><Button style={{ backgroundColor: 'white', color: 'black' }} onClick={handlelogout} className='custom-button'>Logout</Button></Link>
                </Nav>

            </nav>
            

        </div>
        
        
    );
}

export default Employeedropdown;