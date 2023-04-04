import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar1.css';
// import { isExpired } from 'react-jwt';
function Navbaradmin(props) {
  // if(isExpired(localStorage.getItem('jwtToken'))){
  //   alert("Session Timeout Please Login again");
  //   window.location.href = "/";
  // }
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem('jwtToken')) {
  //     navigate("/")
  //   }

  // }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand ">
            Employee Management System
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbaradmin;