
import Navbar from './Navbar'
import React, { useContext,  useEffect } from "react";

import { UserContext } from "../context/UserContext";


function Profile() {

    const [Firstname, setFirstName] = React.useState("")
    const [Lastname, setLastName] = React.useState("")
    const [Day, setDay] = React.useState("")
    const [Mouth, setMouth] = React.useState("")
    const [Year, setYear] = React.useState("")
    const [Height, setHeight] = React.useState("")
    const [Weight, setWeight] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [Sick,setSick] = React.useState("")
    const [EditButton, setEditButton] = React.useState(true)
    const [token] = useContext(UserContext);
    const [id,setId] = React.useState("")
    
    useEffect(()=> {
        get_profile()
    },[])
    
    const get_profile = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };
        const response = await fetch("http://127.0.0.1:8000/api/users/me", requestOptions);
        if (!response.ok) {
            console.log("error fetch user");
        } else {
            const data = await response.json();
            
            
            const bdArr = data.birth_date.split("/");
            
            if (bdArr.length > 2){
                setDay(bdArr[2])
                setMouth(bdArr[1])
                setYear(bdArr[0])
            }
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setHeight(data.height)
            setWeight(data.weight)
            setEmail(data.email)
            setSick(data.sick)
            setId(data.id)
        }
    };
    

    
    
    
    const put_data = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({ email: Email,first_name: Firstname, last_name: Lastname, sick: Sick, birth_date: Year + '/' + Mouth + '/' + Day, weight: Weight, height: Height }),
        };
        console.log(requestOptions);
        const response = await fetch("http://127.0.0.1:8000/api/update/"+id, requestOptions);
        const data = await response.json();
        if (!response.ok) {
            console.log(data.detail);
            console.log("error update");
        } else {
            console.log("complete");
            
            
        }
    };
    const handleSubmit = async() =>{
        
        if (EditButton){
            setEditButton(false)
            
        }
        else{
            setEditButton(true)
            get_profile()
            await put_data()
        }
    }
    


    return (

        <div className='comtainer-profile'>
            <Navbar></Navbar>
            <div className='profile'>
                <h3>Profile</h3>
                <div className='profile-name'>
                    <div className="form-group" style={{ width: 235, }}>
                        <label>First name</label>
                        <input type="text" onChange={(e) => { setFirstName(e.target.value) }} className="form-control" defaultValue={Firstname} disabled={EditButton} />
                    </div>

                    <div className="form-group" style={{ width: 235, marginLeft: 20 }}>
                        <label>Last name</label>
                        <input type="text" onChange={(e) => { setLastName(e.target.value) }} className="form-control" defaultValue={Lastname} disabled={EditButton} />
                    </div>
                </div>
                

                <a>Birthday</a>
                <div className='birthday'>
                    <div className="form-group" style={{}}>
                        <input type="text" onChange={(e) => { setDay(e.target.value) }} className="form-control" defaultValue={Day} disabled={EditButton} />
                    </div>

                    <div className="form-group" style={{ marginLeft: 20 }}>
                        <input type="text" onChange={(e) => { setMouth(e.target.value) }} className="form-control" defaultValue={Mouth} disabled={EditButton} />
                    </div>

                    <div className="form-group" style={{ marginLeft: 20 }}>
                        <input type="text" onChange={(e) => { setYear(e.target.value) }} className="form-control" defaultValue={Year} disabled={EditButton} />
                    </div>
                </div>

                <div className='height-weight'>
                    <div className="form-group" style={{ width: 235, }}>
                        <label>Height</label>
                        <input type="text" onChange={(e) => { setHeight(e.target.value)}} className="form-control" defaultValue={Height} disabled={EditButton} />
                    </div>

                    <div className="form-group" style={{ width: 235, marginLeft: 20 }}>
                        <label>Weight</label>
                        <input type="text" onChange={(e) => { setWeight(e.target.value) }} className="form-control" defaultValue={Weight} disabled={EditButton} />
                    </div>
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" defaultValue={Email} disabled={EditButton} />
                </div>

                <button type="button" onClick={handleSubmit}  className="btn btn-primary btn-lg btn-block" style={{ marginTop: 25, width: 150 }}>
                    {EditButton ? "Edit Profile" : "Save Edit"}
                </button>


            </div>
        </div>
    )
}

export default Profile
