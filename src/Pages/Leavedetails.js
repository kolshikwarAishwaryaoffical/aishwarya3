import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Layout/Navbar2';
import { Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios';

import { isExpired } from 'react-jwt';


function Leavedeatils(props) {
  const [leaves, setLeaves] = useState('');
  useEffect(() => {
    loadEmployees();
  }, []);
  if(isExpired(localStorage.getItem('jwtToken'))){
    alert("Session Timeout Please Login again");
    window.location.href = "/";
  }

  const loadEmployees = async () => {
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
            });
  }





  return (
    <div>
      <Navbar2></Navbar2>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 border rounded  mt-2 shadow">
            <form >
              <div className="mb-10">
                <br></br>
                <Link to="/employeeform"> <Button style={{ marginRight: '50px', backgroundColor: 'rgb(96, 197, 228' }}>AddEmployee</Button></Link>
                <Link to="/managerform"><Button style={{ backgroundColor: 'rgb(96, 197, 228' }}>Add Manager</Button></Link>
              </div>
              <br></br>
            </form>
          </div>

        </div>
      </div>



      <div className="container">
        <div className="py-4">
          <table className="table table-striped table-hover " >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Manager</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {
                employees.map((employees, index) => (
                  <tr>
                    {/* <th scope="row" key={index}> {index + 1} </th> */}
                    <td>{employees.employeeId}</td>
                    <td>{employees.firstName}</td>
                    <td>{employees.lastName}</td>
                    <td>{employees.role}</td>
                    <td>{employees.emailId}</td>
                    <td>{employees.memailId || '-'}</td>
                    <td>
                      
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leavedeatils;