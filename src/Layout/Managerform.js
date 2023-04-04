import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar3 from "./Navbar3";
import { Link } from "react-router-dom";
import Adminbar from "./Adminbar";
import { Button } from 'react-bootstrap';
// import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap';
// import { isExpired } from 'react-jwt';
const Managerform = () => {
    const navigate = useNavigate();
    const [manager, setmanager] = useState(
        {
            firstName: "",
            lastName: "",
            emailId: "",
            managerId: "",
            password: "",
            role: ""

        }
    )
    // if(isExpired(localStorage.getItem('jwtToken'))){
    //     alert("Session Timeout Please Login again");
    //     window.location.href = "/";
    //   }
    const { firstName, lastName, emailId, managerId, password, role } = manager
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const errors = {};
        if (!firstName) {
            errors.firstName = ' firstName is required';
        }
        if (!lastName) {
            errors.lastName = ' lastName is required';
        }
        if (!emailId) {
            errors.emailId = 'EmailId is required';

        }
        else if (!/\S+@\S+.\S+/.test(emailId)) {
            errors.emailId = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'password is required';
        }
        if (!role) {
            errors.role = 'Department is required';
        }
        if (!managerId) {
            errors.managerId = 'Id is required';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
    const onInputChange = (e) => {
        setmanager({
            ...manager,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('submitting form', { firstName, lastName, emailId, password });
        }
        await axios.post(`http://localhost:8080/admin/manager/addmanager`, {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId,
            "managerId": managerId,
            "password": password,
            "role": role,
        }
        )
            .then(res => {
                console.log(res.data)
                if (res.status === 404) {
                    alert(res.data)
                }
                window.location.href = "/getallmanagers";
            })
            .catch(error => {
                console.log(error)
            })


    };
    return (
        <div>
            <Adminbar></Adminbar>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div style={{backgroundColor:'#EDE7F6'}} className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow ">
                        <h2 className="text-center m-4"> <b>Register Manager</b>  </h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="firstName" className="form-label">FirstName</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="*Firstname"
                                            name="firstName"
                                            value={firstName}
                                            autoComplete="off"
                                            onChange={onInputChange}
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}
                                        </div>}
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="lastName" className="form-label">LastName</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="*Lastname"
                                            name="lastName"
                                            value={lastName}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}
                                        </div>}
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='mb-1'>
                                        <b> <label htmlFor="managerId" className="form-label">Manager Id</label></b>

                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="*Id"
                                            name="managerId"
                                            value={managerId}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.managerId && <div style={{ color: 'red' }}>{errors.managerId}
                                        </div>}
                                    </div>
                                </div>

                                <div className='col-md-5'>

                                    <div className="mb-1">
                                        <b> <label htmlFor="password" className="form-label">Password</label></b>

                                        <input
                                            type={"password"}
                                            className="form-control"
                                            placeholder="*Password"
                                            name="password"
                                            value={password}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.password && <div style={{ color: 'red' }}>{errors.password}
                                        </div>}

                                    </div>




                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='mb-1'>

                                        <b><label htmlFor="role" className="form-label">Department</label></b>

                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="*Department"
                                            name="role"
                                            value={role}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.role && <div style={{ color: 'red' }}>{errors.role}
                                        </div>}

                                    </div>
                                </div>

                                <div className='col-md-5'>

                                    <div className="mb-1">
                                        <b><label htmlFor="emailId" className="form-label">Email Id</label> </b>

                                        <input
                                            type={"email"}
                                            className="form-control"
                                            placeholder="*Emailid"
                                            name="emailId"
                                            value={emailId}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {errors.emailId && <div style={{ color: 'red' }}>{errors.emailId}
                                        </div>}
                                    </div>
                                </div>
                            </div>

                           
                           
                   
                           
                            <Button variant="ghost" shape="rounded-pill" type="submit" onClick={validateForm} style={{backgroundColor:'#7986CB',marginTop:'14px'}}className="btn btn ">Submit</Button>
                            {/* <Link to="/"type="submit" className="btn btn-success">Submit</Link> */}
                            <Link to="/Addemployee" style={{marginTop:'14px'}}type="submit" className="btn btn-outline-danger mx-2">Close</Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );

}
export default Managerform;