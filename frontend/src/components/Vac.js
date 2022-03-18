import React,{useEffect} from 'react';
import Navbar from './Navbar';

const Vac = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <><div className='container-vac'>
            <Navbar></Navbar>
            <div className='vac-img-head'>
                <p className='vaccine'>VACCINES</p>
            </div>
            <div className = "headvac">
                <p className = "headline-vac">VACCINES COVID-19</p>
                <p className = "bodyline-vac">ในปัจจุบันมีการคิดค้นวัคซีน COVID-19 จากหลายบริษัทผู้ผลิตจากหลากหลายประเทศ ซึ่งแต่ละบริษัทก็จะมีกระบวนการผลิตที่แตกต่างกันไป แต่ทั้งหมดนี้เพื่อจุดประสงค์เดียวกันคือ สร้างภูมิคุ้มกันและป้องกันการแพร่ระบาด โดยวัคซีนป้องกันโรค COVID-19 นั้นจะมีทั้งหมด 4 ประเภทด้วยกัน ได้แก่</p>
            </div>
            <div className = "bodyvac">
                <p className = "sectionhead1">1.วัคซีนชนิดสารพันธุกรรม</p>
                <p className = "sectionbody1">ได้แก่ เอ็มอาร์เอ็นเอ (mRNA) วัคซีนกลุ่มนี้ ใช้เทคโนโลยีใหม่สังเคราะห์สารพันธุกรรมเอ็มอาร์เอ็นเอ (messenger RNA: mRNA) ที่เฉพาะเจาะจงกับเชื้อไวรัส วัคซีนจะทำหน้าที่พา mRNA เข้าเซลล์ และ กํากับให้เซลล์ผลิตสารโปรตีนสไปค์ของเชื้อไวรัส ซึ่งโปรตีนนี้จะกระตุ้นระบบภูมิคุ้มกันของร่างกายให้สร้างแอนติบอดีขึ้นมาต่อต้านเชื้อ</p>
                <p className = "sectionhead2">2.วัคซีนชนิดใช้ไวรัสเป็นพาหะ (Recombinant viral vector vaccine)</p>
                <p className = "sectionbody2">วัคซีนกลุ่มนี้ใช้ไวรัสที่สามารถตัดแต่งพันธุกรรม เช่น ไวรัสอะดีโน (Adenovirus)โดยนำมาดัดแปลงพันธุกรรมให้ไม่สามารถแบ่งตัวได้ และใส่สารพันธุกรรมของไวรัสโรคโควิด19 ติดไปด้วย เมื่อนํามาฉีดไวรัสพาหะเหล่านี้จะเลียนแบบการติดเชื้อตามธรรมชาติ โดยกระตุ้มภูมิคุ้มกันทั้งระบบให้สร้างแอนติบอดีย์ต่อไวรัสโรคโควิด19 ตามสารพันธุกรรมที่ใส่เข้าไป</p>
                <p className = "sectionhead3">3.วัคซีนที่ทําจากโปรตีนส่วนหนึ่งของเชื้อ (Protein subunit vaccine)</p>
                <p className = "sectionbody3">วัคซีนที่ผลิตโดยเทคโนโลยีนี้ ทั่วโลกมีความคุ้นเคยมานาน เพราะใช้ในการผลิตวัคซีนหลายชนิด ผลิตโดยการ สร้างโปรตีนของเชื้อไวรัส ด้วยระบบ cell culture, yeast, baculovirus เป็นต้น แล้วนํามาผสมกับสารกระตุ้นภูมิ เมื่อฉีดเข้าสู่ร่างกายจะกระตุ้นให้ร่างกายสร้างแอนตีบอดีต่อต้านโปรตีนสไปค์ของไวรัสโรคโควิด19</p>
                <p className = "sectionhead4">4.วัคซีนชนิดเชื้อตาย (Inactivated vaccine)</p>
                <p className = "sectionbody4">วัคซีนกลุ่มนี้ผลิตโดยนําไวรัสโรคโควิด19 มาเลี้ยงขยายจํานวนมาก และนํามาทำให้เชื้อตาย  การฉีดวัคซีนจะกระตุ้นให้ร่างกายสร้างภูมิคุ้มกันต่อไวรัสทุกส่วน เสมือนได้รับเชื้อไวรัสโดยตรงแต่ไม่ทำให้เกิดโรค เพราะเชื้อตายแล้ว</p>
            </div>

            <div className = "setButtonAll">

            <div className = "setButton1">
            <button className="vaccine1 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href="https://vichaivej-nongkhaem.com/health-info/%E0%B8%A7%E0%B8%B1%E0%B8%84%E0%B8%8B%E0%B8%B5%E0%B8%99%E0%B9%84%E0%B8%9F%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C/"><img src='Pics/Pfizer2.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine1-word">วัคซีนโควิดไฟเซอร์ (Pfizer) มีชื่อทางการว่า BNT162b2 เป็นวัคซีนป้องกันโรคโควิด 19 ชนิด mRNA ที่คิดค้นโดยบริษัทไฟเซอร์ (Pfizer) ร่วมกับบริษัทสัญชาติเยอรมันชื่อไอโบเอ็นเท็ค (BioNTech) ได้รับการอนุมัติให้ใช้ในกรณีฉุกเฉินจากองค์การอาหารและยาสหรัฐ (Food and Drug Administration: FDA) เพื่อป้องกันโรคโควิด 19</p>
            </div>

            <div className = "setButton2">
            <button className="vaccine2 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href = "https://www.samitivejhospitals.com/th/article/detail/%E0%B8%A7%E0%B8%B1%E0%B8%84%E0%B8%8B%E0%B8%B5%E0%B8%99-moderna"><img src='Pics/Moderna.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine2-word">Moderna คือ วัคซีนชนิดเอ็มอาร์เอ็นเอ-1273 ( mRNA-1273) เป็นนวัตกรรมล่าสุด แตกต่างจากวัคซีนทั่วไปที่เป็นโปรตีนหรือเชื้อโรคที่ถูกทำให้ตาย และต่างจากวัคซีนชนิดที่ใช้ไวรัสพาหะ (Viral Vector Vaccine) พัฒนาโดย บริษัท ModernaTX, Inc. สหรัฐอเมริกา ซึ่งจัดเป็นวัคซีนที่มีประสิทธิภาพในการป้องกันโควิด-19 สูงเป็นอันดับต้นๆ ของโลก</p>
            </div>

            <div className = "setButton3">
            <button className="vaccine3 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href = "https://www.doctorraksa.com/th-TH/blog/astrazeneca-covid19-vaccine.html"><img src='Pics/Astra2.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine3-word">วัคซีน AstraZeneca คือวัคซีนที่ใช้สำหรับป้องกันโรคที่เกิดจากการติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 หรือโรคโควิด-19 ที่กำลังแพร่ระบาดในปัจจุบัน ตัววัคซีนถูกผลิตขึ้นมาด้วยเทคโนโลยีไวรัลเวกเตอร์ (Viral Vector Vaccine) คือการทำให้ไวรัสอ่อนแอลงแล้วใส่สารพันธุกรรมของไวรัสโคโรนาเข้าไป เพื่อให้ฉีดแล้วไม่เกิดโรคแต่จะไปกระตุ้นให้เกิดภูมิคุ้มกันในร่างกาย</p>
            </div>

            <div className = "setButton4">
            <button className="vaccine4 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href = "https://hdmall.co.th/c/covid-vaccine-johnson-and-johnson"><img src='Pics/Json.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine4-word">วัคซีนจอห์นสันแอนด์จอห์นสัน เป็นวัคซีนโควิด-19 ชนิดเดียวที่ฉีดเพียง 1 เข็ม โดยฉีดบริเวณกล้ามเนื้อต้นแขน  สาเหตุที่ฉีดเพียงเข็มเดียว เพราะจากการทดลองในระยะที่ 1 และ 2 พบว่า การฉีดวัคซีนเข็มที่ 1 สามารถกระตุ้นภูมิคุ้มกันได้ดีแล้ว ในขณะที่การฉีดวัคซีนเข็มที่ 2 ไม่ได้เพิ่มระดับภูมิคุ้มกันมากนัก</p>
            </div>

            <div className = "setButton5">
            <button className="vaccine5 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href = "https://hdmall.co.th/c/covid-vaccine-sinovac"><img src='Pics/Sinovac.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine5-word">วัคซีนโคโรนาแวค หรือซิโนแวค ใช้เทคโนโลยีการผลิตวัคซีนแบบเชื้อตาย (Inactivated Vaccine)  กลไกของวัคซีนโควิดชนิดนี้คือ การเหนี่ยวนำให้ร่างกายสร้างภูมิคุ้มกัน หรือแอนติบอดีต้านเชื้อไวรัสเชื้อไวรัสซาร์ส-โควี-2 เพื่อไม่ให้เข้าสู่เซลล์ร่างกายได้นั่นเอง</p>
            </div>

            <div className = "setButton6">
            <button className="vaccine6 btn-light" style={{ width: 200, height: 200 , marginLeft:20, borderRadius:50}} type="button">
            <a href = "https://hdmall.co.th/c/covid-vaccine-sinopharm"><img src='Pics/Sinopharm.png' style={{ width: 185, height: 185 , borderRadius:50}} /></a>
            </button>
            <p className = "vaccine6-word">วัคซีนโควิดซิโนฟาร์มเป็นวัคซีนชนิดเชื้อตาย (Inactivated vaccine) ผลิตโดยการนำเชื้อไวรัสสายพันธุ์ WIV04 และ HB02 มาเลี้ยงขยายจำนวนมาก แล้วนำมาฆ่าด้วยสารเคมี  จึงเหมาะสำหรับประเทศที่ไม่มีอุปกรณ์พิเศษ หรือรถแช่เย็นอุณหภูมิต่ำมากๆ สำหรับการขนส่งวัคซีน</p>
            </div>
            </div>
            <div className = "end">
            <div className = "end-vac">
                <p>HOMPITAL</p>
            </div>
            </div>

        </div>
        </>
    )
}
export default Vac;