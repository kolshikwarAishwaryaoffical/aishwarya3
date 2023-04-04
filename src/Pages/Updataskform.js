import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link,useNavigate, useParams } from 'react-router-dom';
import Employeedropdown from './Employeedropdown';
import { isExpired } from 'react-jwt';
function Updataskform(props) {
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }
         


    const navigate = useNavigate();
    const [progress, setProgress] = useState({
        taskProgress:"",
    });
    

const {taskId}=useParams();


useEffect(() => {
    const loadProgress = async () => {
        console.log(taskId);
        const reqdata = await fetch(`http://localhost:9011/check/task/${taskId}`);

        const res = reqdata.json();
        setProgress(await res);
    }
    loadProgress();
},
    []);
    const{taskProgress}=progress
    const onInputChange = (e) => {
        setProgress({
            ...progress,
            [e.target.name]: e.target.value
        });
    }
const handleSubmit = async (e) => {
    e.preventDefault();
    const response=await axios.put(`http://localhost:9011/check/update/${taskId}`, progress
    );   
    navigate("/employeetask");

};

    return (
        <div>
            <Employeedropdown></Employeedropdown>
            <div style={{marginTop:'4rem'}}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4"> Update Task Progress</h2>
                        <form onSubmit={(e) => handleSubmit(e)} >
                        <div className="mb-3">
                               <b> <label htmlFor="taskProgress" className="form-label">Task Progress</label></b>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your taskProgress"
                                    name="taskProgress"
                                    value={taskProgress}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <button type="submit" className="btn btn-outline-success">Proceed</button>
                            <Link to="/employeetask" type="submit" className="btn btn-outline-danger mx-2">Cancel</Link>
                            
                        </form>
                            </div>
                            </div>
                            
        </div> </div>
        </div>
    );
}

export default Updataskform;