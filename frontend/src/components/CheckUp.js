
import React, { useContext, useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import { useHistory } from "react-router-dom";
const CheckUp = () => {

    const illness = [{ check: false, value: 'มีไข้', stage: 1 }
        , { check: false, value: 'มีอาการไอ', stage: 1 }
        , { check: false, value: 'เจ็บคอ', stage: 1 }
        , { check: false, value: 'ท้องเสีย', stage: 1 }
        , { check: false, value: 'มีผื่นบนผิวหนัง', stage: 1 }
        , { check: false, value: 'ตาแดงหรือระคายเคืองตา', stage: 1 }
        , { check: false, value: 'ปวดศีรษะ', stage: 2 }
        , { check: false, value: 'ปวดเมื่อยเนื้อตัว', stage: 2 }
        , { check: false, value: 'สูญเสียความสามารถในการดมกลิ่นและรับรส', stage: 3 }
        , { check: false, value: 'หายใจลำบากหรือหายใจถี่', stage: 3 }
        , { check: false, value: 'สูญเสียความสามารถในการพูดหรือเคลื่อนไหว หรือมึนงง', stage: 3 }
        , { check: false, value: 'เจ็บหน้าอก', stage: 3 }]

    var [countGreen, setCountGreen] = useState(0)
    var [countYellow, setCountYellow] = useState(0)
    var [countRed, setCountRed] = useState(0)

    const [Firstname, setFirstName] = React.useState("")
    const [Lastname, setLastName] = React.useState("")
    const [Day, setDay] = React.useState("")
    const [Mouth, setMouth] = React.useState("")
    const [Year, setYear] = React.useState("")
    const [Height, setHeight] = React.useState("")
    const [Weight, setWeight] = React.useState("")
    const [Email, setEmail] = React.useState("")
    var sick = useRef(0)
    const [id, setId] = React.useState("")
    

    const set_check = (e) => {
        const index = illness.findIndex((element) => element.value == e.target.name);
        illness[index].check = e.target.checked
        const item = illness[index]
        if (item.check == true) {
            // console.log(illness[index]);
            if (item.stage == 1) {
                setCountGreen(countGreen + 1)
            }
            else if (item.stage == 2) {
                setCountYellow(countYellow + 1)
            }
            else if (item.stage == 3) {
                setCountRed(countRed + 1)
            }
        }
        else if (item.check == false) {
            if (item.stage == 1) {
                setCountGreen(countGreen - 1)
            }
            else if (item.stage == 2) {
                setCountYellow(countYellow - 1)
            }
            else if (item.stage == 3) {
                setCountRed(countRed - 1)
            }
        }


    }

    return (

        <div classname='CU' style={{ backgroundColor: '#666666', height: 1500 }}>
            <Navbar></Navbar>


            <div style={{ width: 1000, marginLeft: 475, marginBottom: 450, paddingTop: 50 }}>
                <div className="card" style={{ borderRadius: 20}}>
                    <div className="card-body">
                        <div className="card" style={{ backgroundColor: '#0d6efd', color: "white", fontSize: 50, borderRadius: 15 }}>
                            Covid19 Check Up List
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <img src='Pics/chechupban.png' style={{ width: 960, height: 400, borderRadius: 15 }} />
                        </div>

                        <>
                            {illness.map((x) =>
                                <div style={{ textAlign: "left" ,display:'flex'}}>
                                    <input className="form-check-input" name={x.value} onChange={set_check} type="checkbox" defaultValue id="flexCheckChecked" defaultChecked={x.check} style={{ width: 30, height: 30, marginLeft: 20,marginTop: 10 }} />
                                    <p className="form-check-label" htmlFor="flexCheckChecked" style={{ fontSize: 20, marginLeft: 20, marginTop: 10 }}>
                                        {x.value}
                                    </p>
                                </div>
                            )}
                        </>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 40, width: 150 }} >Submit</button>
                        </div>


                    </div>
                </div>


            </div>
        </div>


    )
}
export default CheckUp;