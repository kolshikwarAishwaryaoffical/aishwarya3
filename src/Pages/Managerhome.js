import React from 'react';
import AssignedEmployee from './AssignedEmployee';
import Managerdropdown from './Managerdropdown';

import { isExpired } from 'react-jwt';
function Managerhome(props) {
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }
    return (
        <div>
           <AssignedEmployee></AssignedEmployee>
        </div>
        
    );
}

export default Managerhome;