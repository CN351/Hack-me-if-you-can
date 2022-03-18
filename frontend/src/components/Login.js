import React, { useContext, useEffect  } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Login = () =>  {

    const[email,setEmail] = React.useState("")
    const[password,setPassword] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <><div className='container-login'>
                <Navbar></Navbar>
                <form className='form-login' onSubmit={handleSubmit}>

                    <center>
                        <img src='Pics/logo.png' style={{ width: 150, height: 150 }} />
                    </center>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                    </div>

                    <div className="form-group" style={{ marginTop: 10 }}>
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    </div>

                    {/* <div className="form-group">
                        <div className="custom-control custom-checkbox" style={{ marginTop: 10 }}>
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div> */}

                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 10 ,width:150}}>
                        Login
                    </button>

                    <p className="forgot-password text-right">
                        {/* Forgot <a href="/">password?</a> */}
                        Register<Link to="/Register">click here</Link>
                    </p>
                </form>
            </div>
            </>
    )
}

export default Login