import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Adminbar from "./Adminbar";
import { Button } from 'react-bootstrap';
// import { Nav, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap';
// import { isExpired } from 'react-jwt';
const Employeeform = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(
        {
            firstName: "",
            lastName: "",
            emailId: "",
            employeeId: "",
            password: "",
            role: "",
            memailId: ""

        }
    )
    // if(isExpired(localStorage.getItem('jwtToken'))){
    //     alert("Session Timeout Please Login again");
    //     window.location.href = "/";

    //   }
    const { firstName, lastName, emailId, employeeId, password, role, memailId } = employee
    const[isFormValid,setIsFormValid]=useState(false);
    const[errors,setErrors]=useState({});
    const validateForm =()=>{
        const errors={};
        if(! firstName){
            errors. firstName=' firstName is required';
        }
        if(! lastName){
            errors. lastName=' lastName is required';
        }
        if(!emailId){
            errors.emailId='EmailId is required';

        }
        else if(!/\S+@\S+\.\S+/.test(emailId)){
errors.emailId='Email is invalid';
        }
        if(! memailId){
            errors.memailId=' Manager Email Id is required';
        }
        else if(!/\S+@\S+\.\S+/.test(memailId)){
            errors.memailId='Email is invalid';
                    }
        if(!password){
            errors.password='password is required';
        }
        if(!role){
            errors.role='Department is required';
        }
        if(!employeeId){
            errors.employeeId='Id is required';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length===0);
    };
    const onInputChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isFormValid){
            console.log('submitting form',{firstName,lastName,emailId,employeeId,password});
        }
        await axios.post(`http://localhost:8080/admin/employee/addemployee`, {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId,
            "employeeId": employeeId,
            "password": password,
            "role": role,
            "memailId": memailId
        }
        )
            .then(res => {
                console.log(res.data)
                if (res.status === 404) {
                    alert(res.data)
                }
                window.location.href = "/AddEmployee";
            })
            .catch(error => {
                console.log(error)
            })
       // navigate("/Addemployee");

    };
    return (
        <div>
            <Adminbar></Adminbar>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div style={{backgroundColor:'#EDE7F6'}} className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                        <h2 className="text-center m-4"> <b>Register Employee</b>  </h2>
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
                                         {errors.firstName && <div style={{color:'red'}}>{errors.firstName}
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
                                         {errors.lastName && <div style={{color:'red'}}>{errors.lastName}
                                            </div>}
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='mb-1'>
                                        <b> <label htmlFor="employeeId" className="form-label">EmployeeId</label></b>

                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="*Id"
                                            name="employeeId"
                                            value={employeeId}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                         {errors.employeeId && <div style={{color:'red'}}>{errors.employeeId}
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
                                         {errors.password && <div style={{color:'red'}}>{errors.password}
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
                                                     {errors.role && <div style={{color:'red'}}>{errors.role}
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
                                        {errors.emailId && <div style={{color:'red'}}>{errors.emailId}
                                            </div>}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mb-3">
                                <b><label htmlFor="role" className="form-label">Role</label></b>

                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter Role"
                                    name="role"
                                    value={role}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <b><label htmlFor="emailId" className="form-label">EmailId</label> </b>

                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter Emailid"
                                    name="emailId"
                                    value={emailId}
                                    onChange={onInputChange}
                                    style={{ width: '509px', height: '2px', marginLeft: '2px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                ></input>
                            </div> */}
                            <div className="mb-3">
                                <b> <label htmlFor="memailId" className="form-label">Reporting Manager EmailId</label></b>

                                <input
                                    type={"email"}
                                    className="form-control"
                                    placeholder="*ManagerEmailId"
                                    name="memailId"
                                    value={memailId}
                                    autoComplete="off"
                                    onChange={onInputChange}
                                ></input>
                                
                                
                            </div>
                            {errors.memailId && <div style={{color:'red'}}>{errors.memailId}
                                            </div>}
                            {/* <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your emailid"
                        name="address"
                        value={address}
                        onChange={addresshandler}
                        ></input>
                    </div> */}
                            {/* <div className="mb-3">
                        <label htmlFor="city" className="form-label">city</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your emailid"
                        name="city"
                        value={city}
                        onChange={cityhandler}
                        ></input>
                    </div> */}
                            {/* <div className="mb-3">
                        <label htmlFor="state" className="form-label">state</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your emailid"
                        name="state"
                        value={state}
                        onChange={statehandler}
                        ></input>
                    </div> */}
                            {/* <div className="mb-3">
                        <label htmlFor="pinCode" className="form-label">pinCode</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your emailid"
                        name="pinCode"
                        value={pinCode}
                        onChange={pinCodehandler}
                        ></input>
                        
                    </div> */}
                            {/* <div className="mb-3">
                        <label htmlFor="country" className="form-label">country</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your emailid"
                        name="country"
                        value={country}
                        onChange={countryhandler}
                        ></input>
                    </div> */}
                                 
                            <Button  variant="ghost"   shape="rounded-pill" type="submit" onClick={validateForm}style={{backgroundColor:'#7986CB'}} className="btn btn-outline">Submit</Button>
                            {/* <Link to="/"type="submit" className="btn btn-success">Submit</Link> */}
                            <Link to="/Addemployee" type="submit" className="btn btn-outline-danger mx-2" onClick={validateForm}>Close</Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );

}
export default Employeeform;