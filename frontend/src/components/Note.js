import React from 'react';
import Navbar from './Navbar';

const Note = () => {
    return (
        <><Navbar></Navbar>
            <div style={{ backgroundColor: '#353538' }}>
                <div style={{ width: 1000, height: 1100, marginLeft: 450, marginBottom: 450, paddingTop: 50 }}>
                    <div className="card" style={{ borderRadius: 20}}>
                        <div className="card-body">
                            <div className="note-blue-header">
                                Note
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <img src='Pics/Normal_Group.png' style={{ width: 960, height: 400, borderRadius: 15 }} />
                            </div>
                                    <div style={{color: "red" ,textAlign:'left',marginTop:20}}>

                                    หากต้องการผลตรวจที่ชัดเจนยิ่งขึ้น ขอแนะนำให้เช็คด้วยชุดตรวจ ATK (Antigen Test Kit) และถ้าหากพบเชื้อ ให้ทำการกักตัวตรวจสอบอาการอีกครั้ง
                                    <br></br>
                                    ถ้าหากตรวจแล้วพบเชื้อ แนะนำให้ปฏิบัติตัวดังนี้
                                    </div>
                                    <div>
                                    <h4 style={{color: "red"}}>
                                        
                                    </h4>
                                    </div>
                                
                            <div className="note-blue-detail">
                            
                                การดูแลตนเองเบื้องต้น
                                <div style={{ marginTop: 10, fontSize: 18 }}>
                                    
                                    <div>
                                        - ทำการ Home Isolation
                                    </div>
                                    <div>
                                        - ห้ามออกจากที่พักและปฏิเสธผู้ใดมาเยี่ยมที่บ้าน
                                    </div>
                                    <div>
                                        - เว้นระยะห่าง อย่างน้อย 2 เมตร
                                    </div>
                                    <div>
                                        - แยกห้องพัก ของใช้ส่วนตัวกับผู้อื่น
                                    </div>
                                    <div>
                                        - หลีกเลี่ยงการรับประทานอาหารร่วมกัน
                                    </div>
                                    <div>
                                        - สวมหน้ากากอนามัยตลอดเวลา หากไม่ได้อยู่คนเดียว
                                    </div>
                                    <div>
                                        - ล้างมือด้วยสบู่ หรือแอลกอฮอล์เจลทุกครั้ง หลังสัมผัสสิ่งของต่าง ๆ
                                    </div>
                                    <div>
                                        - แยกซักเสื้อผ้า รวมไปถึงควรใช้ห้องน้ำแยกจากผู้อื่น
                                    </div>

                                </div>
                            </div>

                            <div className="note-blue-detail">
                                การดูแลรักษาตามอาการ
                                <div style={{ marginTop: 10, fontSize: 18 }}>
                                    <div>
                                        - หากวัดอุณหภูมิร่างกายได้มากกว่า 37.5 องศา ควรทานยาลดไข้
                                    </div>
                                    <div>
                                        - หากมีอาการไอหรือเจ็บคอ ควรดื่มน้ำเพิ่มขึ้นและพักผ่อนให้เพียงพอ
                                    </div>

                                </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Note;