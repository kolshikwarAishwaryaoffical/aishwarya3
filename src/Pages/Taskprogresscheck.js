import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Managerdropdown from './Managerdropdown';
import { useParams } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isExpired } from 'react-jwt';

function Taskprogresscheck(props) {
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    const [progress, setProgress] = useState([]);
const {emailId}=useParams();
    useEffect(() => {
        loadProgress();
    }, []);

    const loadProgress = async () => {
        await axios.get(`http://localhost:8089/loginemployee/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log("employee");
                console.log(res.data);
                axios.get(`http://localhost:9011/check/${emailId}`)
                    .then(response => {
                        setProgress(response.data)
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

            <div style={{marginTop:'4rem'}}>
            <div className="container">
                <div className="py-4">
                    <table className="table table-striped table-hover " >
                        <thead>
                            <tr>
                                <th scope="col">Task Id</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Task Status</th>
                                <th scope="col">Task Progress</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                progress.map(x =>
                                    <tr>
                                        <td>{x.taskId}</td>
                                        <td>{x.taskName}</td>
                                        <td>{x.description}</td>
                                        <td>{x.dueDate}</td>
                                        <td>{x.taskStatus}</td>
                                        <td className={x.disabled?'text-muted':(x.taskProgress==="passed duedate" ?'text-danger':'text-success')}>
                                            {x.disabled?'Disabled':x.taskProgress}
                                        </td>
                                        {/* <td>
                                            {(x.taskProgress === "passed duedate" || x.taskProgress === "NotCompleted")? (
                                               <Button variant='danger' disabled size="m" block><td>{x.taskStatus}</td></Button>
                                               )
                                                // <button className="btn btn-danger">Blocked</button>) 
                                                : (
                                                    <td>{x.taskStatus}</td>
                                                // <button className="btn btn-success">Update</button>
                                            )
                                            }
                                        </td> */}

                                        
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

export default Taskprogresscheck;