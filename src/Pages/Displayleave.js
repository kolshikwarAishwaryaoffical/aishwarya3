import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Employeedropdown from './Employeedropdown';
import { isExpired } from 'react-jwt';

function Displayleave(props) {

    const [display, setDisplay] = useState([]);

    useEffect(() => {
        loadLeave();
    }, []);
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    const loadLeave = async () => {
        await axios.get(`http://localhost:9000/loginmanager/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log(res.data)
                axios.get(`http://localhost:9002/leave/emp/${res.data}`)
                    .then(response => {
                        setDisplay(response.data)
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
                                <th scope="col">Leave Id</th>
                                <th scope="col">Leave From </th>
                                <th scope="col">Leave To </th>
                                <th scope="col">Leave Reason</th>
                                <th scope="col">Leave Status</th>
                               


                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                display.map(x =>
                                    <tr>
                                        <td>{x.leaveId}</td>
                                        <td>{x.fromDate}</td>
                                        <td>{x.toDate}</td>
                                        <td>{x.leaveReason}</td>
                                        <td>{x.leaveStatus}</td>
                                        {/* <td>
                                            <Link to={`/updateprogress`} className="btn btn-info mx-2">Update Progress</Link>

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

export default Displayleave;