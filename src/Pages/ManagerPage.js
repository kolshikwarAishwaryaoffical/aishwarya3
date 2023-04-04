import { useState } from 'react';
import axios from 'axios';
import Navbar1 from '../Layout/Navbar1';
import { Button } from 'react-bootstrap';

// import { isExpired } from 'react-jwt';
function Managerpage() {
    const [mng, setmng] = useState({
        emailId: "",
        password: ""
    });
    // if(isExpired(localStorage.getItem('jwtToken'))){
    //     alert("Session Timeout Please Login again");
    //     window.location.href = "/";
    //   }
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const validateForm = () => {
        const errors = {};
        if (!emailId) {
            errors.emailId = 'EmailId is required';

        }
        else if (!/\S+@\S+\.\S+/.test(emailId)) {
            errors.emailId = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'password is required';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
    const { emailId, password } = mng;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(isFormValid){
            console.log('submitting form',{emailId,password});
        }
        const response = await axios.post("http://localhost:9000/authenticate",
            { emailId, password }).then(res => {
                console.log(res.data.jwt)
                localStorage.setItem("jwtToken", res.data.jwt);
                setIsLoggedIn(true);
                console.log(isLoggedIn);
                if (res === 500) {
                    console.log("incorrect");
                    alert("Incorrect email or password");
                }
                else {
                    alert("Successfully logged in");
                }
                window.location.href = "/managerhome";

            }).catch(( error)=>{
                console.error(error);
                if(error.response && error.response.status===500){
                    alert("Incorrect email or password");
                }
            }
            );
            console.log(response);
    }
    const mnghandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setmng({ ...mng, [name]: value });
    }

    return (
        <div>
            <Navbar1></Navbar1>
            <div style={{marginTop:'6rem'}}>
            <div className="container">
                <div className="row">
                <div style={{backgroundColor:'#EDE7F6'}} className="col-md-4 offset-md-4 border rounded  mt-4 shadow   ">
                        <h2 className="text-center m-4"><b>Manager Login</b></h2>
                        <form  autoComplete="off" onSubmit={(e) => handleSubmit(e)}  >
                            <div className="mb-3">
                               <b><label htmlFor='EmailId' className="form-label">EmailId</label></b> 
                                <input
                                    type={"email"}
                                    className="form-control"
                                    placeholder="*Email Id"
                                    name="emailId"
                                    value={emailId}
                                    autoComplete="off"
                                    style={{width:'260px',height:'2px',marginLeft:'62px',textalign:'center',padding:'18px',fontSize:'14px'}}
                                    onChange={mnghandler}
                                ></input>
                                 {errors.emailId && <div style={{color:'red'}}>{errors.emailId}
                            </div>}
                            </div>
                            <div className="mb-3">
                            <b>  <label htmlFor="Password" className="form-label">Password</label></b> 
                                <input
                                    type={"password"}
                                    className="form-control"
                                    placeholder="*password"
                                    name="password"
                                    autoComplete="off"
                                    value={password}
                                    style={{width:'260px',height:'2px',marginLeft:'62px',textalign:'center',padding:'18px',fontSize:'14px'}}
                                    onChange={mnghandler}
                                ></input>
                                 {errors.password && <div style={{color:'red'}}>{errors.password}
                            </div>}
                            </div>
                            <Button variant="ghost" shape="rounded-pill" type="submit" onClick={validateForm} style={{background:'#7986CB',color:'black',marginBottom:'6px'}} className="btn btn-outline">Login</Button>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Managerpage;