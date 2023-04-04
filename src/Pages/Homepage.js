import React from 'react';
import Navbar1 from '../Layout/Navbar1';
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import backgroundImage from './tm.png';

function Homepage() {
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

  };
    

    return (
        <div>
          <Navbar1></Navbar1>
          <Container fluid style={styles}>
          
          </Container>
         
        </div>
    );
}

export default Homepage;