import React, { useContext,  useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Register = () => {

    const [firstname, setFirstName] = React.useState("")
    const [lastname, setLastName] = React.useState("")
    
    const [day, setDay] = React.useState("")
    const [mouth, setMouth] = React.useState("")
    const [year, setYear] = React.useState("")
    const [height, setHeight] = React.useState(0)
    const [weight, setWeight] = React.useState(0)
    const [idcard, setIdcard] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [telephone, setTelephone] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [password2, setPassword2] = React.useState("")





    const handleSubmit = (e) => {
        e.preventDefault();
        // setBirthday()

        if (password === password2 && password.length > 5
            && firstname !== ""
            && lastname !== ""
            && day !== ""
            && mouth !== ""
            && year !== "" 
            && email !== "") {
        } else {
            console.log("error password");
        }
    }

    return (
        <><div className='container-signup'>
            <Navbar></Navbar>
            <form className='form-signup' onSubmit={handleSubmit}>

                <center><img src='Pics/logo.png' style={{ width: 150, height: 150, borderTop: 2 }} /></center>

                <h3>Register</h3>

                <div className='Firstname-Lastname'>
                    <div className="form-group" style={{ width: 235, }}>
                        <label>First name</label>
                        <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
                    </div>

                    <div className="form-group" style={{ width: 235, marginLeft: 20 }}>
                        <label>Last name</label>
                        <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
                    </div>
                </div>
                {/* 
                <div className='Age'>
                    <div className="form-group" style={{ width: 490, }}>
                        <label>Age</label>
                        <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    </div>
                </div> */}

                <a>Birthday</a>
                <div className='birthday'>
                    <div className="form-group" style={{}}>
                        <input type="text" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Day" />
                    </div>

                    <div className="form-group" style={{ marginLeft: 20 }}>
                        <input type="text" className="form-control" value={mouth} onChange={(e) => setMouth(e.target.value)} placeholder="Mouth" />
                    </div>

                    <div className="form-group" style={{ marginLeft: 20 }}>
                        <input type="text" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
                    </div>
                </div>

                <div className='height-weight'>
                    <div className="form-group" style={{ width: 235, }}>
                        <label>Height</label>
                        <input type="text" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
                    </div>

                    <div className="form-group" style={{ width: 235, marginLeft: 20 }}>
                        <label>Weight</label>
                        <input type="text" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
                    </div>
                </div>

                <div className="form-group">
                    <label>ID card Number</label>
                    <input type="text" className="form-control" value={idcard} onChange={(e) => setIdcard(e.target.value)} placeholder="Enter ID card Number" />

                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                    <label>Tel.</label>
                    <input type="email" className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone Number" />

                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

                    <label>Password again</label>
                    <input type="password" className="form-control" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 10, width: 150 }}>Register</button>

                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
        </div></>
    )
}

export default Register