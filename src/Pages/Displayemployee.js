import React from 'react';
import AddEmployee from './AddEmployee';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Employeedropdown from './Employeedropdown';
import { Link } from 'react-router-dom';
import './Displayemployee.css';
import { isExpired } from 'react-jwt';
function Displayemployee(props) {



    const [employee, setEmployee] = useState('');

    useEffect(() => {
        loadEmployee();
    }, []);
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

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
const divstyle={
    position:"absolute",
    marginleft: "50%",
     marginright: "500%",
     margintop: "400%",
     paddingright: "8.5%",
   
     
}

    return (
        <div>
            <Employeedropdown></Employeedropdown><br>
            </br>
            <br></br>
            <div className="container" style={divstyle}>
                <div className="row">
                    <div    style={{backgroundColor:'#EDE7F6'}} className="col-md-7 offset-md-3 border rounded p-3 mt-3 shadow">
                        <h3 className="text-center m-6">{employee.firstName} {employee.lastName}'s  Profile</h3>
                        <div className="card" >
                            <div className="card-header">
                                <ul className="list-group list-group-flush">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                        <b>Employee Id:</b>
                                            <li className="list-group-item">
                                                {employee.employeeId}                                                
                                            </li>

                                        </div>

                                        <div className='col-md-8'>
                                        <b>Employee Email Id:</b>
                                            <li className="list-group-item center">
                                               
                                                {employee.emailId}
                                                
                                            </li>

                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='row'>
                                        <div className='col-md-14'>
                                    
                                        <b>Manager EmailId:</b>
                                            <li className="list-group-item">
                                               
                                                {employee.memailId}
                                                
                                            </li>

                                        </div>
                                    </div>
                                    
                                    <div className='row'>

                                        <div className='col-md-4'>
                                        <b>Contact Number:</b>
                                            <li className="list-group-item">
                                                
                                            {employee.mobileNumber}
                                            </li>
                                        </div>


                                        <div className='col-md-4'>
                                        <b>Password:</b>
                                            <li className="list-group-item">{employee.password}</li>
                                        </div>

                                        <div className='col-md-4'>
                                            <b>Department</b>
                                            <li className="list-group-item">{employee.role}</li>
                                        </div>
                                        
                                    </div>

                                    <br></br>
                                    <div className='row'>
                                        


                                        <div className='col-md-4'>
                                        <b>Gender:</b>
                                            <li className="list-group-item">
                                                
                                                {employee.gender}
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                        <b>DOB:</b>
                                        
                                            <li className="list-group-item">
                                            {employee.dateOfBirth}
                                                
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                        <b>Address:</b>
                                        
                                            <li className="list-group-item">
                                            {employee.address}
                                                
                                            </li>
                                        </div>
                                        
                                    </div> 
                                    <br></br>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                        <b>City:</b>
                                            <li className="list-group-item">
                                               
                                                {employee.city}
                                                
                                            </li>

                                        </div>


                                        <div className='col-md-4'>
                                        <b>State:</b>
                                            <li className="list-group-item">
                                                
                                                {employee.state}
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                        <b>Country</b>
                                            <li className="list-group-item">
                                                
                                                {employee.country}
                                            </li>
                                        </div>
                                    </div>

                                    <br></br>
                                   
                                </ul>
                            </div>
                        </div>
                        <Link style={{background:'#7986CB',color:'black',marginBottom:'6px'}} className="btn btn my-2" to={`/edit/${employee.emailId}`}>
                             Edit 
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Displayemployee;