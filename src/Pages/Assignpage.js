
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbaradmin from '../Layout/Navbaradmin';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { isExpired } from 'react-jwt';
function Assignpage() {
    const navigate = useNavigate();
    const [manager, setManager] = useState([]);
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


    const { firstName, lastName, emailId, employeeId, password, role, memailId } = employee
    const onInputChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    }


    // useEffect(()=>{
    //     async function fetchData(){
    //         axios.get(`http://localhost:8080/admin/employee/getemployees`)
    //         .then(res=>{
    //             setEmployee(res.data)
    //         });
    //     }
    //     fetchData();
    // },[]);
    //    const empid=emp.map(e=>e.emailId);
    //    console.log(empid);

    // const [assign, setassign] = useState([]);
    // const {  memailId } = assign;
    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get('http://localhost:8080/admin/manager/getmanagers');
        // console.log(result.data);
        setManager(result.data);
    }
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }
    

    const managerhandler = (event) => {
        event.preventDefault();
        const selectedManager = event.target.value;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/employee`, {
            "memailId": manager.emailId,
        })
            .then(res => {
                setEmployee(res.data);
                console.log(res.data);
                if (res.status === 404) {
                    alert(res.data)
                }
            })
            .catch(error => {
                console.log(error)
            })

        await axios.post(`http://localhost:8080/admin/employee/addemployee`, {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId,
            "employeeId": employeeId,
            "password": password,
            "role": role,
           
        }
        )
            .then(res => {
                console.log(res.data)
                if (res.status === 404) {
                    alert(res.data)
                }
            })
            .catch(error => {
                console.log(error)
            })

        navigate("/Addemployee");
    }

    return (
        <div>
            <Navbaradmin></Navbaradmin>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 border rounded  mt-2 shadow">
                        <h2 className="text-center m-4">Assign Manager</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3">

                                <label htmlFor="firstName" className="form-label">FirstName</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your firstname"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">LastName</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your lastname"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailId" className="form-label">EmailId</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your emailid"
                                    name="emailId"
                                    value={emailId}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="employeeId" className="form-label">employeeId</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your managerId"
                                    name="employeeId"
                                    value={employeeId}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your role"
                                    name="role"
                                    value={role}
                                    onChange={onInputChange}
                                ></input>
                            </div>











                            <div className="mb-3">
                                <label htmlFor="memailId" className="form-label">Manager EmailId</label>
                                <select onChange={managerhandler}>
                                    {
                                        manager.map(manager => (
                                            <option key={manager.emailId} value={manager.emailId}>{manager.emailId}</option>
                                        ))
                                    }
                                </select>

                            </div>

                            <button type="submit" className="btn btn-info  m-4">Submit</button>
                            <br></br>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Assignpage;