import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Employeedropdown from './Employeedropdown';
import { Alert, Button } from 'react-bootstrap';
import { isExpired } from 'react-jwt';

function Checktask(props) {

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
                axios.get(`http://localhost:9011/check/${res.data}`)
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
            <Employeedropdown></Employeedropdown>
            <div style={{marginTop:'5rem'}}>
            <div className="container">
                <div className="py-4">
                    <table className="table table-striped table-hover " >
                        <thead>
                            <tr>
                                <th scope="col">Task Id</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Task Progress</th>
                                <th scope="col">Task Status</th>
                                {/* <th scope="col">Manager</th> */}
                                <th scope="col">Action</th>


                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                employee.map(x =>
                                    <tr>
                                        <td>{x.taskId}</td>
                                        <td>{x.taskName}</td>
                                        <td>{x.description}</td>
                                        <td>{x.dueDate}</td>
                                        <td>{x.taskProgress}</td>
                                        <td>{x.taskStatus}</td>
                                        {/* <td>{x.memailId}</td> */}
                                        <td>
                                            {x.taskProgress === "passed duedate" ? (
                                               <Button variant='danger' disabled size="m" block>Blocked</Button>
                                               )
                                                // <button className="btn btn-danger">Blocked</button>) 
                                                : (
                                                <Link to={`/updatetask/${x.taskId}`} className="btn btn-success">Update</Link>
                                                // <button className="btn btn-success">Update</button>
                                            )
                                            }
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

export default Checktask;