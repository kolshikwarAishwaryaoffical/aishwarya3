import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Managerdropdown from './Managerdropdown';

import { isExpired } from 'react-jwt';
function AssignedEmployee(props) {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, []);
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    const loadEmployee = async () => {
        await axios.get(`http://localhost:9000/loginmanager/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log(res.data)
                axios.get(`http://localhost:9001/assigned/${res.data}`)
                    .then(response => {
                        setEmployee(response.data)
                        console.log(response.data);
                    })
            })
            .catch(error => {
                console.log(error);
            });

    };
    return (

        <div>
            <Managerdropdown></Managerdropdown>
            <div style={{marginTop:'5rem'}}>
        <div className="container">
        <div className="py-4">
            <table className="table table-striped table-hover " >
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {
employee.map(x=>
    <tr>
                            <td>{x.employeeId}</td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.emailId}</td>
                            <td>
                                    {/* <Link to={`/checktask/${x.emailId}`} className="btn btn-info mx-2">Assign Task</Link> */}
                                    <Link to={`/checktask/${x.emailId}`} style={{ backgroundColor: 'white', color:' #7986CB' }} className="btn btn mx-2">Assign Task</Link>
                                    <Link   to={`/getprogress/${x.emailId}`} style={{ backgroundColor: 'white', color:' #7986CB' }} className="btn btn  mx-2">Task Progress</Link>
                                    
                                    </td>
                        </tr>
    )          
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>
    );
}

export default AssignedEmployee;