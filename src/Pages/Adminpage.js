import { useState } from 'react';

import Navbar1 from '../Layout/Navbar1';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import { isExpired } from 'react-jwt';
function Adminpage() {
    const [admin, setadmin] = useState({
        username: "",
        password: ""
    });
    const[isFormValid,setIsFormValid]=useState(false);
    const[errors,setErrors]=useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { username, password } = admin;
    // if(isExpired(localStorage.getItem('jwtToken'))){
    //     alert("Session Timeout Please Login again");
    //     window.location.href = "/";
    //   }

    const validateForm =()=>{
        const errors={};
        if(!username){
            errors.username='username is required';
        }
        if(!password){
            errors.password='password is required';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length===0);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(isFormValid){
            console.log('submitting form',{username,password});
        }
        const response = await axios.post("http://localhost:8080/authenticate",
            { username, password }).then(res => {
                console.log(res.data.jwt)
                localStorage.setItem("jwtToken", res.data.jwt);
                setIsLoggedIn(true);
                console.log(isLoggedIn);
                if (res === 500) {
                    console.log("incorrect");
                    alert("Incorrect username or password");
                }
                else {
                    alert("Successfully logged in");
                }
                window.location.href = "/AddEmployee";

            }).catch(( error)=>{
                console.error(error);
                if(error.response && error.response.status===500){
                    alert("Incorrect username or password");
                }
            }
            
            );
        console.log(response);
    }
    const adminhandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setadmin({ ...admin, [name]: value });
    }

    return (
        <div>
            <Navbar1></Navbar1>
            <div style={{marginTop:'6rem'}}>
            <div className="container">
                <div className="row">
                    <div style={{backgroundColor:'#EDE7F6'}} className="col-md-4 offset-md-4 border rounded  mt-4 shadow   ">
                        <h2 className="text-center m-4"><b>Admin Login</b></h2>
                        <form onSubmit={(e) => handleSubmit(e)}  >
                            <div className="mb-3">

                                <b><label htmlFor="UserName" className="form-label">UserName</label></b>
                                <input
                                    type={"text"}
                                    className="form-control success"
                                    placeholder="*UserName"
                                    name="username"
                                    value={username}
                                    autoComplete="off"
                                    onChange={adminhandler}
                                    style={{width:'260px',height:'2px',marginLeft:'62px',textalign:'center',padding:'18px',fontSize:'14px'}}
                                ></input>
                                {errors.username && <div style={{color:'red'}}>{errors.username}
                            </div>}
                            </div>
                            <div className="mb-3">
                            <b> <label htmlFor="Password" className="form-label">Password</label></b>
                                <input
                                    type={"password"}
                                    className="form-control"
                                    placeholder="*password"
                                    name="password"
                                    value={password}
                                    autoComplete="off"
                                    style={{width:'260px',height:'2px',marginLeft:'62px',textalign:'center',padding:'18px',fontSize:'14px'}}
                                    onChange={adminhandler}
                                ></input>
                                 {errors.password && <div style={{color:'red'}}>{errors.password}
                            </div>}
                            </div>
                            {/* <div className="mb-3">
                                <b><label htmlFor="Password" className="form-label">Password</label></b>
                                <input type="radio" name="r1"></input>
                                <input type="radio" name="r1"></input>
                            </div> */}
                           
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

export default Adminpage;