import React from 'react';
import {Container} from 'react-bootstrap';
import Employeedropdown from './Employeedropdown';
import backgroundImage from './now.jpg';
import { isExpired } from 'react-jwt';
function Employeehome(props) {
    const styles={
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize:'cover',
        backgroundAtachment:'fixed',
        backgroundPosition:'center',
        // transform:'scale(0.8)',
        // transformOrigin:'center',
       padding:'30px',
        weight:'400px',
        height:'620px',
        // filter:'brightness(0.9px) contrast(1) blur(5px)',
      };
      if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }
        
    return (
        <div>
            <Employeedropdown></Employeedropdown>
            <Container fluid style={styles}>
              
              </Container>
        </div>
    );
}

export default Employeehome;