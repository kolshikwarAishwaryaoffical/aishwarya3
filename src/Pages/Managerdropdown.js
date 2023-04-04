import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import './Managerdropdown.css';
import { useState,useEffect } from 'react';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import axios from 'axios';

// import { isExpired } from 'react-jwt';



function Managerdropdown() {
    // if(isExpired(localStorage.getItem('jwtToken'))){
    //     alert("Session Timeout Please Login again");
    //     window.location.href = "/";
    //   }


    const [mng, setMng] = useState('');

    useEffect(() => {
        loadMng();
    }, []);

    const loadMng = async () => {
        await axios.get(`http://localhost:9000/loginmanager/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log(res.data)
                axios.get(`http://localhost:8080/admin/manager/${res.data}`)
                    .then(response => {
                        setMng(response.data)
                        console.log(response.data);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    };
    const fullname=`${mng.firstName} ${mng.lastName}`;
    const handlelogout=()=>{
        window.localStorage.removeItem("jwtToken");
        window.location.href="/"
      }
       

    return (
        <div>
        <nav style={{background:'#7986CB'}}  className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand ">
                <Link to="/managerhome"  className='nav-link'>
          <b>Manager Portal</b>
          </Link>
                </a>
            </div>

            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                </Nav>
            </NavbarCollapse>



            {/* <DropdownButton title={fullname} style={{ color: 'black' }} className="custom-dropdown-button">

                {/* <NavDropdown.Divider></NavDropdown.Divider> */}
                {/* <Dropdown.Item >
                    <Link to="/mngprofile">
                        View Profile
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                    <Link to="/checkleaveundermng">
                        check leaves
                    </Link>
                </Dropdown.Item>
              
                <Dropdown.Item >
                    <Link to="/managerhome">
                       All Employees
                    </Link>
                </Dropdown.Item>
            </DropdownButton> */} 



            <Dropdown>
                <Dropdown.Toggle variant='info'title={fullname}  className="custom-dropdown-button" style={{ backgroundColor: 'white', color: 'black' }}
          >{fullname}</Dropdown.Toggle>
                
                {/* <DropdownButton title={fullname}  className="custom-dropdown-button" style={{ backgroundColor: 'white', color: 'black' }}> */}
                <DropdownMenu style={{color:' rgb(96, 197, 228)',background:'white'}}>
                   
                    {/* <NavDropdown.Divider></NavDropdown.Divider> */}
                    <Dropdown.Item  style={{ backgroundColor: 'white',color:' #7986CB'}}>
                        <Link to="/mngprofile" className='nav-link'>
                            View Profile
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'white',color:' #7986CB' }} >
                        <Link to="/checkleaveundermng" className='nav-link'>
                        check leaves
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'white', color:' #7986CB' }} >
                        <Link to="/managerhome" className='nav-link'>
                        All Employees
                        </Link>
                    </Dropdown.Item>
                    {/* <Dropdown.Item style={{ backgroundColor: 'white', color:' #7986CB' }} >
                        <Link to="/managerhome" className='nav-link'>
                            Check Task
                        </Link>
                    </Dropdown.Item> */}
                    </DropdownMenu>
                    </Dropdown>
                    <Nav className="ml-auto ms-2">
                    <Link to="/" ><Button style={{ backgroundColor: 'white', color: 'black' }} onClick={handlelogout} className='custom-button'>Logout</Button></Link>
                </Nav>

        </nav>

    </div>
    );
}
export default Managerdropdown;