import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Managerdropdown from './Managerdropdown';
import { isExpired } from 'react-jwt';
function Assigntask() {
    const navigate = useNavigate();

    const [task, setTask] = useState(
        {
            emailId: "",
            taskName: "",
            description: "",
            dueDate: "",
            memailId: "",
        }
    )

    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!emailId) {
            errors.emailId = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(emailId)) {
            errors.emailId = 'Email is invalid';
        }
        if (!memailId) {
            errors.memailId = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(memailId)) {
            errors.memailId = 'Email is invalid';
        }
        if (!dueDate) {
            errors.dueDate = 'dueDate is required';
        }
        if (!taskName) {
            errors.taskName = 'taskName is required';
        }
        if (!description) {
            errors.description = 'description is required';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
    if (isExpired(localStorage.getItem('jwtToken'))) {
        alert("Session Timeout Please Login again");
        window.location.href = "/";
    }
    const { emailId } = useParams;
    const { taskName, description, dueDate, memailId } = task

    const onInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('submitting form', { taskName, description, dueDate, memailId, emailId });
        }
        console.log("hi")
        console.log(emailId);
        await axios.post(`http://localhost:9010/task/${emailId}`, task
        )
            .then(res => {
                console.log(res.data)
                if (res.status === 500) {
                    alert(res.data)
                }
                window.location.href = "/managerhome";
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.status === 500) {
                    alert("Incorrect data");
                }
            });
        // navigate("/managerhome");

    };

    return (
        <div>
            <Managerdropdown></Managerdropdown>
            <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                <div className="container">
                    <div className="row">
                        <div style={{ backgroundColor: '#EDE7F6' }} className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4"> Assign Task</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <b><label htmlFor="emailId" className="form-label">Employee</label></b>
                                    <input
                                        type={"email"}
                                        className="form-control"
                                        placeholder="*Employee Emailid"
                                        name="emailId"
                                        value={emailId}
                                        onChange={onInputChange}
                                        autoComplete="off"
                                    ></input>
                                    {/* {errors.emailId && <div style={{ color: 'red' }}>{errors.emailId}
                                    </div>} */}
                                </div>
                                <div className="mb-3">
                                    <b><label htmlFor="memailId" className="form-label">Manager</label></b>
                                    <input
                                        type={"email"}
                                        className="form-control"
                                        placeholder="*Manager EmailId"
                                        name="memailId"
                                        value={memailId}
                                        onChange={onInputChange}
                                        autoComplete="off"
                                    ></input>
                                    {errors.memailId && <div style={{ color: 'red' }}>{errors.memailId}
                                    </div>}
                                </div>

                                <div className="mb-3">
                                    <b><label htmlFor="description" className="form-label">Description</label></b>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="*Description"
                                        name="description"
                                        value={description}
                                        onChange={onInputChange}
                                        autoComplete="off"
                                    ></input>
                                    {errors.description && <div style={{ color: 'red' }}>{errors.description}
                                    </div>}

                                </div>

                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className=" mb-1" style={{ display: 'inline-block', width: '100%' }}>
                                            <b><label htmlFor="taskName" className="form-label">Task Name</label></b>
                                            <input
                                                type={"text"}
                                                className="form-control"
                                                placeholder="*Task Name"
                                                name="taskName"
                                                value={taskName}
                                                onChange={onInputChange}
                                                autoComplete="off"
                                                style={{ display: 'inline-block', width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                            ></input>
                                            {errors.taskName && <div style={{ color: 'red' }}>{errors.taskName}
                                            </div>}
                                        </div>
                                    </div>
                                    {/* <div className="mb-3">
                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                                <input
                                    type={"Date"}
                                    className="form-control"
                                    placeholder="Enter your Date"
                                    name="dueDate"
                                    value={dueDate}
                                    onChange={onInputChange}
                                
                                ></input>
                                {errors.fromDate && <div style={{color:'red'}}>{errors.fromDate}
                            </div>}

                                    </div>
                                    </div> */}
                                    <div className='col-md-5'>
                                        <div className="mb-1">
                                            <b><label htmlFor="dueDate" className="form-label">Due Date </label></b>
                                            <input
                                                type={"Date"}
                                                className="form-control"
                                                placeholder="*DueDate"
                                                name="dueDate"
                                                value={dueDate}
                                                onChange={onInputChange}

                                                style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                            ></input>
                                            {errors.dueDate && <div style={{ color: 'red' }}>{errors.dueDate}
                                            </div>}

                                        </div>

                                    </div>

                                </div>
                                <br></br>

                                <button type="submit" onClick={validateForm} className="btn btn-outline-success">Submit</button>
                                {/* <Link to="/"type="submit" className="btn btn-success">Submit</Link> */}

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assigntask;