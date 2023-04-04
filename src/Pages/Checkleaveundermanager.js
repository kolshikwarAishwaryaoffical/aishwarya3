import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Managerdropdown from './Managerdropdown';
import { isExpired } from 'react-jwt';
function Checkleaveundermanager(props) {
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
                axios.get(`http://localhost:9003/updatestatus/${res.data}`)
                    .then(response => {
                        setDisplay(response.data)
                        console.log(response.data);
                    })
            })
            .catch(error => {
                console.log(error);
            });

    };

    function handleAccept(id) {
        axios.put(`http://localhost:9003/updatestatus/accept/${id}`, {
            leaveStatus: 'Accepted'
        }).then(() => {
            setDisplay(display => {
                return display.map(r => {
                    if (r.emailId === id) {
                        return {
                            ...r, leaveStatus: 'accepted'
                        };
                    }
                    else {
                        return r;
                    }
                });
            });
        }).catch(error => console.log(error));
    }

    function handleReject(id) {
        axios.put(`http://localhost:9003/updatestatus/reject/${id}`, {
            leaveStatus: 'Rejected'
        }).then(() => {
            setDisplay(display => {
                return display.map(r => {
                    if (r.emailId === id) {
                        return {
                            ...r, leaveStatus: 'Rejected'
                        };
                    }
                    else {
                        return r;
                    }
                });
            });
        }).catch(error => console.log(error));
    }


    const deleteLeave = async (emailId) => {
        const result = await axios.delete(`http://localhost:9003/updatestatus/del/${emailId}`);
        loadLeave();
    }











    return (
        <div>
            <Managerdropdown></Managerdropdown>
            <div style={{marginTop:'5rem'}}>
            <div className="container">
                <div className="py-4">
                    <table className="table table-striped table-hover " >
                        <thead>
                            <tr>
                                <th scope="col">Leave Id</th>
                                <th scope="col">Employee</th>
                                <th scope="col"> Leave From</th>
                                <th scope="col">Leave To</th>
                                <th scope="col">Leave Reason</th>
                                <th scope="col">Leave status</th>
                                <th scope="col">Action</th>



                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                display.map(x =>
                                    <tr>
                                        <td>{x.leaveId}</td>
                                        <td>{x.emailId}</td>
                                        <td>{x.fromDate}</td>
                                        <td>{x.toDate}</td>
                                        <td>{x.leaveReason}</td>
                                        <td>{x.leaveStatus}</td>
                                        <td>

                                            {
                                                x.leaveStatus === 'pending' && (
                                                    <>
                                                        <button className="btn btn-outline-success mx-2" onClick={
                                                            () => handleAccept(x.emailId)
                                                        } > Accept</button>

                                                    </>
                                                )
                                            }


                                            {
                                                (x.leaveStatus === 'pending' || x.leaveStatus === 'accepted') && (
                                                    <>
                                                        <button className="btn btn-outline-danger mx-2" onClick={
                                                            () => handleReject(x.emailId)
                                                        }> Reject</button>
                                                        
                                                    </>
                                                )
                                            }
                                            {
                                                x.leaveStatus === 'Rejected' && (
                                                    <>
                                                        <button type="button" className="btn btn-danger mx-2"
                                                onClick={() => deleteLeave(x.emailId)}>Delete</button>

                                                    </>
                                                )
                                            }
                                            

                                            {/* <button className="bt btn-outline-danger mx-2"> Reject</button> */}
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

export default Checkleaveundermanager;