import React from 'react';
import Employeedropdown from './Employeedropdown';
import { isExpired } from 'react-jwt';
function Updateprogress(props) {
    
    // const [employee, setEmployee] = useState([]);

    // useEffect(() => {
    //     loadEmployee();
    // }, []);

    // const loadEmployee = async () => {
    //     await axios.get(`http://localhost:9000/loginmanager/${localStorage.getItem("jwtToken")}`)
    //         .then(res => {
    //             console.log(res.data)
    //             axios.get(`http://localhost:9011/check/${res.data}`)
    //                 .then(response => {
    //                     setEmployee(response.data)
    //                     console.log(response.data);
    //                 })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });

    // };

if(isExpired(localStorage.getItem('jwtToken'))){
  alert("Session Timeout Please Login again");
  window.location.href = "/";
}
    return (
        <div>
             <Employeedropdown></Employeedropdown>
            <br>
            </br>
            <br></br>
            <br></br>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 border rounded  mt-2 shadow">
                        <h2 className="text-center m-4">Admin Login</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3">

                                <label htmlFor="taskProgress" className="form-label">Task Progress</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Modify rtaskProgress"
                                    name="taskProgress"
                                    value={taskProgress}
                                    onChange={adminhandler}
                                ></input>
                            </div>
                           
                            <button type="submit" className="btn btn-success  m-4">Update</button>
                            <br></br>
                        </form>
                    </div>

                </div>
            </div> */}
        </div>
    );
}

export default Updateprogress;