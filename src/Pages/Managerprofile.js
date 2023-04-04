import Managerdropdown from './Managerdropdown';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isExpired } from 'react-jwt';
function Managerprofile(props) {
    const [mng, setMng] = useState('');

    useEffect(() => {
        loadMng();
    }, []);
     if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    const loadMng = async () => {
        await axios.get(`http://localhost:9000/loginmanager/${localStorage.getItem("jwtToken")}`)
            .then(res => {
                console.log(res.data)
                axios.get(`http://localhost:8080/admin/manager/${res.data}`)
                    .then(response => {
                        setMng(response.data)
                        console.log(response.data);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    };
    const divstyle = {
        position: "absolute",
        marginleft: "50%",
        marginright: "500%",
        margintop: "10%",
        paddingright: "8.5%",
    }
    return (
        <div>
            < Managerdropdown></Managerdropdown>
            <div style={{marginTop:'4rem'}}>
            <div className="container" style={divstyle}>
                <div className="row">
                    <div style={{backgroundColor:'#EDE7F6'}} className="col-md-7 offset-md-3 border rounded p-3 mt-3 shadow">
                        <h3 className="text-center m-6">{mng.firstName} {mng.lastName}'s  profile</h3>
                        <div className="card" >
                            <div className="card-header">
                                <ul className="list-group list-group-flush">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <b>Id:</b>
                                            <li className="list-group-item">

                                                {mng.managerId}

                                            </li>

                                        </div>

                                        <div className='col-md-7'>
                                            <b>Email Id:</b>
                                            <li className="list-group-item">

                                            {mng.emailId}

                                            </li>

                                        </div>
                                    </div>
                                    <br></br>
                                    

                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <b>Contact Number:</b>
                                            <li className="list-group-item">

                                                {mng.mobileNumber}

                                            </li>

                                        </div>


                                        <div className='col-md-4'>
                                            <b>Password:</b>
                                            <li className="list-group-item">

                                                {mng.password}
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                            <b>Role</b>
                                            <li className="list-group-item">

                                                {mng.role}
                                            </li>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='row'>



                                        <div className='col-md-4'>
                                            <b>Gender:</b>
                                            <li className="list-group-item">

                                                {mng.gender}
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                            <b>DOB:</b>

                                            <li className="list-group-item">
                                                {mng.dateOfBirth}

                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                            <b>Address:</b>

                                            <li className="list-group-item">
                                                {mng.address}

                                            </li>
                                        </div>

                                    </div>
                                    <br></br>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <b>City:</b>
                                            <li className="list-group-item">

                                                {mng.city}

                                            </li>

                                        </div>


                                        <div className='col-md-4'>
                                            <b>State:</b>
                                            <li className="list-group-item">

                                                {mng.state}
                                            </li>
                                        </div>
                                        <div className='col-md-4'>
                                            <b>Country</b>
                                            <li className="list-group-item">

                                                {mng.country}
                                            </li>
                                        </div>
                                    </div>

                                    <br></br>

                                </ul>
                            </div>
                        </div>
                        <Link style={{background:'#7986CB',color:'black',marginBottom:'6px'}} className="btn btn my-2" to={`/edit1/${mng.emailId}`}>
                            Edit                                
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Managerprofile;